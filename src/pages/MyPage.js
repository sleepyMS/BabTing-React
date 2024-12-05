import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Modal from "../components/Modal";
import { IoHomeOutline, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BiMap, BiUserCircle } from "react-icons/bi";

const Container = styled.div`
  flex: 1;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #d9d9d9;
  margin-right: 20px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const ProfileDetails = styled.div`
  font-size: 14px;
  color: #6c757d;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Section = styled.div`
  margin: 5px;
`;

const SectionTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SectionItem = styled.div`
  margin-bottom: 10px;
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

const MyPage = ({ activeSection }) => {
  const [mannerTemp, setMannerTemp] = useState(37.3);
  const [isBadgeModalOpen, setBadgeModalOpen] = useState(false);
  const [isMeetingModalOpen, setMeetingModalOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMannerTemp = async () => {
      const response = await fetch("/api/manner-temperature"); // API 호출
      const data = await response.json();
      setMannerTemp(data.temperature);
    };
    fetchMannerTemp();
  }, []);

  return (
    <div>
      <Container>
        <ProfileHeader>
          <ProfileImage />
          <ProfileInfo>
            <ProfileName>먹보돼지</ProfileName>
            <ProfileDetails>강남대학교 | ICT융합공학부 | 22학번</ProfileDetails>
            <Button>매너 칭찬하기</Button>
          </ProfileInfo>
        </ProfileHeader>
        <Section>
          <SectionTitle>매너 온도</SectionTitle>
          <SectionItem>{mannerTemp}°C</SectionItem>
          <img src="/roll.png" style={{ width: "100%" }} />
        </Section>
        <Section>
          <div
            style={{
              width: "100%",
              height: "2px",
              background: "#ccc",
              borderRadius: "1px",
            }}
          />
          <SectionTitle>활동 배지</SectionTitle>
          <SectionItem onClick={() => setBadgeModalOpen(true)}>
            총 13개
          </SectionItem>
        </Section>
        <Section>
          <div
            style={{
              width: "100%",
              height: "2px",
              background: "#ccc",
              borderRadius: "1px",
            }}
          />
          <SectionTitle>밥팅 성사</SectionTitle>
          <SectionItem onClick={() => setMeetingModalOpen(true)}>
            43번
          </SectionItem>
        </Section>
        <Section>
          <div
            style={{
              width: "100%",
              height: "2px",
              background: "#ccc",
              borderRadius: "1px",
            }}
          />
          <SectionTitle>시간표</SectionTitle>
          <SectionItem onClick={() => navigate("/user/timetable")}>
            시간표 보기
          </SectionItem>
        </Section>
        <Modal
          isOpen={isBadgeModalOpen}
          onClose={() => setBadgeModalOpen(false)}
          title="활동 배지 상세보기"
        >
          <p>배지 상세 내용</p>
        </Modal>
        <Modal
          isOpen={isMeetingModalOpen}
          onClose={() => setMeetingModalOpen(false)}
          title="밥팅 성사 상세보기"
        >
          <p>밥팅 성사 상세 내용</p>
        </Modal>
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

export default MyPage;
