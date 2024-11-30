import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TimeTable from "../components/Timetable";

/**
 * EditClassPage 컴포넌트 - 수업 추가/수정 페이지
 * @returns {JSX.Element} EditClassPage 컴포넌트
 */
const EditTimeTablePage = () => {
  let user = JSON.parse(localStorage.getItem("user")) || { timetable: [] };
  const [timetable, setTimetable] = useState(user.timetable);
  const [formData, setFormData] = useState({
    subject: "",
    professor: "",
    day: "월요일",
    startTime: "",
    endTime: "",
    location: "",
  });
  const navigate = useNavigate();

  const handleCompleteClick = () => {
    navigate("/user/timetable");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddTime = () => {
    if (formData.subject && formData.startTime && formData.endTime && formData.location) {
      const newEntry = {
        day: formData.day,
        time: `${formData.startTime}-${formData.endTime}`,
        subject: formData.subject,
        location: formData.location,
      };
      const updatedTimetable = [...timetable, newEntry];
      setTimetable(updatedTimetable);
      localStorage.setItem("user", JSON.stringify({ ...user, timetable: updatedTimetable }));

      // 폼 초기화
      setFormData({
        subject: "",
        professor: "",
        day: "월요일",
        startTime: "",
        endTime: "",
        location: "",
      });
    } else {
      alert("모든 필수 필드를 입력해주세요.");
    }
  };

  const handleDeleteEvent = (eventToDelete) => {
    const updatedTimetable = timetable.filter((event) => event !== eventToDelete);
    setTimetable(updatedTimetable);

    // 로컬 스토리지 업데이트
    localStorage.setItem("user", JSON.stringify({ ...user, timetable: updatedTimetable }));
  };

  return (
    <PageContainer>
      <Header>
        <BackButton onClick={() => navigate("/user/timetable")}>←</BackButton>
        <Title>수업 추가</Title>
        <CompleteButton onClick={handleCompleteClick}>완료</CompleteButton>
      </Header>

      <TimeTable
        events={timetable}
        type="edit"
        onDeleteEvent={handleDeleteEvent} // 삭제 핸들러 전달
      />
      <Form>
        <InputLabel>수업명</InputLabel>
        <Input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="수업명을 입력하세요"
        />
        <InputLabel>교수명</InputLabel>
        <Input
          type="text"
          name="professor"
          value={formData.professor}
          onChange={handleInputChange}
          placeholder="교수명을 입력하세요"
        />
        <InputLabel>요일 및 시간</InputLabel>
        <Row>
          <Select name="day" value={formData.day} onChange={handleInputChange}>
            <option>월요일</option>
            <option>화요일</option>
            <option>수요일</option>
            <option>목요일</option>
            <option>금요일</option>
          </Select>
          <Input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleInputChange}
          />
          <span>to</span>
          <Input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleInputChange}
          />
        </Row>
        <InputLabel>장소</InputLabel>
        <Input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          placeholder="장소를 입력하세요"
        />
        <AddTime onClick={handleAddTime}>시간 및 장소 추가</AddTime>
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

const Form = styled.div`
  padding: 10px 0;
`;

const InputLabel = styled.div`
  font-size: 14px;
  margin: 10px 0 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 0;
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

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AddTime = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
`;
