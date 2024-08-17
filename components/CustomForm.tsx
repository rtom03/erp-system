import React from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { FormFieldType } from '../lib/utils'
import { Input } from './ui/input'
import { FormProps } from '@/types'
import Image from 'next/image'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Select, SelectContent, SelectTrigger, SelectValue } from './ui/select'


const RenderField = ({ field, props }: { field: any, props: FormProps }) => {
    switch (props.fieldtype) {
        case FormFieldType.INPUT:
            return (
                <div>
                    {props.iconSrc && (
                        <Image
                            src={props.iconSrc}
                            alt='circle'
                            width={30}
                            height={30}
                        />
                    )}
                    <FormControl>
                        <Input type={props.name === 'email' ? 'email' : 'password'} {...field} placeholder={props.placeholder} className={props.name === 'text' ? 'w-[280px]' : 'w-[600px]'} />
                    </FormControl>
                </div>
            )
        case FormFieldType.TEXT:
            return (
                <div>
                    {props.iconSrc && (
                        <Image
                            src={props.iconSrc}
                            alt='circle'
                            width={30}
                            height={30}
                        />
                    )}
                    <FormControl>
                        <Input type='text' {...field} placeholder={props.placeholder} className='w-[280px]' />
                    </FormControl>
                </div>
            )

        case FormFieldType.OTHER:
            return (
                <FormControl>

                    <Input type='text' placeholder={props.placeholder} {...field} className='w-[800px]' />

                </FormControl>

            )

        case FormFieldType.PHONE_INPUT:
            return (
                <FormControl>
                    <PhoneInput
                        country={'ng'}
                        value={field.value}
                        onChange={field.onChange}
                        placeholder={props.placeholder}
                    // className='mt-2 h-11 bg-white rounded-md px-3 text-sm border '
                    />

                </FormControl>
            )

        case FormFieldType.DATE_PICKER:
            return (
                <FormControl>
                    <DatePicker
                        selected={field.value}
                        onChange={(date) => field.onChange(date)}
                        dateFormat={props.dateFormat ?? 'MM/DD/YYYY'}
                        showTimeSelect={props.showTimeSelect ?? false}
                        timeInputLabel='Time'
                        wrapperClassName='date-picker'
                    />
                </FormControl>
            )

        case FormFieldType.SELECT:
            return (
                <FormControl>
                    <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger className='w-[800px]'>
                                <SelectValue placeholder={props.placeholder} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent >
                            {props.children}
                        </SelectContent>

                    </Select>
                </FormControl>
            )
    }
}

const CustomForm = (props: FormProps) => {
    return (
        <div>
            <FormField
                control={props.control}
                name={props.name}
                render={({ field }) => (
                    <FormItem >
                        {props.fieldtype !== FormFieldType.CHECKBOX && props.label && (
                            <FormLabel>{props.label}
                                <FormDescription>{props.sublabel}</FormDescription>
                            </FormLabel>
                        )}
                        <RenderField field={field} props={props} />
                        <FormMessage />
                    </FormItem>
                )}
            />

        </div>
    )
}

export default CustomForm
