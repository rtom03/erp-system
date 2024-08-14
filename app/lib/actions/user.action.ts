import { ID, Users } from "node-appwrite"
import { users } from "../appwrite.action"
import { parseStringify } from "../utils"

export const SignUp = async (user: User) => {

    try {
        const newUser = await users.create(
            ID.unique(),
            user.firstName,
            user.lastName,
            user.email,
            undefined
        )
        return parseStringify(newUser)
    } catch (error) {
        console.log(error)
    }
}