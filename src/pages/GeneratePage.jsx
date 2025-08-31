import { useState } from 'react'
import IdeaForm from '../components/IdeaForm'
import ImagePreview from '../components/ImagePreview'
import InkLoader from '../components/InkLoader'
import toast from 'react-hot-toast'

const GeneratePage = () => {
  const [image, setImage] = useState(null)
  const [images, setImages] = useState([]) // store previous images
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleGenerate = async (prompt) => {
    try {
      setLoading(true)
      setError("")
      setImage(null)

      const loadingToast = toast.loading("Drawing your tattoo...")

      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPEN_ROUTER_API_KEY}`,
          'HTTP-Referer': 'http://localhost:5173',
          'X-Title': 'AI Tattoo Generator',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'google/gemini-2.5-flash-image-preview:free',
          messages: [
            {
              role: 'user',
              content: `Create a unique tattoo design based on this idea: "${prompt}". 
              The tattoo style must be clean, high-contrast and suitable for body ink.
              Prefer black and white with detailed line art and shading. Avoid text and backgrounds.`,
            },
          ],
          modalities: ["image", "text"],
        }),
      })

      const text = await res.text()
      if (!text) throw new Error("Empty response from model")

      const data = JSON.parse(text)
      const msg = data?.choices?.[0]?.message
      const imageUrl = msg?.images?.[0]?.image_url?.url

      if (!imageUrl) throw new Error("Image generation failed")

      setImage(imageUrl)
      setImages((prev) => [imageUrl, ...prev]) // save previous images
      toast.success("Tattoo design generated successfully!", { id: loadingToast })
    } catch (err) {
      console.error(err)
      setError("Failed to generate image. Check API key/model and try again")
      toast.error("Failed to generate tattoo. Please try again.", { id: loadingToast })
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = (idx) => {
    setImages((prev) => prev.filter((_, i) => i !== idx))
    toast("Tattoo deleted")
  }

  return (
    <main className='max-w-5xl mx-auto px-6 py-12'>
      <IdeaForm onGenerate={handleGenerate} loading={loading} />

      <div className='mt-8'>
        {loading ? (
          <InkLoader label="Drawing your tattoo..." />
        ) : (
          <ImagePreview image={image} error={error} />
        )}
      </div>

      {images.length > 0 && (
        <div className="mt-12">
          <h2 className="text-lg font-semibold mb-4">Previous Tattoos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="p-3 border rounded-xl shadow-sm flex flex-col items-center gap-3"
              >
                <img
                  src={img}
                  alt={`tattoo-${idx}`}
                  className="w-full h-40 object-contain rounded-md"
                />
                <div className="flex gap-2">
                  {/* Show button */}
                  <button
                    onClick={() => setImage(img)}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg text-sm hover:opacity-85"
                  >
                    Show
                  </button>
                  {/* Download button */}
                  <a
                    href={img}
                    download={`tattoo-${idx}.png`}
                    className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700"
                  >
                    Download
                  </a>
                  {/* Delete button */}
                  <button
                    onClick={() => handleDelete(idx)}
                    className="px-3 py-1 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}

export default GeneratePage