import { useEffect, useState } from 'react';
import { FaCropSimple } from 'react-icons/fa6';

export interface Experience {
  activity: string;
  content: string;
}

export interface UserInfoData {
  name: string;
  gender: string;
  age: string;
  highestDegree: string;
  major: string;
  experiences: Experience[];
  experience: string;
}

export function useUserInfoData(initialValue: string) {
  const [userInfoData, setUserInfoData] = useState<UserInfoData>({
    name: initialValue,
    gender: initialValue,
    age: initialValue,
    highestDegree: initialValue,
    major: initialValue,
    experiences: [],
    experience: '',
  });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input.length <= 5) {
      setUserInfoData((prevData) => ({ ...prevData, name: input }));
    }
  };

  const handleGenderSelect = (selected: string) => {
    setUserInfoData((prevData) => ({ ...prevData, gender: selected }));
  };

  const handleAgeSelect = (selected: string) => {
    setUserInfoData((prevData) => ({ ...prevData, age: selected }));
  };

  // 최종학력
  const handleEducationChange = (selected: string) => {
    setUserInfoData((prevData) => ({ ...prevData, highestDegree: selected }));
  };

  // 전공/계열
  const handleMajorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfoData((prevData) => ({ ...prevData, major: event.target.value }));
  };

  // 경험입력

  const handleExperienceChange = (value: string) => {
    setUserInfoData((prevData) => ({ ...prevData, experience: value }));
  };

  const addExperience = (activity: string, content: string) => {
    setUserInfoData((prevData) => ({
      ...prevData,
      experiences: [...prevData.experiences, { activity, content }],
    }));
  };

  const removeExperience = (index: number) => {
    setUserInfoData((prevData) => ({
      ...prevData,
      experiences: prevData.experiences.filter((_, i) => i !== index),
    }));
  };

  return {
    userInfoData,
    handlers: {
      handleNameChange,
      handleAgeSelect,
      handleGenderSelect,
      handleEducationChange,
      handleMajorChange,
      handleExperienceChange,
      addExperience,
      removeExperience,
    },
  };
}
