import { motion } from 'framer-motion'
import { nav } from 'framer-motion/client';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {


  const navigate = useNavigate();


  return (
    
    
      <main className='max-w-6xl mx-auto px-6 py-16'>
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}>
          <div className='text-center '>
            <h1 className='text-3xl md:text-5xl font-extrabold tracking-tight leading-tight'>
              AI <span className='text-blue-700'>Tattoo</span> Generator
            </h1>

            <p className='mt-4 text-lg text-gray-600'>
              Type an idea → get a clean, black-ink tattoo design. No Background,
              high contrast, ideal for skin art
            </p>
          </div>
          <div className='mt-8 text-center'>
            <button className='inline-flex bg-gradient-to-r from-blue-500 to-blue-700  hover:opacity-85 hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:scale-101 rounded-xl shadow-lg px-6 py-3 font-semibold text-white text-xl ' onClick={() => navigate("/generate")}>
              Generate a Tattoo  🔥
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 0.97 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.45 }}>
            <div className='aspect-[4/2] rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 grid place-items-center mt-20'>
              <div className='text-center'>
                <div className='text-7xl mb-3'>☯︎</div>
                <p className='text-gray-600 mt-10'>
                  Your AI-Designed Tattoo will look like this
                </p>
              </div>
              <p className='text-gray-600'>
                Built with react + Tailwind + OpenRouter by MAHIN AHMED
              </p>
            </div>
          </motion.div>
        </motion.div>

      </main>
  )
}

export default LandingPage