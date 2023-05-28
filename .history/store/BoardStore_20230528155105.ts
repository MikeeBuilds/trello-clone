import { create } from 'zustand'

interface BoardState {
    board: BoardState;
    getBoard: () => void;
}

const useBoardStore = create((set) => ({
  board: null,
  
})) 