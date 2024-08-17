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



export const authFormSchema = (type: string) => z.object({
  firstName: type === 'sign-in' ? z.string().optional() : z.string().min(3),
  lastName: type === 'sign-in' ? z.string().optional() : z.string().min(3),
  address: type === 'sign-in' ? z.string().optional() : z.string().max(50),
  city: type === 'sign-in' ? z.string().optional() : z.string().max(50),
  postalCode: type === 'sign-in' ? z.string().optional() : z.string().min(3).max(6),
  dateOfBirth: type === 'sign-in' ? z.string().optional() : z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8)
})

export const authCompany = (type: string) => z.object({
  name: z.string().min(2, {
    message: "name must be at least 4 characters.",
  }),
  companyName: z.string().min(2, {
    message: "company's name must be at least 3 characters.",
  }),
  heardOfUs: z.string().optional(),
  companyLength: z.string().optional(),
  phone: z.string().refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
})


export enum FormFieldType {
  INPUT = 'input',
  CHECKBOX = 'checkbox',
  LABEL = 'label',
  PHONE_INPUT = 'phone',
  TEXTAREA = 'textarea',
  SELECT = 'select',
  SKELETON = 'skeleton',
  TEXT = 'text',
  DATE_PICKER = 'datePicker',
  OTHER = 'other'
}