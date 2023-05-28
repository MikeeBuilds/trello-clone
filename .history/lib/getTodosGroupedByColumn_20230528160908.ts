import { database } from "@/appwrite";

export const getTodosGroupedByColumn = async() = {
    const data = await Databases.listDocuments(
        process.env
    )
}