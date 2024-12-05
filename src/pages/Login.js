import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 메인 Login 컴포넌트
const Login = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(true);
  const [idValue, setId] = useState('');
  const [pwValue, setPw] = useState('');
  // 모바일/이메일 탭 전환 함수
  const saveUserId = event => {setId(event.target.value);};
  const saveUserPw = event => { setPw(event.target.value); };

  let loginButtonClick = () => {
    let user = {
      id: 1,
      name: "김철수",
      department: "컴퓨터공학과",
      studentId: "2020123456",
      gender: "남성",
      interests: ["코딩", "게임", "영화"],
      meetHistory: [
        { date: "2024-11-20", partner: "박영희", location: "학생식당" },
        { date: "2024-11-22", partner: "이민호", location: "카페테리아" },
      ],
      myPosts: [
        {
          id: 1,
          title: "같이 식사하실 분!",
          content: "점심 함께 하실 분 구합니다.",
          date: "2024-11-24",
        },
        {
          id: 2,
          title: "스터디 모집",
          content: "알고리즘 스터디 모집합니다.",
          date: "2024-11-23",
        },
      ],
      myComments: [
        { postId: 3, content: "저 참여하고 싶습니다!" },
        { postId: 5, content: "정보 감사합니다." },
      ],
      timetable: [
        { day: "월요일", time: "10:00-12:00", subject: "자료구조" },
        { day: "화요일", time: "14:00-16:00", subject: "운영체제" },
      ],
      badges: ["활동왕", "친절한 이웃"],
      meetCount: 5,
      mannerTemperature: 36.5,
      profileImage: "https://via.placeholder.com/50",
      reviews: [
        {
          title: "맛있는 식당 발견",
          content: "정말 맛있었어요!",
          rating: "★★★★★",
          date: "2024-11-24",
        },
      ],
      meetings: [
        {
          id: 1,
          title: "점심 같이 드실 분?",
          activity: "식사",
          date: "2024-11-26",
          location: "용인시 블랙탑커피",
          groupSize: "여러 명",
          maxParticipants: 10,
          participants: ["김철수"],
          status: "ongoing",
        },
      ],
    };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/chat");
  }

  return (
    <Container>
      <InputContainer>
        <Input placeholder={isMobile ? "ID" : "Email"} 
            value={idValue}
            onChange={saveUserId} />
        <Input type={"password"} placeholder={isMobile ? "Password" : "Email"}
            value={pwValue}
            onChange={saveUserPw} />
      </InputContainer>
      {idValue.trim().length>0 && pwValue.trim().length>0 ? <LoginButton onClick={loginButtonClick}>Login</LoginButton> :  <NotLoginButton>Login</NotLoginButton>} 

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
const NotLoginButton = styled.button`
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
const LoginButton = styled.button`
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
