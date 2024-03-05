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
