import React, { useState } from 'react';
import styled from 'styled-components';

// SignUp 컴포넌트
const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);

  // 약관 동의 체크박스 상태 변경 함수
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Container>
      <Title>Sign up</Title>
      
      <InputContainer>
        <Input type="text" placeholder="Username" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </InputContainer>

      <CheckboxContainer>
        <Checkbox type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <CheckboxLabel>
          I have read and agree to the <PolicyLink href="#">privacy policy and terms</PolicyLink>.
        </CheckboxLabel>
      </CheckboxContainer>

      <SignUpButton>Sign up</SignUpButton>

    </Container>
  );
};

export default SignUp;

// 스타일 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #374151;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin-bottom: 12px;
  background-color: #f9fafb;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #6b7280;
`;

const PolicyLink = styled.a`
  color: #3b82f6;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SignUpButton = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #3b82f6;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 30px;
`;
