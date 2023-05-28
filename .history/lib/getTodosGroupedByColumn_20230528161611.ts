import { database } from "@/appwrite";

export const getTodosGroupedByColumn = async() => {
    const data = await Databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
    );


    console.log(data);
};