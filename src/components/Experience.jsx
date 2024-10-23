import React from 'react';
import { delay, motion } from 'framer-motion';

const Experience = () => {
  return (
    <>
      <div>Experience...</div>
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity:1}}
        transition={{duration:3, repeat: Infinity}}
      >
        test
      </ motion.div>

      
    </>

  )
}

export default Experience