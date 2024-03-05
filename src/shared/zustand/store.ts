// store.js
import { create } from 'zustand';
interface CustomizedCareerStore {
  userData: any;
  setUserData: (data: any) => void;
}

const useCustomizedCareerStore = create<CustomizedCareerStore>((set) => ({
  userData: null,
  setUserData: (data) => set({ userData: data }),
}));

export default useCustomizedCareerStore;
