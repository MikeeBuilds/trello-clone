interface Board {
    columns: Map<TypedColum, Col>
}


type TypedColum = "todo" | "inprogress" | "done"