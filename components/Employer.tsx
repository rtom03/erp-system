'use client'
import React, { useState } from 'react'
import HeaderBox from './HeaderBox'
import { Form } from './ui/form'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { authCompany, FormFieldType } from '@/lib/utils'
import { CompanyTypeProps } from '@/types'
import CustomForm from './CustomForm'
import { SelectItem } from './ui/select'
import { adOpt, option } from '@/constant/utils'
import ClickButton from './ClickButton'
import { zodResolver } from "@hookform/resolvers/zod"


const Employer = ({ type }: CompanyTypeProps) => {
    const [loading, setLoading] = useState(false)

    const formSchema = authCompany(type)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });
    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setLoading(true)
        try {
            const companyData = {
                companyName: data.name,
                name: data.name,
                heardOfUs: data.heardOfUs,
                companyLength: data.companyLength,
                phone: data.phone
            }

        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    return (
        <div>
            <HeaderBox title='Create an Employer Account'
                subtext="You haven't posted a job before, so you'll need to create an employer account." />
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-10'>
                        {type === 'company' && (
                            <>
                                <CustomForm
                                    fieldtype={FormFieldType.OTHER}
                                    control={form.control}
                                    name='companyName'
                                    label="Your company's name"
                                />
                                <CustomForm
                                    fieldtype={FormFieldType.SELECT}
                                    control={form.control}
                                    name='length'
                                    label="Your company's number of employees"
                                    placeholder='select an option'>
                                    {option.map((opt) => (
                                        <SelectItem key={opt.name} value={opt.name}>
                                            <div className='flex cursor-pointer'>
                                                <p>{opt.name}</p>
                                            </div>
                                        </SelectItem>
                                    ))}
                                </CustomForm>
                                <CustomForm
                                    fieldtype={FormFieldType.OTHER}
                                    control={form.control}
                                    name='name'
                                    label="Your first and last name"
                                />
                                <CustomForm
                                    fieldtype={FormFieldType.SELECT}
                                    control={form.control}
                                    name='option'
                                    label="how you had about us"
                                    placeholder='select an option'>
                                    {adOpt.map((opt) => (
                                        <SelectItem key={opt.value} value={opt.value}>
                                            <div className='flex cursor-pointer'>
                                                <p>{opt.value}</p>
                                            </div>
                                        </SelectItem>
                                    ))}
                                </CustomForm>
                                <CustomForm
                                    fieldtype={FormFieldType.OTHER}
                                    control={form.control}
                                    name='option2'
                                    label='Your phone number'
                                    sublabel='for account management communication. Not visible to job seekers.
'
                                />
                                <div className='flex'>
                                    <ClickButton isLoading={loading} type='company'>continue</ClickButton>
                                </div>
                            </>
                        )}
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default Employer