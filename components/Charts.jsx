"use client"

import { Tab, Tabs } from '@nextui-org/react'
import React from 'react'
import DayChart from './DayChart'

const Charts = ({ result }) => {
    return (
        <div className='relative w-screen min-h-screen bg-gradient-to-br from-[#FCD60C] to-[#e7c503] flex flex-col pt-20 items-center'>
            <Tabs key={"full"} aria-label="Tabs radius" radius={"full"}>
                {
                    Object.entries(result).map(([date, data]) => (
                        <Tab key={date} title={date} >
                            <DayChart data={data} />
                        </Tab>
                    ))
                }
            </Tabs>

        </div>
    )
}

export default Charts