import { getStatistics } from '@/actions/unity.action'
import Charts from '@/components/Charts'
import React from 'react'

const page = async () => {

    const result = await getStatistics()
    console.log("getStatistics : ",result);

    return (
        <Charts result={result} />
    )
}

export default page