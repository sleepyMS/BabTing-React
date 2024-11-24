import React, { useState } from "react";
import styled from "styled-components";

/**
 * ApiTestTool 컴포넌트 - 여러 API를 테스트할 수 있는 버튼과 폼 제공
 * @param {Object} props - ApiTestTool 컴포넌트에 전달되는 props
 * @param {string[]} props.apiList - 테스트할 API 엔드포인트 리스트
 * @returns {JSX.Element} ApiTestTool 컴포넌트
 */
const ApiTestTool = ({ apiList }) => {
  const apikey = process.env.REACT_APP_UNIVCERT_APIKEY;
  const [selectedApi, setSelectedApi] = useState("");
  const [requestBody, setRequestBody] = useState(JSON.stringify({
    ...{"key": apikey},
  }));
  const [response, setResponse] = useState(null);

  // API 호출 함수
  const handleApiCall = async () => {
    if (!selectedApi) {
      alert("API를 선택하세요.");
      return;
    }

    try {
      const res = await fetch(selectedApi, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: requestBody,
      });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("API 호출 오류:", error);
      setResponse({ error: "API 호출 중 오류가 발생했습니다." });
    }
  };

  return (
    <Container>
      <a href="https://univcert.com/instruction1">https://univcert.com/instruction1</a>
      <FormContainer>
        <Label>API 선택</Label>
        <Select
          value={selectedApi}
          onChange={(e) => setSelectedApi(e.target.value)}
        >
          <option value="">API를 선택하세요</option>
          {apiList.map((api, index) => (
            <option key={index} value={api}>
              {api}
            </option>
          ))}
        </Select>

        <Label>요청 데이터</Label>
        <TextArea
          value={requestBody}
          onChange={(e) => setRequestBody(e.target.value)}
          placeholder="JSON 형식으로 요청 데이터를 입력하세요"
        />

        <Button onClick={handleApiCall}>API 호출</Button>
      </FormContainer>

      {response && (
        <ResponseContainer>
          <h3>응답 결과</h3>
          <ResponseData>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </ResponseData>
        </ResponseContainer>
      )}
    </Container>
  );
};

export default ApiTestTool;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  border-radius: 8px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 14px;
  margin: 10px 0 5px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px;
`;

const TextArea = styled.textarea`
  height: 100px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ResponseContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ResponseData = styled.div`
  font-size: 14px;
  color: #333;
  white-space: pre-wrap;
`;
