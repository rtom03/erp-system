'use client'
import { navbarLinks2, navbarLinks } from '@/constant/utils'
import { cn } from '@/lib/utils'
import { NavbarProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = ({ user }: NavbarProps) => {
  const pathname = usePathname()
  return (
    <div className='flex flex-row p-3 justify-between items-center border-y-2'>
      <div className='flex flex-row gap-10 ml-20 items-center'>
        <Link href='/'
          className=' cursor-pointer flex item-center gap-2'>
          <Image
            src="/icons/circle.svg"
            width={34}
            height={44}
            alt="Horizon logo"
            className='size-[34px] mt-1  max-xl:size-14' />
          <h1 className='concert-one-regular'>Circle</h1>
        </Link>
        {navbarLinks.map((item) => {
          const isActive = pathname === item.route || pathname?.startsWith(`${item.route}/`)
          return (
            <Link href={item.route}
              key={item.label}
              className={cn({ 'border-1 border-cyan-400': isActive })}
            >
              <div>
                <h2 className={cn({ 'border-1 border-cyan-400': isActive })}
                >{item.label}</h2>
              </div>
            </Link>
          )
        })}
      </div>
      <div className='flex flex-row gap-10 mr-36'>
        {navbarLinks2.map((item) => {
          const isActive = pathname === item.route || pathname?.startsWith(`${item.route}/`)
          return (
            <Link href={item.route}
              key={item.label}>
              <div>
                <Image
                  src={item.img}
                  alt='img'
                  width={30}
                  height={20}
                />
                {/* <h2>{item.label}</h2> */}
              </div>
            </Link>
          )
        })}
        <div>
          <Link href='/post/employer' >
            <h2 className=' border-l-2 p-2'>Employers/Post a Job</h2></Link>

        </div>
      </div>
    </div>
  )
}

export default Navbar
