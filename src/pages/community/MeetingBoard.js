// src/pages/community/MeetingBoard.js

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaSearch, FaUserPlus, FaFilter, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import users from "../../data/users";

const MeetingBoard = () => {
  const [meetings, setMeetings] = useState([]);
  const [search, setSearch] = useState("");
  const [filterActivity, setFilterActivity] = useState("전체");
  const navigate = useNavigate();

  useEffect(() => {
    // 모든 유저의 meetings 수집
    const allMeetings = users.flatMap((user) =>
      user.meetings.map((meeting) => ({
        ...meeting,
        organizer: user.name,
        userProfileImage: user.profileImage || "https://via.placeholder.com/50",
      }))
    );

    // meetings를 날짜순으로 정렬 (최신순)
    allMeetings.sort((a, b) => new Date(b.date) - new Date(a.date));
    setMeetings(allMeetings);
  }, []);

  // 검색 및 필터링된 meetings
  const filteredMeetings = meetings.filter((meeting) => {
    const matchesSearch = meeting.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesActivity =
      filterActivity === "전체" || meeting.activity === filterActivity;
    return matchesSearch && matchesActivity;
  });

  // 활동 종류 목록
  const activities = [
    "전체",
    "식사",
    "커피",
    "운동",
    "관람",
    "여행",
    "스터디",
    "놀기",
    "일상대화",
  ];

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
          밥팅 게시판
        </Title>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="맛남을 검색하세요"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
        </SearchContainer>
      </Header>

      <FilterContainer>
        <FaFilter />
        <FilterSelect
          value={filterActivity}
          onChange={(e) => setFilterActivity(e.target.value)}
        >
          {activities.map((activity, index) => (
            <option key={index} value={activity}>
              {activity}
            </option>
          ))}
        </FilterSelect>
      </FilterContainer>

      <List>
        {filteredMeetings.map((meeting) => (
          <ListItem
            key={meeting.id}
            onClick={() => meetingClickHandler(meeting.id)}
          >
            <Thumbnail src={meeting.userProfileImage} />
            <Content>
              <TitleRow>
                <MeetingTitle>{meeting.title}</MeetingTitle>
                <Participants>
                  <FaUserPlus /> {meeting.participants.length}/
                  {meeting.maxParticipants}
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
        ))}
      </List>
      <CreateButton onClick={() => navigate("/team/creation")}>
        밥팅 생성하기
      </CreateButton>
    </Container>
  );
};

export default MeetingBoard;

// 스타일 정의
const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #007bff;
  cursor: pointer;
  margin-right: 10px;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 87%;
  padding: 12px 40px 12px 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  color: #888;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: #666;
`;

const FilterSelect = styled.select`
  margin-left: 10px;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
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
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
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

const CreateButton = styled.button`
  position: fixed;
  bottom: 80px;
  right: 20px;
  padding: 15px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: #218838;
  }
`;
