import { useState, ChangeEvent } from 'react';
import { interestAreas, keywords } from 'shared/constants/data';

interface Experience {
  experience_type: string;
  experience_content: string;
}

export type Keyword = {
  id: number;
  keyword: string;
  type: string;
};

interface UserData {
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
}

interface UseUserData {
  userData: UserData;
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (field: string, selected: string | string[] | Experience[] | number[]) => void;
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

export function useUserData(initialValues: UserData): UseUserData {
  const storedDataItem = sessionStorage.getItem('userData');
  const storedData = storedDataItem ? JSON.parse(storedDataItem) : null;
  const [userData, setUserData] = useState<UserData>(storedData || initialValues);

  const handleSelect = (field: string, selected: string | string[] | Experience[] | number[]) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: selected,
    }));
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

    let newInterests = [...userData.interests];

    if (newInterests.includes(interestName)) {
      newInterests = newInterests.filter((name) => name !== interestName);
    } else if (newInterests.length < MAX_SELECTIONS) {
      newInterests = [...newInterests, interestName];
    }
    handleSelect('interests', newInterests); // interests 필드를 업데이트합니다.
  };

  const handleSelectKeyword = (keyword: Keyword) => {
    setUserData((prevData) => {
      const isAlreadySelected = prevData.userKeywords.some(
        (selectedKeyword) => selectedKeyword.keyword === keyword.keyword
      );

      if (isAlreadySelected) {
        const newSelectedKeywords = prevData.userKeywords.filter(
          (selectedKeyword) => selectedKeyword.keyword !== keyword.keyword
        );
        return { ...prevData, userKeywords: newSelectedKeywords };
      } else if (prevData.userKeywords.length < MAX_KEYWORD_SELECTIONS) {
        const newKeywordType = findKeywordType(keyword.id); // Determine the type dynamically
        const newKeyword = { keyword: keyword.keyword, type: newKeywordType };
        const newSelectedKeywords = [...prevData.userKeywords, newKeyword];
        return {
          ...prevData,
          userKeywords: newSelectedKeywords,
        } as UserData; // Type assertion to match UserData
      }

      return prevData;
    });
  };

  // Function to find the keyword type by id
  const findKeywordType = (keywordId: number): string => {
    for (const category in keywords.keywordCategoryMap) {
      const categoryKeywords = keywords.keywordCategoryMap[category];
      const selectedKeyword = categoryKeywords.find(
        (keyword: { id: number }) => keyword.id === keywordId
      );

      if (selectedKeyword) {
        return category; // Return the category as the type
      }
    }

    // Default to an empty string if the type is not found
    return '';
  };

  const addExperience = (experience_type: string, experience_content: string) => {
    const newExperiences = [...userData.experiences, { experience_type, experience_content }];
    handleSelect('experiences', newExperiences);
  };

  const removeExperience = (index: number) => {
    const newExperiences = userData.experiences.filter((_, i) => i !== index);
    handleSelect('experiences', newExperiences);
  };

  return {
    userData,
    handleNameChange,
    handleSelectKeyword,
    handleSelect,
    handleSelectInterest,
    addExperience,
    removeExperience,
  };
}
