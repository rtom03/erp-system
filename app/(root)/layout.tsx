'use client'
import AuthForm from '@/components/AuthForm';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react'


export default async function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;

}>) {

    const router = useRouter()

    const user = false;

    if (!user)
        router.push('/sign-in')
    return (
        <div>
            <Navbar user={user} />
            {children}
        </div>
    )
}