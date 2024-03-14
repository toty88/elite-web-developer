import { create } from 'zustand';


type State = {
    currentPage: number;
    setCurrentPage: (currentPage: number) => void;

};

export const useCurrentPageStore = create<State>((set) => {

    return {
        currentPage: 1,
        setCurrentPage: (currentPage: number) => set({ currentPage }),
    }
});
