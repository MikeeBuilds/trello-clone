import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function Board() {
  return (
    <DragDropContext>
        <Droppable droppableId='board' direction='horizontal' type='column'>


    </DragDropContext>
  )
}

export default Board