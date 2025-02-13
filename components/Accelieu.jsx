"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Alert, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'

const Accelieu = ({locale}) => {
  const CurrentLang = { en: "English", fr: "Francais", ar: "عربي" }
  const langs = {
    choiser:{ar:"اختر الفئة",fr:"Choisir une catégorie "},
    c1:{ar:"سنة 2000",fr:"année  2000"},
    c2:{ar:"سنة 2010",fr:"année 2010"},
    c3:{ar:"سنة 2020",fr:"année 2020"},
  }

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 2500); // Show after 0.5s
  }, []);


  return (
    <div className='relative w-screen pb-8 min-h-screen hide-scrollbar bg-[url("/images/ramadane.png")] bg-cover  flex flex-col justify-center items-center'>
      <Image src={"/images/logo2.png"} width={500} height={500} className='a absolute top-0 left-0 m-6 w-40 h-40' />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 0.3, y: -120 }}
        transition={{ opacity: { duration: 0.8 }, scale: { delay: 0.8, duration: 0.6 }, y: { delay: 1.8, duration: 0.6 }, }}
        className='absolute top-0 lg:top-auto mt-40 md:mt-28 lg:mt-auto'
      >
        <Image src={"/images/bg2.png"} width={1980} height={1080} className='w-[500px] lg:w-screen h-[40vh] md:w-[90vw] md:h-[70vh]  lg:h-screen ' />
      </motion.div>

      {isVisible ?
        <div
          className='w-full flex flex-col items-center justify-center mt-72 md:mt-72'>
          <h1 className='text-2xl text-neutral-800 font-bold'>{langs?.choiser[locale]}</h1>
          <div className='w-2/3 mt-12 flex flex-col sm:flex-row justify-center gap-6'>
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4, type: "spring", stiffness: 100, damping: 5 }}
              href="/2000" className='flex items-center py-3 bg-white rounded-xl px-4 gap-4'>
              <span className='w-12 h-12 flex justify-center items-center rounded-full bg-yellow-300/30 '>
                <i class="ri-calendar-2-fill text-3xl text-[#FCD60C]  "></i>
              </span>
              <p className=' text-neutral-700 font-bold'>{langs?.c1[locale]}</p>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4, type: "spring", stiffness: 100, damping: 5 }}
              href="/2010" className='flex items-center py-3 bg-white rounded-xl px-4 gap-4'>
              <span className='w-12 h-12 flex justify-center items-center rounded-full bg-yellow-300/30 '>
                <i class="ri-calendar-2-fill text-3xl text-[#FCD60C]  "></i>
              </span>
              <p className=' text-neutral-700 font-bold'>{langs?.c2[locale]}</p>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4, type: "spring", stiffness: 100, damping: 5 }}
              href="/2020" className='flex items-center py-3 bg-white rounded-xl px-4 gap-4'>
              <span className='w-12 h-12 flex justify-center items-center rounded-full bg-yellow-300/30 '>
                <i class="ri-calendar-2-fill text-3xl text-[#FCD60C]  "></i>
              </span>
              <p className=' text-neutral-700 font-bold'>{langs?.c3[locale]}</p>
            </motion.a>
          </div>
          <div className='flex justify-center mt-8 lg:mt-24'>
            <a href='/fr' className="border  text-center border-neutral-700 rounded-full w-28 py-2 flex justify-center items-center cursor-pointer ms-4">
              francais
            </a>
            <a href='/ar' className="border text-center border-neutral-700 rounded-full w-28 py-2 flex justify-center items-center cursor-pointer ms-4">
              عربي
            </a>
          </div>
        </div>
        : null}


    </div>
  )
}

export default Accelieu