import React from 'react'
import { BiLogoPostgresql } from 'react-icons/bi'
import { DiRedis } from 'react-icons/di'
import { FaDocker, FaFigma, FaJs, FaLinux, FaNode, FaNodeJs, FaPython } from 'react-icons/fa'
import { FaC } from 'react-icons/fa6'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { animate, motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: { y: [10, -10], 
                transition: { duration: duration,
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: "reverse",
                 } }
})

const Technologies = () => {
  return (
    <div className='pb-24'>
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            >
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className='p-4'>
                <TbBrandNextjs className='text-7xl' />
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(3.5)}
            className='p-4'>
                <SiMongodb className='text-7xl text-cyan-500'/>
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className='p-4'>
             <DiRedis className='text-7xl text-red-700'/>
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className='p-4'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(6)}
            className='p-4'>
                <FaLinux className='text-7xl text-yellow-500'/>
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className='p-4'>
                <FaC className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(3.5)}
            className='p-4'>
                <FaJs className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className='p-4'>
                <FaPython className='text-7xl text-cyan-500'/>
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className='p-4'>
                <BiLogoPostgresql className='text-7xl text-sky-700'/>
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className='p-4'>
                <FaFigma className='text-7xl text-yellow-200'/>
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(1.5)}
            className='p-4'>
                <FaDocker className='text-7xl text-sky-700'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies