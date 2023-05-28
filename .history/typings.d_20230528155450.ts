interface Board {
    columns: Map<TypedColum, String>
}


type TypedColums = "todo" | "inprogress" | "done"