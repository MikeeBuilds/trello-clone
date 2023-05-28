interface Board {
    columns: Map<TypedColumn, Column>
}


type TypedColumn = "todo" | "inprogress" | "done"

interface Column {
    id: TypedColumn;
    todos:Todo[];
}

interface Todo {}