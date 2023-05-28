import { create } from 'zustand'

interface BoardState {
    board: Board;
    getBoard: () => void;
}

const useBoardStore = create<BoardState((set) => ({
  board: null,
    getBoard: () => {

    }
})) 