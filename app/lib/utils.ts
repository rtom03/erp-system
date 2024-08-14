import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));


export const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export enum FormFieldType {
  INPUT = 'input',
  CHECKBOX = 'checkbox',
  LABEL = 'label',
  PHONE_INPUT = 'phone',
  TEXTAREA = 'textarea',
  SELECT = 'select',
  SKELETON = 'skeleton'
}