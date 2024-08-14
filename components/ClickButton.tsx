import { ButtonProps } from '@/types'
import React, { useState } from 'react'
import { Button } from './ui/button'

const ClickButton = ({ children, isLoading }: ButtonProps) => {

    const [loading, setLoading] = useState(true)

    return (
        <div className='mt-10'>
            <Button onClick={() => setLoading(false)} className='w-[500px]'>{children}</Button>
        </div>
    )
}

export default ClickButton
