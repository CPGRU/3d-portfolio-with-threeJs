import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 ${styles.paddingX}`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]'/>
          <div className='w-1 violet-gradient h-40 sm:h-80' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} mt-2 text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Pei</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            This is my first 3D portfolio built in React and Three.js 
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute bottom-32 w-full flex justify-center items-center xs:bottom-10 '>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate={{
                y: [0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero