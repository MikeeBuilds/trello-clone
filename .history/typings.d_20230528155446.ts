interface Board {
    columns: Map<TypedColums, String>
}


type TypedColums = "todo" | "inprogress" | "done"