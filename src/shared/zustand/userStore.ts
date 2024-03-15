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
  activity: string;
  content: string;
}

export type Keyword = {
  keyword: string;
  type: string;
};

export interface UserStore {
  userDataStore: UserDataType;
  setUserDataStore: (data: Partial<UserDataType>) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userDataStore: {
    name: '',
    gender: '',
    age: '',
    aboutMe: '',
    interests: [],
    education: '',
    major: '',
    majorCheck: '',
    experiences: [],
    experienceOption: '',
    experienceDetail: '',
    userKeywords: [],
  },

  setUserDataStore: (data) => set((state) => ({ userDataStore: { ...state.userDataStore, ...data } })),
}));
