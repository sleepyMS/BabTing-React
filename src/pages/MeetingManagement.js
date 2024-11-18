import React from 'react';
import styled from 'styled-components';
import BottomNavigation from '../components/BottomNavigation';

// 메인 MeetingManagement 컴포넌트
const MeetingManagement = () => {
  return (
    <Container>
      <Header>모임 관리</Header>

      <FilterContainer>
        <FilterButton active>전체</FilterButton>
        <FilterButton>맛밤 예정</FilterButton>
        <FilterButton>맛밤 완료</FilterButton>
        <FilterButton>내가 만든 맛밤</FilterButton>
      </FilterContainer>

      <MeetingList>
        <MeetingItem>
          <ProfileImage src="https://randomuser.me/api/portraits/men/1.jpg" alt="user" />
          <MeetingInfo>
            <MeetingTitle>점심 돈볼 모임</MeetingTitle>
            <LastMessage>Hey, how's everyone?</LastMessage>
          </MeetingInfo>
          <MeetingDetails>
            <Time>10:01 AM</Time>
            <Badge>2</Badge>
          </MeetingDetails>
        </MeetingItem>

        <MeetingItem>
          <ProfileImage src="https://randomuser.me/api/portraits/women/2.jpg" alt="user" />
          <MeetingInfo>
            <MeetingTitle>아침 국밥 모임</MeetingTitle>
            <LastMessage>I'm good, thanks for asking!</LastMessage>
          </MeetingInfo>
          <MeetingDetails>
            <Time>10:02 AM</Time>
            <Badge>2</Badge>
          </MeetingDetails>
        </MeetingItem>

        <MeetingItem>
          <ProfileImage src="https://randomuser.me/api/portraits/men/3.jpg" alt="user" />
          <MeetingInfo>
            <MeetingTitle>블랙탭 고양이 모임</MeetingTitle>
            <LastMessage>Just finished my work.</LastMessage>
          </MeetingInfo>
          <MeetingDetails>
            <Time>10:03 AM</Time>
          </MeetingDetails>
        </MeetingItem>
      </MeetingList>

      <BottomNavigation
        onHomeClick={() => console.log("홈 클릭")}
        onMapClick={() => console.log("캠퍼스 지도 클릭")}
        onAddClick={() => console.log("추가 버튼 클릭")}
        onChatClick={() => console.log("채팅 클릭")}
        onMyPageClick={() => console.log("마이페이지 클릭")}
      />

    </Container>
  );
};

export default MeetingManagement;

// 스타일 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  // padding: 20px;
  width: 100%;
  // max-width: 400px;
  // margin: 0 auto;
  background-color: #f9fafb;
`;

const Header = styled.h2`
  font-size: 20px;
  color: #374151;
  margin-bottom: 20px;
  text-align: center;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
`;

const FilterButton = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  color: ${(props) => (props.active ? '#ffffff' : '#3b82f6')};
  background-color: ${(props) => (props.active ? '#3b82f6' : '#e0e7ff')};
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

const MeetingList = styled.div`
  width: 100%;
`;

const MeetingItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #e5e7eb;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

const MeetingInfo = styled.div`
  flex: 1;
`;

const MeetingTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #374151;
`;

const LastMessage = styled.div`
  font-size: 14px;
  color: #6b7280;
`;

const MeetingDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Time = styled.div`
  font-size: 12px;
  color: #9ca3af;
`;

const Badge = styled.div`
  width: 20px;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
  background-color: #ef4444;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BottomNav = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  width: 100%;
  border-top: 1px solid #e5e7eb;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  max-width: 600px; /* 최대 너비 */
  margin: 0 auto; /* 가운데 정렬 */
`;

const NavItem = styled.div`
  font-size: 12px;
  color: ${(props) => (props.active ? '#3b82f6' : '#9ca3af')};
  cursor: pointer;
`;

