import React from 'react'

const HeaderBox = ({ title, subtext }: HeaderBoxProps) => {
    return (
        <div className='flex ml-64'>
            <h1>{title}</h1>
        </div>
    )
}

export default HeaderBox
