import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function Board() {
  return (
    <DragDropContext>
        <Droppable droppableId='board'>


    </DragDropContext>
  )
}

export default Board