import { interestAreas } from 'shared/constants/data';
import { Experience, Keyword, UserDataType, UserStore, useUserStore } from 'shared/zustand/userStore';
interface KeywordCategoryMap {
  [key: string]: Keyword[];
}

interface UseUserData {
  userDataStore: UserDataType;
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (
    field: keyof UserDataType, // 여기를 수정
    selected: string | string[] | Experience[] | Keyword[] // 여기를 수정
  ) => void;
  handleSelectInterest: (interestId: number) => void;
  handleSelectKeyword: (keyword: Keyword) => void;
  addExperience: (option: string, detail: string) => void;
  removeExperience: (index: number) => void;
}

export const MAX_SELECTIONS = 3;
const MIN_SELECTIONS_REQUIRED = 10;
const MAX_KEYWORD_SELECTIONS = 20;

export const removeEmoji = (text: string): string => {
  return text.substring(text.indexOf(' ') + 1);
};

export function useUserData(
  initialValues: UserDataType,
  keywordCategoryMap?: { keywordCategoryMap: KeywordCategoryMap } | undefined
): UseUserData {
  const { userDataStore, setUserDataStore } = useUserStore();

  const handleSelect = (field: keyof UserDataType, selected: UserDataType[typeof field]) => {
    setUserDataStore({ [field]: selected });
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input.length <= 5) {
      handleSelect('name', input);
    } else {
      alert('5자 이하로 작성해주세요');
    }
  };

  const handleSelectInterest = (interestId: number) => {
    const interestName = removeEmoji(
      interestAreas.find((interest) => interest.id === interestId)?.name || ''
    );

    let newInterests = [...userDataStore.interests];

    if (newInterests.includes(interestName)) {
      newInterests = newInterests.filter((name) => name !== interestName);
    } else if (newInterests.length < MAX_SELECTIONS) {
      newInterests = [...newInterests, interestName];
    }
    handleSelect('interests', newInterests); // interests 필드를 업데이트합니다.
  };

  const findKeywordType = (keywordName: string): string | undefined => {
    if (keywordCategoryMap && 'keywordCategoryMap' in keywordCategoryMap) {
      const categories = keywordCategoryMap.keywordCategoryMap;

      for (const category in categories) {
        if (categories.hasOwnProperty(category)) {
          const keywords = categories[category];
          const foundKeyword = keywords.find((kw: Keyword) => kw.keyword === keywordName);

          if (foundKeyword) {
            return category;
          }
        }
      }
    }
    return undefined;
  };
  const handleSelectKeyword = (keyword: Keyword): void => {
    const prevData = userDataStore;
    const isAlreadySelected = prevData.userKeywords.some(
      (selectedKeyword: Keyword) => selectedKeyword.keyword === keyword.keyword
    );

    if (!isAlreadySelected && prevData.userKeywords.length < MAX_KEYWORD_SELECTIONS) {
      const newKeywordType = findKeywordType(keyword.keyword);

      if (newKeywordType) {
        const newKeyword: Keyword = {
          keyword: keyword.keyword,
          type: newKeywordType,
        };

        const newSelectedKeywords = [...prevData.userKeywords, newKeyword];
        setUserDataStore({ ...prevData, userKeywords: newSelectedKeywords });
      } else {
        console.error(`Type not found for keyword: ${keyword.keyword}`);
      }
    } else {
      // If already selected, remove the keyword
      const updatedKeywords = prevData.userKeywords.filter(
        (selectedKeyword: Keyword) => selectedKeyword.keyword !== keyword.keyword
      );

      setUserDataStore({ ...prevData, userKeywords: updatedKeywords });
    }
  };

  const addExperience = (activity: string, content: string) => {
    const newExperiences = [...userDataStore.experiences, { activity, content }];
    handleSelect('experiences', newExperiences);
  };

  const removeExperience = (index: number) => {
    const newExperiences = userDataStore.experiences.filter((_, i) => i !== index);
    handleSelect('experiences', newExperiences);
  };

  return {
    userDataStore,
    handleNameChange,
    handleSelectKeyword,
    handleSelect,
    handleSelectInterest,
    addExperience,
    removeExperience,
  };
}
