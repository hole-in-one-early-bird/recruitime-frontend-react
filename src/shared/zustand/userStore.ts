import { initialValues } from 'shared/constants/data';
import create from 'zustand';

export type UserDataType = {
  name: string;
  gender: string;
  age: string;
  aboutMe: string;
  interests: string[];
  education: string;
  major: string;
  majorCheck: string;
  experiences: Experience[];
  experienceOption: string;
  experienceDetail: string;
  userKeywords: Keyword[];
};

export interface Experience {
  experience_type: string;
  experience_content: string;
}

export type Keyword = {
  id: number;
  keyword: string;
  type: string;
};
export interface UserStore {
  userData: UserDataType;
  setUserData: (data: UserDataType) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userData: initialValues,
  setUserData: (data) => set((prevData) => ({ userData: { ...prevData.userData, ...data } })),
}));
