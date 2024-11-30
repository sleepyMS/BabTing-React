import React, { useState } from "react";
import styled from "styled-components";

/**
 * BottomSheet 컴포넌트 - 화면 하단에서 올라오는 모달 형식의 시트
 * @param {Object} props - BottomSheet 컴포넌트에 전달되는 props
 * @param {boolean} props.isOpen - 바텀시트가 열려 있는지 여부
 * @param {function} props.onClose - 바텀시트를 닫는 함수
 * @param {React.ReactNode} props.children - 바텀시트에 표시될 내용
 * @returns {JSX.Element} BottomSheet 컴포넌트
 */
const BottomSheet = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <SheetContainer>
        <Handle />
        <Content>{children}</Content>
      </SheetContainer>
    </>
  );
};

export default BottomSheet;

// Styled-components 정의
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const SheetContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-radius: 20px 20px 0 0;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  z-index: 1001;
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

const Handle = styled.div`
  width: 50px;
  height: 5px;
  background: #ccc;
  border-radius: 5px;
  margin: 8px auto;
`;

const Content = styled.div`
  padding: 16px 0;
`;
