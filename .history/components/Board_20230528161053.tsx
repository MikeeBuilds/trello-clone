"use client"

import React, { useEffect } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function Board() {
  useEffect(() => {
    // getBoard();

  }, [])


  return (
    <h1>Hello</h1>
    <DragDropContext>
        <Droppable droppableId='board' direction='horizontal' type='column'>
            {(provided) => <div>{/* Rendering all the columns */}</div>}
        </Droppable>
    </DragDropContext>
  )
}

export default Board