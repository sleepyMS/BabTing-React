import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const ChatRoom = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <Container>
      {/* 상단 모임 정보 카드 */}
      <Card>
        <CardImage src="https://via.placeholder.com/50" alt="모임 이미지" />
        <CardContent>
          <TopRow>
            <Organizer>먹보돼지</Organizer>
            <Status>진행중</Status>
          </TopRow>
          <TitleText>{formData?.activity} 함께 하실 분!</TitleText>
          <Details>
            <Location>{formData?.location}</Location>
            <Date>{formData?.date}</Date>
            <AdditionalInfo>{formData?.groupSize} 모집 중</AdditionalInfo>
          </Details>
        </CardContent>
      </Card>

      {/* 채팅 메시지 영역 */}
      <ChatArea>
        <MessageLeft>
          <Avatar />
          <TextBubble>안녕하세요!</TextBubble>
        </MessageLeft>
        <MessageRight>
          <TextBubble>안녕하세요! 반갑습니다.</TextBubble>
          <Avatar />
        </MessageRight>
      </ChatArea>

      {/* 메시지 입력창 */}
      <InputContainer>
        <Input placeholder="메시지를 입력하세요..." />
        <SendButton>전송</SendButton>
      </InputContainer>
    </Container>
  );
};

export default ChatRoom;

// 스타일 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Card = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #f0f8ff;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  margin-right: 15px;
`;

const CardContent = styled.div`
  flex: 1;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Organizer = styled.span`
  font-weight: bold;
  color: #333;
`;

const Status = styled.span`
  color: #28a745;
  font-size: 14px;
  font-weight: bold;
`;

const TitleText = styled.h3`
  font-size: 16px;
  margin: 10px 0;
`;

const Details = styled.div`
  font-size: 14px;
  color: #555;
`;

const Location = styled.div`
  margin-bottom: 5px;
`;

const Date = styled.div`
  margin-bottom: 5px;
`;

const AdditionalInfo = styled.div``;

const ChatArea = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
`;

const MessageLeft = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const MessageRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 10px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ddd;
  margin: 0 10px;
`;

const TextBubble = styled.div`
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => (props.right ? "#d1e7ff" : "#fff")};
  border: 1px solid #ddd;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ddd;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SendButton = styled.button`
  margin-left: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
