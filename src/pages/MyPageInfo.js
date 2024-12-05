import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Sidebar = styled.div`
  height: 100vh;
  padding: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #d9d9d9;
  margin-right: 10px;
`;

const ProfileName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const MenuSection = styled.div`
  margin-top: 30px;
`;

const MenuTitle = styled.div`
  font-size: 14px;
  color: #6c757d;
  margin-bottom: 10px;
`;

const MenuItem = styled.div`
  font-size: 16px;
  margin: 8px 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const MyPageInfo = ({ setActiveSection }) => {
  const navigate = useNavigate();

  return (
    <Sidebar>
      <Profile>
        <ProfileImage />
        <ProfileName>먹보돼지</ProfileName>
        <div style={{ width: "45%" }}></div>
        <div onClick={() => navigate("/mypage")}>
          <IoIosArrowForward size={20} color="#777" />
        </div>
      </Profile>
      <MenuSection>
        <MenuTitle>최근 방문</MenuTitle>
        <MenuItem onClick={() => setActiveSection("bookmarks")}>
          북마크
        </MenuItem>
        <MenuItem onClick={() => setActiveSection("unreadChats")}>
          안읽은 채팅방
        </MenuItem>
      </MenuSection>
      <MenuSection>
        <MenuTitle>나의 맛남</MenuTitle>
        <MenuItem onClick={() => setActiveSection("interests")}>
          관심목록
        </MenuItem>
        <MenuItem onClick={() => setActiveSection("history")}>
          맛남내역
        </MenuItem>
      </MenuSection>
      <MenuSection>
        <MenuTitle>기타</MenuTitle>
        <MenuItem>내 학교 설정</MenuItem>
        <MenuItem>학교 인증하기</MenuItem>
        <MenuItem>설정</MenuItem>
        <MenuItem>로그아웃</MenuItem>
      </MenuSection>
    </Sidebar>
  );
};

export default MyPageInfo;
