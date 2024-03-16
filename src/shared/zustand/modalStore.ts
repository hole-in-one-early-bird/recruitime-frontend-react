import { create } from 'zustand';

export const useModalStore = create<{
  firstModal: { isOpen: boolean; setOpen: (isOpen: boolean) => void };
  secondModal: { isOpen: boolean; setOpen: (isOpen: boolean) => void };
}>((set) => ({
  firstModal: {
    isOpen: false,
    setOpen: (isOpen: boolean) => set((state) => ({ firstModal: { ...state.firstModal, isOpen } })),
  },
  secondModal: {
    isOpen: false,
    setOpen: (isOpen: boolean) => set((state) => ({ secondModal: { ...state.secondModal, isOpen } })),
  },
}));
