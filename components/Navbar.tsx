'use client'
import { navbarLinks2, navbarLinks, profileNav } from '@/constant/utils'
import { cn } from '@/lib/utils'
import { NavbarProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { logoutAccount } from '@/lib/actions/user.action'


const Navbar = ({ user }: NavbarProps) => {

  const router = useRouter()
  const handleLogout = async () => {
    const logout = await logoutAccount()
    if (logout) router.push('/sign-in')
  }
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
      <div className='flex flex-row gap-10 items-center'>
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

        <div className='flex flex-row gap-5 mr-36'>
          <Menubar className='border-none'>
            <MenubarMenu >
              {profileNav.map((item) => {
                const isActive = pathname === item.route || pathname?.startsWith(`${item.route}/`)
                return (

                  <Link href={item.route}
                    key={item.label}>
                    <MenubarTrigger>
                      <Image
                        src={item.img}
                        alt='img'
                        width={30}
                        height={20}
                      />
                    </MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        <Link href='/profile/user-profile'>Profile</Link>
                      </MenubarItem>
                      <MenubarItem>
                        <Link href='/profile/my-jobs'>My jobs</Link>
                      </MenubarItem>
                      <MenubarItem>
                        <Link href='/profile/reviews'>Reviews</Link>
                      </MenubarItem>
                      <MenubarItem>
                        <Link href='/profile/settings'>Settings</Link>
                      </MenubarItem>
                      <MenubarItem>
                        <Link href='/profile/help-center'>Help center</Link>
                      </MenubarItem>
                      <MenubarItem className='flex justify-center ' onClick={handleLogout}>
                        Sign out
                      </MenubarItem>
                    </MenubarContent>
                  </Link>

                )
              })}
            </MenubarMenu>
          </Menubar>
          <div>
            <Link href='/post/employer' >
              <h2 className=' border-l-2 p-2'>Employers/Post a Job</h2></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar
