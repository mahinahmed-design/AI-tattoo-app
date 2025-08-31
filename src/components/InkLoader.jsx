import { motion } from 'framer-motion';

const InkLoader = ({label}) => {

  const dots = [0, 1, 2];

  return (
    <div className='h-64 grid place-items-center'>
      <div className='flex flex-col items-center'>
        <div className='flex gap-2'>
          {dots.map((i) => (
            <motion.div key={i} className='h-2 w-2 bg-blue-700 rounded-full'
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 0.9,
                delay: i * 0.12
              }} />
          ))}
        </div>
        <p className='text-gray-700'>{label}</p>
      </div>
    </div>
  )
}

export default InkLoader