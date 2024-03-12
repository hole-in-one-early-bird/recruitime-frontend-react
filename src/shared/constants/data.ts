export const edu = ['고졸', '초대졸', '대졸', '대학원졸'];
export const activities = [
  '인턴',
  '동아리',
  '교내활동',
  '사회활동',
  '자원봉사',
  '경력',
  '어학',
  '자격증',
];

// 관심 분야 인터페이스 정의
interface InterestArea {
  name: string;
  id: number;
}

export const interestAreas: InterestArea[] = [
  { name: '📊 경영·기획', id: 1 },
  { name: '💻 개발', id: 2 },
  { name: '📉 데이터', id: 3 },
  { name: '🎨 디자인', id: 4 },
  { name: '📚 교육', id: 5 },
  { name: '🔬 연구개발', id: 6 },
  { name: '💰 금융·재무', id: 7 },
  { name: '💊 의약', id: 8 },
  { name: '🎞️ 미디어·홍보', id: 9 },
  { name: '🌟 생산관리·품질관리', id: 10 },
  { name: '✍🏻 법률·법무', id: 11 },
  { name: '🏷️ 생산·제조', id: 12 },
  { name: '💡 마케팅·시장조사', id: 13 },
  { name: '👤 인사·총무', id: 14 },
  { name: '💬 서비스·고객지원', id: 15 },
  { name: '🌐 유통·무역', id: 16 },
  { name: '⚙️ 엔지니어링', id: 17 },
  { name: '💼 영업·제휴', id: 18 },
];

export const profileAnalysisSteps = [
  '프로필을 읽고 있어요.',
  '관심 분야를 분석하고 있어요.',
  '가까운 단어를 분석하고 있어요.',
  '학력 · 적성을 분석하고 있어요.',
  '경험을 적용하고 있어요.',
];

export const initialValues = {
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
};
type KeywordCategoryMap = {
  [key: string]: { id: number; keyword: string }[];
};
export const keywords = {
  keywordCategoryMap: {
    현장형: [
      {
        id: 3,
        keyword: '기계 작동',
      },
      {
        id: 2,
        keyword: '도구 다루기',
      },
      {
        id: 18,
        keyword: '항공기',
      },
      {
        id: 5,
        keyword: '기술',
      },
      {
        id: 1,
        keyword: '조립하기',
      },
    ],
    탐구형: [
      {
        id: 37,
        keyword: '정보 수집',
      },
      {
        id: 38,
        keyword: '통찰력',
      },
      {
        id: 34,
        keyword: '논리 구성',
      },
      {
        id: 26,
        keyword: '연구',
      },
      {
        id: 25,
        keyword: '수학',
      },
    ],
    예술형: [
      {
        id: 41,
        keyword: '상상력',
      },
      {
        id: 48,
        keyword: '뮤지션',
      },
      {
        id: 50,
        keyword: '무용',
      },
      {
        id: 43,
        keyword: '예술',
      },
      {
        id: 51,
        keyword: '연극',
      },
    ],
    사회형: [
      {
        id: 64,
        keyword: '교육',
      },
      {
        id: 61,
        keyword: '대인관계',
      },
      {
        id: 72,
        keyword: '공동체',
      },
      {
        id: 78,
        keyword: '노약자',
      },
      {
        id: 79,
        keyword: '어린이',
      },
    ],
    리더형: [
      {
        id: 91,
        keyword: '정치',
      },
      {
        id: 99,
        keyword: '프로젝트',
      },
      {
        id: 96,
        keyword: '결과 지향',
      },
      {
        id: 83,
        keyword: '목표 지향',
      },
      {
        id: 92,
        keyword: '효율성',
      },
    ],
    사무형: [
      {
        id: 109,
        keyword: '비서',
      },
      {
        id: 106,
        keyword: '회계',
      },
      {
        id: 101,
        keyword: '규칙',
      },
      {
        id: 111,
        keyword: '보고서',
      },
      {
        id: 119,
        keyword: '일관성',
      },
    ],
  } as KeywordCategoryMap,
};
