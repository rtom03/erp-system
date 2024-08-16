
'use server'

import { ID, Query } from "node-appwrite"
import { createAdminClient, createSessionClient, DATABASE_ID, USER_COLLECTION_ID, users } from "../appwrite.action"
import { parseStringify } from "../utils"
import { getUserInfoProps, signInProps, SIgnUpParams, User } from "@/types"
import { cookies } from "next/headers"


export const SignUp = async ({ password, ...userdata }: SIgnUpParams) => {

    const { firstName, lastName, email } = userdata
    let newUser;
    try {
        const { account, database } = await createAdminClient()
        newUser = await account.create(ID.unique(),
            email, password, `${firstName} ${lastName}`
        );

        if (!newUser) throw new Error('Error: user already exist')
        const newUserAccount = await database.createDocument(
            DATABASE_ID!,
            USER_COLLECTION_ID!,
            ID.unique(),
            { ...userdata, userId: newUser.$id }
        )
        const session = await account.createEmailPasswordSession(email, password);
        cookies().set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });
        return parseStringify(newUserAccount)
    } catch (error) {
        console.log(error)
    }
}

export const getUserInfo = async ({ userId }: getUserInfoProps) => {
    try {
        const { database } = await createAdminClient();

        const user = await database.listDocuments(
            DATABASE_ID!,
            USER_COLLECTION_ID!,
            [Query.equal('userId', [userId])]
        )
        return parseStringify(user.documents[0])
    } catch (error) {
        console.log(error)
    }
}


export const SignIn = async ({ email, password }: signInProps) => {
    try {
        const { account } = await createAdminClient()
        const session = await account.createEmailPasswordSession(email, password)

        cookies().set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        const user = await getUserInfo({ userId: session.userId })

        return parseStringify(user)

    } catch (error) {
        console.log(error)
    }
}

export const getLoggedInUser = async () => {
    try {
        const { account } = await createSessionClient();
        const result = await account.get();

        const user = await getUserInfo({ userId: result.$id })
        return parseStringify(user)
    } catch (error) {
        console.log(error)
    }
}