import Image from "next/image";
import { FormValidate } from "./FormValidate";

export default function AuthForm() {
    return (
        <div className="flex h-screen max-h-screen">
            {/* {TODO: OTP VERIFICATION} */}

            <section className="remove-scrollbar container">
                <div className=' max-w-[496] mt-32'>
                    <FormValidate type={'sign-in'} />
                </div>
            </section>
            <Image
                src="/icons/on.png"
                height={1000}
                width={1000}
                alt="patient"
                className="side-img max-w-[50%]"
            />
        </div>
    );
}
