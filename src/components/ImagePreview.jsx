

const ImagePreview = ({image, error}) => {


  if(error){
    return <p className='text-rose-600'>{error}</p>
  }

  if(!image){
    return (
      <div className='h-75 text-gray-500 bg-white border rounded-2xl grid place-items-center mt-10'>
        Waiting for your ideas...
      </div>
    )
  }

  return (
    
    
    <div className='bg-white border rounded-2xl p-4 shadow-sm mt-10'>
      <img src={image} alt="Generated Tattoo" 
      className='w-full rounded-xl object-cover'/>
      <div className="flex justify-end">
        <a href={image}
        download={"tattoo.png"}
        className="text-sm border mt-4 font-semibold px-3 py-2 rounded-xl hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:text-white hover:border-none shadow-lg">
          Download Img
        </a>
      </div>
    </div>

    
  )
}

export default ImagePreview