"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { authFormSchema, FormFieldType } from "../lib/utils"
import CustomForm from "./CustomForm"
import Image from "next/image"
import prof from '@/public/prof.svg'
import ClickButton from "./ClickButton"
import { AuthProps } from "@/types"
import Link from "next/link"
import { useState } from "react"
import { SignIn, SignUp } from "@/lib/actions/user.action"
import { useRouter } from "next/navigation"



export const FormValidate = ({ type }: AuthProps) => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState()
    const router = useRouter()
    const formSchema = authFormSchema(type)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })
    async function onSubmit(data: z.infer<typeof formSchema>) {
        setLoading(true)
        try {
            const userData = {
                firstName: data.firstName!,
                lastName: data.lastName!,
                address: data.address!,
                city: data.city!,
                postalCode: data.postalCode,
                email: data.email!,
                password: data.password!,
                dateOfBirth: data.dateOfBirth
            }
            if (type === 'sign-up') {
                const newUser = await SignUp(userData)
                setUser(newUser)
                if (newUser)
                    router.push('/sign-in')
            }

            if (type === 'sign-in') {
                const response = await SignIn({
                    email: data.email!,
                    password: data.password!,
                })
                if (response)
                    router.push('/')
            }
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }



    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex  flex-col justify-center items-center mt-20 ">
                <div className="flex flex-col gap-6">
                    <h1 className=" text-3xl">Hi there 👋</h1>
                    {type === 'sign-in' && (
                        <>
                            <h1 className=" text-3xl">Welcome back 😊 </h1>
                        </>
                    )}
                    {type === 'sign-up' && (
                        <>
                            <div className="flex flex-row  justify-between">
                                <CustomForm
                                    name='firstName'
                                    control={form.control}
                                    fieldtype={FormFieldType.TEXT}
                                    label="First Name"
                                    placeholder="your first name"
                                />
                                <CustomForm
                                    name='lastName'
                                    control={form.control}
                                    fieldtype={FormFieldType.TEXT}
                                    label="Last Name"
                                    placeholder="your last name"
                                />
                            </div>
                            <div className="flex flex-row  justify-between">
                                <CustomForm
                                    name='city'
                                    control={form.control}
                                    fieldtype={FormFieldType.TEXT}
                                    label="City"
                                    placeholder="your city"
                                />
                                <CustomForm
                                    name='address'
                                    control={form.control}
                                    fieldtype={FormFieldType.TEXT}
                                    label="Address"
                                    placeholder="your full address"
                                />
                            </div>

                            <div className="flex flex-row  justify-between">
                                <CustomForm
                                    name='dateOfBirth'
                                    control={form.control}
                                    fieldtype={FormFieldType.TEXT}
                                    label="Data Of Birth"
                                    placeholder="YYYY-MM-DD"
                                />
                                <CustomForm
                                    name='postalCode'
                                    control={form.control}
                                    fieldtype={FormFieldType.TEXT}
                                    label="Postal Code"
                                    placeholder="10001"
                                />
                            </div>
                        </>
                    )}
                    {/* <CustomForm
                        fieldtype={FormFieldType.PHONE_INPUT}
                        name='phone'
                        control={form.control}
                        label="Phone Number"
                        placeholder="(9016) 672 168"
                    /> */}
                    <CustomForm
                        name='email'
                        control={form.control}
                        fieldtype={FormFieldType.INPUT}
                        label="Email"
                        placeholder="enter your email address"

                    />
                    <CustomForm
                        name='password'
                        control={form.control}
                        fieldtype={FormFieldType.INPUT}
                        label="Password"
                        placeholder="enter your password"
                    />

                </div>
                <ClickButton isLoading={loading}> Get Stated</ClickButton>
                <footer>
                    <p>
                        {type === 'sign-in' ? 'Dont have an account?' : 'Already have an account!'}&nbsp;
                        <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="text-sky-500">
                            {type === 'sign-in' ? 'sign-up' : 'sign-in'}
                        </Link>
                    </p>
                </footer>
            </form>
        </Form>
    )
}