// src/data/users.js

export default [
  {
    id: 1,
    name: "김철수",
    department: "컴퓨터공학과",
    studentId: "2020123456",
    gender: "남성",
    interests: ["코딩", "게임", "영화"],
    meetHistory: [
      { date: "2024-11-20", partner: "박영희", location: "학생식당" },
      { date: "2024-11-22", partner: "이민호", location: "카페테리아" },
    ],
    myPosts: [
      {
        id: 1,
        title: "같이 식사하실 분!",
        content: "점심 함께 하실 분 구합니다.",
        date: "2024-11-24",
      },
      {
        id: 2,
        title: "스터디 모집",
        content: "알고리즘 스터디 모집합니다.",
        date: "2024-11-23",
      },
    ],
    myComments: [
      { postId: 3, content: "저 참여하고 싶습니다!" },
      { postId: 5, content: "정보 감사합니다." },
    ],
    timetable: [
      { day: "월요일", time: "10:00-12:00", subject: "자료구조" },
      { day: "화요일", time: "14:00-16:00", subject: "운영체제" },
    ],
    badges: ["활동왕", "친절한 이웃"],
    meetCount: 5,
    mannerTemperature: 36.5,
    profileImage: "https://via.placeholder.com/50",
    reviews: [
      {
        title: "맛있는 식당 발견",
        content: "정말 맛있었어요!",
        rating: "★★★★★",
        date: "2024-11-24",
      },
    ],
    meetings: [
      {
        id: 1,
        title: "점심 같이 드실 분?",
        activity: "식사",
        date: "2024-11-26",
        location: "용인시 블랙탑커피",
        groupSize: "여러 명",
        maxParticipants: 10,
        participants: ["김철수"],
        status: "ongoing",
      },
    ],
  },
  {
    id: 2,
    name: "박영희",
    department: "경영학과",
    studentId: "2021123456",
    gender: "여성",
    interests: ["독서", "음악감상", "여행"],
    meetHistory: [
      { date: "2024-11-18", partner: "김철수", location: "도서관" },
    ],
    myPosts: [
      {
        id: 3,
        title: "도서 추천 부탁드려요",
        content: "재밌는 소설책 추천해주세요.",
        date: "2024-11-22",
      },
    ],
    myComments: [{ postId: 1, content: "저 함께 하고 싶어요!" }],
    timetable: [
      { day: "수요일", time: "10:00-12:00", subject: "마케팅" },
      { day: "목요일", time: "14:00-16:00", subject: "회계원리" },
    ],
    badges: ["책벌레", "소통왕"],
    meetCount: 3,
    mannerTemperature: 37.0,
    profileImage: "https://via.placeholder.com/50",
    reviews: [
      {
        title: "아늑한 카페",
        content: "분위기가 정말 좋았어요.",
        rating: "★★★★☆",
        date: "2024-11-23",
      },
    ],
    meetings: [
      {
        id: 2,
        title: "커피 한 잔 하실 분?",
        activity: "커피",
        date: "2024-11-27",
        location: "부산광역시 블랙탑",
        groupSize: "한 명",
        maxParticipants: 2,
        participants: ["박영희"],
        status: "ongoing",
      },
    ],
  },
  {
    id: 3,
    name: "이민호",
    department: "전자공학과",
    studentId: "2022123456",
    gender: "남성",
    interests: ["테니스", "축구", "프로그래밍"],
    meetHistory: [
      { date: "2024-11-15", partner: "김철수", location: "운동장" },
    ],
    myPosts: [],
    myComments: [{ postId: 2, content: "스터디에 참여하고 싶습니다!" }],
    timetable: [
      { day: "월요일", time: "09:00-11:00", subject: "전자회로" },
      { day: "화요일", time: "13:00-15:00", subject: "회로설계" },
    ],
    badges: ["운동왕", "문제해결사"],
    meetCount: 7,
    mannerTemperature: 36.8,
    profileImage: "https://via.placeholder.com/50",
    reviews: [
      {
        title: "운동 후 갈만한 식당",
        content: "운동 후에 먹기 딱 좋아요.",
        rating: "★★★★☆",
        date: "2024-11-22",
      },
    ],
    meetings: [
      {
        id: 3,
        title: "함께 운동하실 분!",
        activity: "운동",
        date: "2024-11-28",
        location: "강원특별자치도 강릉시 교동 번지 2층 블랙탑",
        groupSize: "여러 명",
        maxParticipants: 5,
        participants: ["이민호"],
        status: "ongoing",
      },
    ],
  },
  {
    id: 4,
    name: "최지은",
    department: "디자인학과",
    studentId: "2023123456",
    gender: "여성",
    interests: ["디자인", "그림", "사진촬영"],
    meetHistory: [],
    myPosts: [
      {
        id: 4,
        title: "디자인 관련 정보 공유",
        content: "디자인 툴에 대해 논의해요.",
        date: "2024-11-21",
      },
    ],
    myComments: [],
    timetable: [
      { day: "수요일", time: "13:00-15:00", subject: "포토샵" },
      { day: "목요일", time: "10:00-12:00", subject: "일러스트레이터" },
    ],
    badges: ["창의왕", "분위기메이커"],
    meetCount: 2,
    mannerTemperature: 38.2,
    profileImage: "https://via.placeholder.com/50",
    reviews: [
      {
        title: "아트 갤러리 카페",
        content: "예술적인 분위기가 매력적이에요.",
        rating: "★★★★★",
        date: "2024-11-21",
      },
    ],
    meetings: [
      {
        id: 3,
        title: "함께 운동하실 분!",
        activity: "운동",
        date: "2024-11-28",
        location: "강원특별자치도 강릉시 교동 번지 2층 블랙탑",
        groupSize: "여러 명",
        maxParticipants: 5,
        participants: ["이민호"],
        status: "ongoing",
      },
    ],
  },
  {
    id: 5,
    name: "정하늘",
    department: "문예창작학과",
    studentId: "2024123456",
    gender: "기타",
    interests: ["글쓰기", "시", "고전문학"],
    meetHistory: [{ date: "2024-11-10", partner: "박영희", location: "카페" }],
    myPosts: [
      {
        id: 5,
        title: "시 낭송회 같이 가실 분!",
        content: "시 낭송회 함께 가실 분 구해요.",
        date: "2024-11-20",
      },
    ],
    myComments: [
      { postId: 4, content: "디자인 관련 툴 알려주셔서 감사합니다!" },
    ],
    timetable: [
      { day: "금요일", time: "11:00-13:00", subject: "현대시론" },
      { day: "화요일", time: "09:00-11:00", subject: "소설 창작" },
    ],
    badges: ["감성왕", "사색가"],
    meetCount: 4,
    mannerTemperature: 36.9,
    profileImage: "https://via.placeholder.com/50",
    reviews: [
      {
        title: "문학적인 분위기의 식당",
        content: "글이 잘 써지는 곳이에요.",
        rating: "★★★★☆",
        date: "2024-11-20",
      },
    ],
    meetings: [
      {
        id: 3,
        title: "함께 운동하실 분!",
        activity: "운동",
        date: "2024-11-28",
        location: "강원특별자치도 강릉시 교동 번지 2층 블랙탑",
        groupSize: "여러 명",
        maxParticipants: 5,
        participants: ["이민호"],
        status: "ongoing",
      },
    ],
  },
];

// // 데이터 로컬스토리지에 저장
// localStorage.setItem("users", JSON.stringify(users));
