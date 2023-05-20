import { create } from 'zustand';

interface AsideBarStore {
  isOpen: boolean;
  onToggle: () => void; // Added onToggle function
}

const useIsOpenAsideBar = create<AsideBarStore>((set) => ({
  isOpen: false,
  onToggle: () => set((state) => ({ isOpen: !state.isOpen })), // Toggle function implementation
}));

export default useIsOpenAsideBar;
