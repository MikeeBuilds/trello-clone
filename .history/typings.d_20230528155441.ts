interface Board {
    columns: Map<String, String>
}


type TypedColums = "todo" | "inprogress" | "done"