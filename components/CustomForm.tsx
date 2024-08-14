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
import { FormFieldType } from '../app/lib/utils'
import { Input } from './ui/input'
import { FormProps } from '@/types'


const RenderField = ({ field, props }: { field: any, props: FormProps }) => {
    switch (props.fieldtype) {
        case FormFieldType.INPUT:
            return (
                <div>
                    <FormControl>
                        <div>
                            <Input type={props.name === 'email' ? 'email' : 'password'} placeholder={props.placeholder} className='w-[500px]' />
                        </div>

                    </FormControl>
                </div>
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
                            <FormLabel>{props.label}</FormLabel>
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
