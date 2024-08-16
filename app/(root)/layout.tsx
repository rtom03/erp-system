'use server'
import Navbar from '@/components/Navbar';
import { getLoggedInUser } from '@/lib/actions/user.action';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'



export default async function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;

}>) {


    const user = false;
    const loggedIn = await getLoggedInUser()
    if (!loggedIn)
        redirect('/sign-in')
    return (
        <div>
            <Navbar user={loggedIn} />
            {children}
        </div>
    )
}