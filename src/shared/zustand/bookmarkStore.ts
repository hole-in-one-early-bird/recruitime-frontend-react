// store.js
import { create } from 'zustand';
interface BookmarkStore {
  bookmark: boolean;
  setBookmark: (value: boolean) => void;
}

const useBookmarkStore = create<BookmarkStore>((set) => ({
  bookmark: false,
  setBookmark: (value) => set({ bookmark: value }),
}));

export default useBookmarkStore;
