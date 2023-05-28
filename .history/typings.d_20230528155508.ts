interface Board {
    columns: Map<TypedColum, Column>
}


type TypedColum = "todo" | "inprogress" | "done"