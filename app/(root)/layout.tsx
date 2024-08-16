'use client'
import AuthForm from '@/components/AuthForm';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react'
import { getLoggedInUser } from '../lib/actions/user.action';


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