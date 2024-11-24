import React from "react";
import styled from "styled-components";

/**
 * BottomNavigation 컴포넌트 - 하단 네비게이션 바
 * @param {Object} props - BottomNavigation 컴포넌트에 전달되는 props
 * @param {function} props.onHomeClick - 홈 버튼 클릭 시 호출될 함수
 * @param {function} props.onMapClick - 캠퍼스 지도 버튼 클릭 시 호출될 함수
 * @param {function} props.onAddClick - 추가 버튼 클릭 시 호출될 함수
 * @param {function} props.onChatClick - 채팅 버튼 클릭 시 호출될 함수
 * @param {function} props.onMyPageClick - 마이페이지 버튼 클릭 시 호출될 함수
 * @returns {JSX.Element} BottomNavigation 컴포넌트
 */
const BottomNavigation = ({
  onHomeClick,
  onMapClick,
  onAddClick,
  onChatClick,
  onMyPageClick,
}) => {
  return (
    <NavContainer>
      <NavButton onClick={onHomeClick}>
        <Circle />
        <Label>홈</Label>
      </NavButton>
      <NavButton onClick={onMapClick}>
        <Circle />
        <Label>캠퍼스 지도</Label>
      </NavButton>
      <AddButton onClick={onAddClick}>
        <AddIcon>+</AddIcon>
      </AddButton>
      <NavButton onClick={onChatClick}>
        <Circle active />
        <Label>채팅</Label>
      </NavButton>
      <NavButton onClick={onMyPageClick}>
        <Circle />
        <Label>마이페이지</Label>
      </NavButton>
    </NavContainer>
  );
};

export default BottomNavigation;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  background-color: #f8f9fa;
  border-top: 1px solid #e0e0e0;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 600px; /* 최대 너비 */
  margin: 0 auto; /* 가운데 정렬 */
`;

const NavButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${(props) => (props.active ? "#4285f4" : "#d8e3f2")};
  border-radius: 50%;
`;

const Label = styled.span`
  font-size: 12px;
  color: #666;
  margin-top: 4px;
`;

const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: #4285f4;
  border-radius: 50%;
  cursor: pointer;
`;

const AddIcon = styled.span`
  font-size: 24px;
  color: white;
  line-height: 1;
`;
