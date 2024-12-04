import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";

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
  margin-bottom: 10px;
`;

const SectionItem = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const MyPage = ({ activeSection }) => {
  const [mannerTemp, setMannerTemp] = useState(37.3);
  const [isBadgeModalOpen, setBadgeModalOpen] = useState(false);
  const [isMeetingModalOpen, setMeetingModalOpen] = useState(false);

  useEffect(() => {
    const fetchMannerTemp = async () => {
      const response = await fetch("/api/manner-temperature"); // API 호출
      const data = await response.json();
      setMannerTemp(data.temperature);
    };
    fetchMannerTemp();
  }, []);

  return (
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
        <SectionTitle>맛남 성사</SectionTitle>
        <SectionItem onClick={() => setMeetingModalOpen(true)}>
          43번
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
        title="맛남 성사 상세보기"
      >
        <p>맛남 성사 상세 내용</p>
      </Modal>
    </Container>
  );
};

export default MyPage;
