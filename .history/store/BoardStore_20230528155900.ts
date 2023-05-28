import { create } from 'zustand'

interface BoardState {
    board: Board;
    getBoard: () => void;
}

const useBoardStore = create<Board((set) => ({
  board: null,
    getBoard: () => {

    }
})) 