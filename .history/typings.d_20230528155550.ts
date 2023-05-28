interface Board {
    columns: Map<TypedColum, Column>
}


type TypedColumn = "todo" | "inprogress" | "done"

interface Column {
    id: TypedColumn;
}