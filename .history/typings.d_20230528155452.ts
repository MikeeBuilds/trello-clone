interface Board {
    columns: Map<TypedColum, String>
}


type TypedColum = "todo" | "inprogress" | "done"