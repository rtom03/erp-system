import AuthForm from '@/components/AuthForm';
import Navbar from '@/components/Navbar';
import React, { ReactNode } from 'react'


export default async function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;

}>) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}