import { create } from 'zustand'

interface BoardState {
    board: Board;
    getBoard: () => void;
}

const useBoardStore = create((set) => ({
  board: null,
    getBoard: () => {
        fetch('http://localhost:3000/board')
        .then(response => response.json())
        .then(data => set({ board: data }))
    }
})) 