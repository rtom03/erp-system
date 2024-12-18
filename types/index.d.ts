import { FormFieldType } from "../lib/utils";

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
    postalCode: string;
}

declare interface NavbarProps {
    user?: User
}

declare interface SIgnUpParams {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: string;
    city: string;
    postalCode: string | undefined;
    dateOfBirth: string | undefined;
}

interface FormProps {
    control: Control<any>;
    name: string;
    fieldtype: FormFieldType;
    label: string;
    sublabel?: string;
    placeholder?: string;
    renderSkeleton?: (field: any) => React.ReactNode
    iconSrc?: string;
    children?: React.ReactNode;
    dateFormat?: string;
    disabled?: boolean
    showTimeSelect?: boolean;
    dateFormat?: string,
    showTimeSelect?: boolean,
}

interface ButtonProps {
    children: React.ReactNode;
    isLoading: boolean;
    className?: string
    type?: string
}

interface AuthProps {
    type: string;
}

declare interface signInProps {
    email: string;
    password: string;
}

declare interface getUserInfoProps {
    userId: string;
}


declare interface CompanyAuthProps {
    companyName: string;
    heardOfUs?: string;
    name: string;
    companyLength: string;
    phone: string;
}

declare interface CompanyTypeProps {
    type: string
}

declare interface ProfileNav {
    type: string;
}