import { cookies } from 'next/headers'
import * as sdk from 'node-appwrite'

export const {
    APPWRITE_PROJECT, API_KEY, DATABASE_ID,
    USER_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
    NEXT_PUBLIC_ENDPOINT: ENDPOINT
} = process.env

const client = new sdk.Client()

client
    .setEndpoint(process.env.ENDPOINT!)
    .setProject(process.env.APPWRITE_PROJECT!)
    .setKey(process.env.API_KEY!)

export async function createSessionClient() {
    const client = new sdk.Client()
        .setEndpoint(process.env.ENDPOINT!)
        .setProject(process.env.APPWRITE_PROJECT!)

    const session = cookies().get('appwrite-session');
    if (!session || !session.value) {
        throw new Error('No Session')
    }
    client.setSession(session.value)
    return {
        get account() {
            return new sdk.Account(client)
        }
    }
}


export async function createAdminClient() {
    const client = new sdk.Client()
        .setEndpoint(ENDPOINT!)
        .setProject(APPWRITE_PROJECT!)
        .setKey(API_KEY!);

    return {
        get account() {
            return new sdk.Account(client);
        },
        get database() {
            return new sdk.Databases(client);
        },
        get user() {
            return new sdk.Users(client);
        }
    };
}

export const databases = new sdk.Databases(client)
export const storage = new sdk.Storage(client)
export const messaging = new sdk.Messaging(client)
export const users = new sdk.Users(client)