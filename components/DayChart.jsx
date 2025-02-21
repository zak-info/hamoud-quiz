import React from 'react'
import { motion } from 'framer-motion'
import BarChart from './Statistics/BarChart'
import PieChart from './Statistics/PieChart'

const DayChart = ({data}) => {
    return (
        <div className='w-screen px-6 lg:px-0 flex flex-col lg:flex-row justify-center gap-6 py-8'>
            <div className='w-full flex flex-col lg:flex-row justify-center gap-4'>
                <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4, type: "spring", stiffness: 100, damping: 5 }}
                    href="/2010" className='flex items-center py-3 bg-white rounded-xl px-4 gap-4'>
                    <span className='w-12 h-12 flex justify-center items-center rounded-full bg-yellow-300/30 '>
                        <i class="ri-calendar-2-fill text-3xl text-[#FCD60C]  "></i>
                    </span>
                    <p className=' text-neutral-700 font-bold'>{data?.nbtries} Essaye</p>
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4, type: "spring", stiffness: 100, damping: 5 }}
                    href="/2010" className='flex items-center py-3 bg-white rounded-xl px-4 gap-4'>
                    <span className='w-12 h-12 flex justify-center items-center rounded-full bg-green-100 '>
                        <i class="ri-checkbox-circle-line text-3xl text-lime-400  "></i>
                    </span>
                    <p className=' text-neutral-700 font-bold'>{data?.nbsuccess} Succès</p>
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.4, type: "spring", stiffness: 100, damping: 5 }}
                    href="/2010" className='flex items-center py-3 bg-white rounded-xl px-4 gap-4'>
                    <span className='w-12 h-12 flex justify-center items-center rounded-full bg-red-100 '>
                        <i class="ri-close-circle-line text-3xl text-red-500  "></i>
                    </span>
                    <p className=' text-neutral-700 font-bold'>{data?.nbfails}  Échecs</p>
                </motion.span>

            </div>

            <div className='w-full flex flex-col lg:flex-row justify-center gap-4'>
                <div className='w-full lg:w-1/3 h-72 p-4 rounded-2xl bg-white '>
                    <BarChart BarData={data?.points} />
                </div>
                <div className='w-full lg:w-1/3 h-72 p-4 rounded-2xl bg-white '>
                    <PieChart  PieData={[{item:"Succès",value:data?.nbsuccess},{item:"Échecs",value:data?.nbfails}]} />
                </div>
            </div>

        </div>
    )
}

export default DayChart