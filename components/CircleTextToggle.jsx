import { AnimatePresence,motion } from 'framer-motion'
import React from 'react'
import LoadingCircle from './LoadingCircle'

const CircleTextToggle = ({postloader,text,color,size}) => {
    return (
        <AnimatePresence >
            {
                postloader ?
                    <LoadingCircle color={color} size={size} />
                    :
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0.1, y: 10 }}
                        transition={{ duration: 0.2 }}>
                        {text}
                    </motion.span>
            }
        </AnimatePresence>
    )
}

export default CircleTextToggle