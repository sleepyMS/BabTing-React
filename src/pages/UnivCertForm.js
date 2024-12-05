import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

/**
 * UnivCertForm 컴포넌트 - 대학 인증 폼
 * @param {Object} props - UnivCertForm 컴포넌트에 전달되는 props
 * @param {function} props.onSuccess - 인증 성공 시 호출되는 함수
 * @returns {JSX.Element} UnivCertForm 컴포넌트
 */
const UnivCertForm = ({ onSuccess }) => {
  const apikey = process.env.REACT_APP_UNIVCERT_APIKEY;
  const [univName, setUnivName] = useState("강남대학교");
  const [email, setEmail] = useState("ny030303@kangnam.ac.kr");
  const [code, setCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSendCode = async () => {
    try {
      const response = await axios.post("https://univcert.com/api/v1/certify", {
        ...{"email": email},
        ...{"key": apikey},
        ...{"univName": univName},
        ...{"univ_check" : false}
      });
      if (response.data.success) {
        setIsCodeSent(true);
        setErrorMessage("");
      } else {
        setErrorMessage(response.data.message || "코드 전송에 실패했습니다.");
      }
    } catch (error) {
      setErrorMessage("코드 전송 중 오류가 발생했습니다.");
      console.log(error);
    }
  };

  const handleVerifyCode = async () => {
    try {
      const response = await axios.post("https://univcert.com/api/v1/certifycode", {
        ...{"email": email},
        ...{"key": apikey},
        ...{"univName": univName},
        ...{"code" : code}
      });
      if (response.data.success) {
        setErrorMessage("");
        onSuccess(); // 인증 성공 시 부모 컴포넌트로 콜백 전달
      } else {
        setErrorMessage(response.data.message || "인증에 실패했습니다.");
      }
    } catch (error) {
      setErrorMessage("인증 중 오류가 발생했습니다.");
    }
  };

  return (
    <Container>
      <Title>대학 인증</Title>
      <Form>
        {!isCodeSent ? (
          <>
            <Input
              type="email"
              placeholder="대학 이메일을 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              placeholder="대학 이름을 입력하세요"
              value={univName}
              onChange={(e) => setUnivName(e.target.value)}
            />
            <Button onClick={handleSendCode}>인증 코드 보내기</Button>
          </>
        ) : (
          <>
            <Input
              type="text"
              placeholder="인증 코드를 입력하세요"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <Button onClick={handleVerifyCode}>인증 완료</Button>
          </>
        )}
        {errorMessage && <Error>{errorMessage}</Error>}
      </Form>
    </Container>
  );
};

export default UnivCertForm;

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  text-align: center;
  padding: 20px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Error = styled.p`
  color: red;
  font-size: 12px;
`;

