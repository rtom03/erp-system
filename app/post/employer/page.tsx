import Employer from '@/components/Employer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <Link href='/' className='flex flex-row items-center gap-3 mt-5 ml-20'>
                <Image
                    src='/icons/circle.svg'
                    alt='circle'
                    width={50}
                    height={50}
                />
                <h2 className='concert-one-regular'>Circle</h2>
            </Link>
            <div className='flex justify-center p-10'>
                <Employer type='company' />
            </div>
        </div>
    )
}

export default page
