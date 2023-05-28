interface Board {
    columns: Map<TypedColum, Colu>
}


type TypedColum = "todo" | "inprogress" | "done"