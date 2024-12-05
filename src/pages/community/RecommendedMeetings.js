// src/pages/community/RecommendedMeetings.js

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import users from "../../data/users";

const RecommendedMeetings = () => {
  const [userTimetable, setUserTimetable] = useState([]);
  const [recommendedMeetings, setRecommendedMeetings] = useState([]);
  const [filterByInterest, setFilterByInterest] = useState(false);
  const [filterByTime, setFilterByTime] = useState(false);
  const [sortOption, setSortOption] = useState("date"); // date or popularity
  const navigate = useNavigate();

  useEffect(() => {
    // 로컬스토리지에서 사용자 데이터 가져오기
    const user = JSON.parse(localStorage.getItem("user")) || {};
    if (user && user.timetable) {
      setUserTimetable(user.timetable);
    }

    // 관심사와 활동 매핑
    const interestActivityMap = {
      코딩: "스터디",
      게임: "놀기",
      영화: "관람",
      운동: "운동",
      독서: "스터디",
      여행: "여행",
      음악감상: "일상대화",
      테니스: "운동",
      축구: "운동",
      디자인: "놀기",
      그림: "놀기",
      사진촬영: "놀기",
      글쓰기: "스터디",
      시: "스터디",
      고전문학: "스터디",
    };

    // 모든 유저의 모임 정보 수집
    const allMeetings = users.flatMap((user) =>
      user.meetings.map((meeting) => ({
        ...meeting,
        organizer: user.name,
        userProfileImage: user.profileImage || "https://via.placeholder.com/50",
      }))
    );

    // 시간 정보 포함하여 모임 데이터 수정
    const allMeetingsWithTime = allMeetings.map((meeting) => {
      return {
        ...meeting,
        time: meeting.time || "00:00-23:59", // 모임에 시간 정보가 없으면 하루 종일로 간주
      };
    });

    let filteredMeetings = allMeetingsWithTime;

    // 관심사 기반 필터링
    if (filterByInterest) {
      const userInterests = user?.interests || [];
      const mappedActivities = userInterests
        .map((interest) => interestActivityMap[interest])
        .filter((activity) => activity !== undefined);

      if (mappedActivities.length > 0) {
        filteredMeetings = filteredMeetings.filter((meeting) =>
          mappedActivities.includes(meeting.activity)
        );
      }
    }

    // 시간표 기반 필터링
    if (filterByTime) {
      filteredMeetings = filteredMeetings.filter((meeting) => {
        const [meetingDay, meetingTime] = parseMeetingTime(
          meeting.date,
          meeting.time
        );
        return userTimetable.every(
          (entry) =>
            entry.day !== meetingDay || !isTimeConflict(entry.time, meetingTime)
        );
      });
    }

    // 정렬 옵션 적용
    if (sortOption === "date") {
      // 날짜순 정렬
      filteredMeetings.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortOption === "popularity") {
      // 참여 인원순 정렬
      filteredMeetings.sort(
        (a, b) => b.participants.length - a.participants.length
      );
    }

    setRecommendedMeetings(filteredMeetings);
  }, [filterByInterest, filterByTime, sortOption]);

  const parseMeetingTime = (date, time) => {
    const meetingDate = new Date(date);
    const dayNames = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];
    const day = dayNames[meetingDate.getDay()];
    return [day, time];
  };

  const isTimeConflict = (time1, time2) => {
    const [start1, end1] = time1.split("-").map((t) => t.trim());
    const [start2, end2] = time2.split("-").map((t) => t.trim());
    return (
      (start1 < end2 && start1 >= start2) || (start2 < end1 && start2 >= start1)
    );
  };

  const meetingClickHandler = (meetingId) => {
    navigate(`/community/meetings/${meetingId}`);
  };

  const backHandler = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <Container>
      <Header>
        <Title>
          <BackButton onClick={backHandler}>
            <FaArrowLeft />
          </BackButton>
          추천 모임
        </Title>
        <FilterContainer>
          <CheckboxContainer>
            <input
              type="checkbox"
              checked={filterByInterest}
              onChange={() => setFilterByInterest(!filterByInterest)}
            />
            <label>관심사 기반 추천</label>
          </CheckboxContainer>
          <CheckboxContainer>
            <input
              type="checkbox"
              checked={filterByTime}
              onChange={() => setFilterByTime(!filterByTime)}
            />
            <label>시간표 기반 추천</label>
          </CheckboxContainer>
          <Select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="date">날짜순</option>
            <option value="popularity">인기순</option>
          </Select>
        </FilterContainer>
      </Header>
      <List>
        {recommendedMeetings.length > 0 ? (
          recommendedMeetings.map((meeting) => (
            <ListItem
              key={meeting.id}
              onClick={() => meetingClickHandler(meeting.id)}
            >
              <Thumbnail src={meeting.userProfileImage} />
              <Content>
                <TitleRow>
                  <MeetingTitle>{meeting.title}</MeetingTitle>
                  <Participants>
                    {meeting.participants.length}/{meeting.maxParticipants}
                  </Participants>
                </TitleRow>
                <SubText>
                  주최자: {meeting.organizer} | 활동: {meeting.activity}
                </SubText>
                <Description>
                  날짜: {meeting.date} | 장소: {meeting.location}
                </Description>
              </Content>
            </ListItem>
          ))
        ) : (
          <NoMeetings>추천할 모임이 없습니다.</NoMeetings>
        )}
      </List>
    </Container>
  );
};

export default RecommendedMeetings;

// 스타일 정의
const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  margin-bottom: 15px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #007bff;
  cursor: pointer;
  margin-right: 10px;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;

  input {
    margin-right: 5px;
  }
`;

const Select = styled.select`
  padding: 5px 10px;
`;

const List = styled.div`
  margin-top: 15px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 15px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-right: 15px;
`;

const Content = styled.div`
  flex: 1;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MeetingTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const Participants = styled.div`
  font-size: 14px;
  color: #555;
`;

const SubText = styled.div`
  font-size: 14px;
  color: #777;
  margin-top: 5px;
`;

const Description = styled.div`
  font-size: 12px;
  color: #999;
  margin-top: 5px;
`;

const NoMeetings = styled.div`
  font-size: 16px;
  color: #888;
  text-align: center;
  margin-top: 20px;
`;
