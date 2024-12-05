// src/pages/community/MeetingDetails.js

import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import users from "../../data/users";
import { FaArrowLeft } from "react-icons/fa";

const MeetingDetails = () => {
  const [meeting, setMeeting] = useState(null);
  const { meetingId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // 모든 유저의 meetings에서 해당 ID를 가진 모임을 찾습니다.
    const allMeetings = users.flatMap((user) =>
      user.meetings.map((meeting) => ({
        ...meeting,
        organizer: user.name,
        userProfileImage: user.profileImage || "https://via.placeholder.com/50",
      }))
    );

    const foundMeeting = allMeetings.find(
      (meeting) => meeting.id === parseInt(meetingId)
    );

    if (foundMeeting) {
      setMeeting(foundMeeting);
    } else {
      alert("해당 모임을 찾을 수 없습니다.");
      navigate(-1);
    }
  }, [meetingId, navigate]);

  const handleJoinMeeting = () => {
    // 현재 사용자 정보를 로컬스토리지에서 가져옵니다.
    const user = JSON.parse(localStorage.getItem("user")) || {};

    if (!user.name) {
      alert("로그인이 필요합니다.");
      navigate("/login"); // 로그인 페이지로 이동
      return;
    }

    if (meeting.participants.includes(user.name)) {
      alert("이미 이 모임에 참여하셨습니다.");
      return;
    }

    if (meeting.participants.length >= meeting.maxParticipants) {
      alert("모임의 참여 인원이 최대입니다.");
      return;
    }

    // 참가자 목록에 사용자 이름을 추가합니다.
    meeting.participants.push(user.name);

    // 실제 앱에서는 서버와 통신하여 데이터를 업데이트해야 합니다.
    // 여기서는 users 데이터에서 해당 모임의 참가자 목록을 업데이트합니다.
    const userIndex = users.findIndex((u) => u.name === meeting.organizer);
    const meetingIndex = users[userIndex].meetings.findIndex(
      (m) => m.id === meeting.id
    );
    users[userIndex].meetings[meetingIndex] = meeting;

    alert("모임에 참여하였습니다!");
    navigate("/chatroom", { state: { meeting } });
  };

  const backHandler = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  if (!meeting) {
    return <div>로딩 중...</div>;
  }

  return (
    <Container>
      <BackButton onClick={backHandler}>
        <FaArrowLeft />
      </BackButton>
      <FadeIn>
        <Header>모임 정보 확인</Header>
        <Summary>
          <SummaryItem>
            <Label>모임 제목</Label>
            <Value>{meeting.title}</Value>
          </SummaryItem>
          <SummaryItem>
            <Label>카테고리</Label>
            <Value>{meeting.activity}</Value>
          </SummaryItem>
          <SummaryItem>
            <Label>주최자</Label>
            <Value>{meeting.organizer}</Value>
          </SummaryItem>
          <SummaryItem>
            <Label>일정</Label>
            <Value>{meeting.date}</Value>
          </SummaryItem>
          <SummaryItem>
            <Label>시간</Label>
            <Value>{meeting.time || "시간 미정"}</Value>
          </SummaryItem>
          <SummaryItem>
            <Label>장소</Label>
            <Value>{meeting.location}</Value>
          </SummaryItem>
          <SummaryItem>
            <Label>모임 구성</Label>
            <Value>{meeting.groupSize}</Value>
          </SummaryItem>
          <SummaryItem>
            <Label>현재 참여 인원</Label>
            <Value>
              {meeting.participants.length}/{meeting.maxParticipants}
            </Value>
          </SummaryItem>
        </Summary>
        <ButtonGroup>
          <JoinButton onClick={handleJoinMeeting}>모임 참여하기</JoinButton>
        </ButtonGroup>
      </FadeIn>
    </Container>
  );
};

export default MeetingDetails;

// 스타일 컴포넌트 및 애니메이션 정의

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const FadeIn = styled.div`
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Container = styled.div`
  padding: 20px;
  max-width: 480px;
  margin: 0 auto;
  background-color: #f9fafb;
  border-radius: 8px;
`;

const Header = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackButton = styled.button`
  display: inline-block;
  left: 20px;
  background: none;
  border: none;
  font-size: 24px;
  color: #007bff;
  cursor: pointer;
`;

const Summary = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Label = styled.span`
  font-weight: bold;
  color: #374151;
`;

const Value = styled.span`
  color: #4b5563;
  text-align: right;
  max-width: 60%;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const JoinButton = styled.button`
  width: 48%;
  padding: 15px;
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #4338ca;
  }
`;
