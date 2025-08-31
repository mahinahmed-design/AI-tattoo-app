import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className=' bg-white/70 backdrop-blur border-b border-gray-300'>
      <div className='max-w-6xl mx-auto p-6 flex justify-between items-center'>
        <motion.div
          initial={{opacity:0, x:-25}}
          animate={{opacity:1, x:0}}
          transition={{duration:0.50}}
          className='font-bold text-4xl'>
            <Link to="/">
              Tattoo <span className='text-blue-700'>Studio</span>
            </Link>
        </motion.div>
       
      </div>
    </header>
  )
}

export default Header