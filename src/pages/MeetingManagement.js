import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BottomNavigation from "../components/BottomNavigation";
import { IoHomeOutline, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BiMap, BiUserCircle } from "react-icons/bi";

// 메인 MeetingManagement 컴포넌트
const MeetingManagement = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Header>모임 관리</Header>

        <FilterContainer>
          <FilterButton active>전체</FilterButton>
          <FilterButton>밥팅 예정</FilterButton>
          <FilterButton>밥팅 완료</FilterButton>
          <FilterButton>내가 만든 밥팅</FilterButton>
        </FilterContainer>

        <MeetingList>
          <MeetingItem onClick={() => navigate("/chatroom")}> 
            <ProfileImage
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="user"
            />
            <MeetingInfo>
              <MeetingTitle>점심 돈볼 모임</MeetingTitle>
              <LastMessage>안녕하세요! 반갑습니다.</LastMessage>
            </MeetingInfo>
            <MeetingDetails>
              <Time>10:01 AM</Time>
              <Badge>2</Badge>
            </MeetingDetails>
          </MeetingItem>

          <MeetingItem  onClick={() => navigate("/chatroom")}>
            <ProfileImage
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="user"
            />
            <MeetingInfo>
              <MeetingTitle>아침 국밥 모임</MeetingTitle>
              <LastMessage>I'm good, thanks for asking!</LastMessage>
            </MeetingInfo>
            <MeetingDetails>
              <Time>10:02 AM</Time>
              <Badge>2</Badge>
            </MeetingDetails>
          </MeetingItem>

          <MeetingItem  onClick={() => navigate("/chatroom")}>
            <ProfileImage
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="user"
            />
            <MeetingInfo>
              <MeetingTitle>블랙탭 고양이 모임</MeetingTitle>
              <LastMessage>Just finished my work.</LastMessage>
            </MeetingInfo>
            <MeetingDetails>
              <Time>10:03 AM</Time>
            </MeetingDetails>
          </MeetingItem>
        </MeetingList>
      </Container>

      {/* 네비게이션 바 */}
      <NavBar>
        <NavItem onClick={() => navigate("/community/main")}>
          <IoHomeOutline size={20} />
          <NavText>홈</NavText>
        </NavItem>
        <NavItem onClick={() => navigate("/meetupmap")}>
          <BiMap size={20} />
          <NavText>캠퍼스 지도</NavText>
        </NavItem>
        <NavItem onClick={() => navigate("/chat")} active>
          <IoChatbubbleEllipsesOutline size={20} />
          <NavText>채팅</NavText>
        </NavItem>
        <NavItem onClick={() => navigate("/mypage")}>
          <BiUserCircle size={20} />
          <NavText>마이페이지</NavText>
        </NavItem>
      </NavBar>
    </div>

  );
};

export default MeetingManagement;

// 스타일 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  // width: 100%;
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
  color: ${(props) => (props.active ? "#ffffff" : "#3b82f6")};
  background-color: ${(props) => (props.active ? "#3b82f6" : "#e0e7ff")};
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

const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  background-color: #ffffff;
  border-top: 1px solid #e5e7eb;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const NavItem = styled.div`
  text-align: center;
  color: ${(props) => (props.active ? "#4f46e5" : "#6b7280")};
  font-size: 12px;
  cursor: pointer;
`;

const NavText = styled.div`
  margin-top: 5px;
`;
