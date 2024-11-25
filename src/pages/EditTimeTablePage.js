import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TimeTable from "../components/Timetable";

/**
 * EditClassPage 컴포넌트 - 수업 추가/수정 페이지
 * @returns {JSX.Element} EditClassPage 컴포넌트
 */
const EditTimeTablePage = ({ events }) => {
  const navigate = useNavigate();

  const handleCompleteClick = () => {
    navigate("/user/timetable");
  };

  return (
    <PageContainer>
      <Header>
        <BackButton onClick={() => navigate("/user/timetable")}>←</BackButton>
        <Title>수업 추가</Title>
        <CompleteButton onClick={handleCompleteClick}>완료</CompleteButton>
      </Header>
      
        <TimeTable events={events} />
      <Form>
        <InputLabel>수업명</InputLabel>
        <Input type="text" placeholder="수업명을 입력하세요" />
        <InputLabel>교수명</InputLabel>
        <Input type="text" placeholder="교수명을 입력하세요" />
        <InputLabel>요일 및 시간</InputLabel>
        <Row>
          <Select>
            <option>월요일</option>
            <option>화요일</option>
            <option>수요일</option>
            <option>목요일</option>
            <option>금요일</option>
          </Select>
          <Input type="time" />
          <span>to</span>
          <Input type="time" />
        </Row>
        <InputLabel>장소</InputLabel>
        <Input type="text" placeholder="장소를 입력하세요" />
        <AddTime>시간 및 장소 추가</AddTime>
      </Form>
    </PageContainer>
  );
};

export default EditTimeTablePage;

const PageContainer = styled.div`
  padding: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const BackButton = styled.div`
  font-size: 18px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;

const CompleteButton = styled.button`
  all: unset;
  color: #007bff;
  cursor: pointer;
`;

const TimeTableHeader = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f9f9f9;
  padding: 10px 0;
`;

const Day = styled.div`
  flex: 1;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`;

const TimeTableBody = styled.div`
  display: grid;
  grid-template-rows: repeat(9, 40px);
`;

const Row = styled.div`
  display: flex;
  border-top: 1px solid #ddd;
`;

const Cell = styled.div`
  flex: 1;
  border-right: 1px solid #ddd;
  &:last-child {
    border-right: none;
  }
`;

const Form = styled.div`
  padding: 10px 0;
`;

const InputLabel = styled.div`
  font-size: 14px;
  margin: 10px 0 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
`;

const AddTime = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
`;
