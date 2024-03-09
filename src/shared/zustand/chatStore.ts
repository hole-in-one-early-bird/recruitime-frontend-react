import create from 'zustand';

interface ChatStore {
  chatBoxRef: React.RefObject<HTMLDivElement> | null;
  setChatBoxRef: (ref: React.RefObject<HTMLDivElement> | null) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  chatBoxRef: null,
  setChatBoxRef: (ref) => set({ chatBoxRef: ref }),
}));
