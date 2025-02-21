import { Spinner } from "@nextui-org/react"
import { motion } from "framer-motion"

const LoadingCircle = ({color,size}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.1, y: -10 }}
            transition={{ duration: 0.4 }}>
            {/* <div className='loading-circul'></div> */}
            <Spinner color={color} size={size} />
        </motion.div>
    )
}

export default LoadingCircle