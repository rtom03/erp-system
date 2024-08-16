'use client'
import Navbar from '@/components/Navbar';
import { getLoggedInUser } from '@/lib/actions/user.action';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react'



export default async function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;

}>) {

    const router = useRouter()

    const user = false;
    const loggedIn = await getLoggedInUser()
    if (!loggedIn)
        router.push('/sign-in')
    if (!user)
        router.push('/sign-in')
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}