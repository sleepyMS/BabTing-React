import React, { useState } from "react";
import styled from "styled-components";

// 메인 Login 컴포넌트
const Login = () => {
  const [isMobile, setIsMobile] = useState(true);

  // 모바일/이메일 탭 전환 함수
  const toggleTab = (tab) => {
    setIsMobile(tab === "mobile");
  };

  return (
    <Container>
      <TabContainer>
        <Tab active={isMobile} onClick={() => toggleTab("mobile")}>
          Mobile
        </Tab>
        <Tab active={!isMobile} onClick={() => toggleTab("email")}>
          Email
        </Tab>
      </TabContainer>

      <InputContainer>
        <Input placeholder={isMobile ? "Mobile number" : "Email"} />
        {isMobile && (
          <VerificationContainer>
            <VerificationInput placeholder="Verification code" />
            <GetCodeText>Get code</GetCodeText>
          </VerificationContainer>
        )}
      </InputContainer>

      <LoginButton>Login</LoginButton>

      <Footer>
        <FooterLink href="/signup">sign up</FooterLink>
        <FooterLink href="#">Forgot password</FooterLink>
      </Footer>

      <Divider>
        <Line />
        <OrText>Or</OrText>
        <Line />
      </Divider>

      <SocialLoginContainer>
        <SocialIcon
          src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Kakao_logo.jpg?20171226171735"
          alt="Kakao"
        />
        <SocialIcon
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/c/c1/20170301123009%21Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png"
          alt="google"
        />
      </SocialLoginContainer>
    </Container>
  );
};

export default Login;

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

const TabContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

const Tab = styled.button`
  flex: 1;
  padding: 10px 0;
  background-color: ${(props) => (props.active ? "#3b82f6" : "#e0e7ff")};
  color: ${(props) => (props.active ? "#fff" : "#3b82f6")};
  border: none;
  border-radius: 8px 8px 0 0;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:first-child {
    margin-right: 8px;
  }
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

const VerificationContainer = styled.div`
  display: flex;
  align-items: center;
`;

const VerificationInput = styled(Input)`
  flex: 1;
  margin-right: 10px;
`;

const GetCodeText = styled.span`
  font-size: 14px;
  color: #3b82f6;
  cursor: pointer;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #c7d2fe;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 30px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const FooterLink = styled.a`
  font-size: 14px;
  color: #9ca3af;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px 0;
`;

const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: #d1d5db;
`;

const OrText = styled.span`
  padding: 0 10px;
  font-size: 14px;
  color: #9ca3af;
`;

const SocialLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

const SocialIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: #f3f4f6;
  padding: 5px;
  cursor: pointer;
`;
