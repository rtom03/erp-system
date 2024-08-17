import { HeaderBoxProps } from '@/types'
import React from 'react'

const HeaderBox = ({ title, subtext }: HeaderBoxProps) => {
    return (
        <div className='flex flex-col items-center ml-64'>
            <h1 className='text-3xl'>{title}</h1>
            <p>{subtext}</p>
        </div>
    )
}

export default HeaderBox
