import { FormFieldType } from "../app/lib/utils";

declare interface HeaderBoxProps {
    title: string,
    subtext?: string
}

declare interface SignUpProps {
    $id: string,
}

declare type User = {
    $id: string
    email: string;
    userId: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    dateOfBirth: string;
    password: string;
    phone: string;
}

declare interface NavbarProps {
    user?: User
}

interface FormProps {
    control: Control<any>;
    name: string;
    fieldtype: FormFieldType;
    label: string;
    placeholder?: string;
    renderSkeleton?: (field: any) => React.ReactNode
    iconSrc?: string;
    children?: React.ReactNode;
    dateFormat?: string;
    disabled?: boolean
    showTimeSelect?: boolean;

}

interface ButtonProps {
    children: React.ReactNode;
    isLoading: boolean;
}

interface AuthProps {
    type: string;
}