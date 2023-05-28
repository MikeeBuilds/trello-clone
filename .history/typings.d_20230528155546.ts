interface Board {
    columns: Map<TypedColum, Column>
}


type TypedColum = "todo" | "inprogress" | "done"

interface Column {
    id: TypedColumn;
}