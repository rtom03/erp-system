import { ButtonProps } from '@/types'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'

const ClickButton = ({ children, isLoading }: ButtonProps) => {

    return (
        <div className='mt-10'>
            <Button type='submit' disabled={isLoading} className='w-[500px]'>

                {isLoading ? (

                    <Image
                        src='/icons/loader.svg'
                        alt='loader'
                        width={24}
                        height={24}
                        className='animate-spin'
                    />

                ) : children}
            </Button>
        </div>
    )
}

export default ClickButton
