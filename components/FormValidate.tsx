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
import { FormFieldType, formSchema } from "../app/lib/utils"
import CustomForm from "./CustomForm"
import Image from "next/image"
import prof from '@/public/prof.svg'
import ClickButton from "./ClickButton"
import { AuthProps } from "@/types"


export const FormValidate = ({ type }: AuthProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    const user = true;

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex  flex-col justify-start items-center">
                <div className="flex flex-col gap-10">
                    <h1 className=" text-3xl">Hi there 👋</h1>

                    {type === 'sign-in' && (
                        <>
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
                        </>
                    )}

                </div>
                <ClickButton isLoading={false}>Get Stated</ClickButton>




            </form>
        </Form>
    )
}