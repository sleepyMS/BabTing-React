import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoHomeOutline, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BiMap, BiUserCircle } from "react-icons/bi";

// const Sidebar = styled.div`
//   height: 100vh;
//   padding: 20px;
//   box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

//   @media (max-width: 768px) {
//     width: 100%;
//     height: auto;
//   }
// `;

const Container = styled.div`
  flex: 1;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 20px;
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

const MyPageInfo = ({ setActiveSection }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Container>
        <Profile>
          <ProfileImage />
          <ProfileName>먹보돼지</ProfileName>
          <div style={{ width: "45%" }}></div>
          <div onClick={() => navigate("/mypage/info")}>
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
        <NavItem onClick={() => navigate("/chat")}>
          <IoChatbubbleEllipsesOutline size={20} />
          <NavText>채팅</NavText>
        </NavItem>
        <NavItem onClick={() => navigate("/mypage")} active>
          <BiUserCircle size={20} />
          <NavText>마이페이지</NavText>
        </NavItem>
      </NavBar>
    </div>
  );
};

export default MyPageInfo;
