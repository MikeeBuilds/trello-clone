import { database } from "@/appwrite";

export const getTodosGroupedByColumn = async() => {
    const data = await database.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
    );


    const todos = data.documents.map((todo) => ({
        $id: todo.$id,
        $createdAt: todo.$createdAt,
        title: todo.title,
        status: todo.status,
        image: todo.image,
    }));
}; 