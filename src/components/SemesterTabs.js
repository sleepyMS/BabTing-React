import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

/**
 * SemesterTabs 컴포넌트 - 학기 탭을 표시하는 컴포넌트
 * @param {Object} props - SemesterTabs 컴포넌트에 전달되는 props
 * @param {Array<{ label: string, value: string }>} props.tabs - 탭 목록 (각 탭의 레이블과 값을 포함)
 * @param {function} props.onChange - 선택된 탭이 변경될 때 호출되는 콜백 함수
 * @returns {JSX.Element} SemesterTabs 컴포넌트
 */
const SemesterTabs = ({ onChange }) => {
    const navigate = useNavigate();
    const tabs = [
     { label: "2024년 2학기", value: "second-semester" },
     { label: "2024년 1학기", value: "first-semester" },
   ];
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const handleTabClick = (value) => {
    setActiveTab(value);
    // onChange(value);
  };
  const handleEditClick = () => {
    navigate("/user/timetable/edit");
  };
  return (<>
  <IconContainer>
      <IconContainer>
        <EditIcon>←</EditIcon>
        <IconContainerinContainer>
        <EditIcon onClick={handleEditClick}>✏️</EditIcon>
        <AddIcon>➕</AddIcon>
        </IconContainerinContainer>
      </IconContainer>
    </IconContainer>
    <TabsContainer>
      {tabs.map((tab) => (
        <TabButton
          key={tab.value}
          isActive={activeTab === tab.value}
          onClick={() => handleTabClick(tab.value)}
        >
          {tab.label}
          {activeTab === tab.value && <ActiveLine />}
        </TabButton>
      ))}
    </TabsContainer>
  </>
    
  );
};

export default SemesterTabs;

const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
  background-color: white;
`;

const TabButton = styled.button`
  all: unset;
  position: relative;
  font-size: 16px;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  color: ${(props) => (props.isActive ? "#000" : "#888")};
  cursor: pointer;
  margin: 0 10px;

  &:hover {
    color: #000;
  }
`;

const ActiveLine = styled.div`
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #007bff;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:100%;
  gap: 15px;
`;
const IconContainerinContainer = styled.div`
  display: flex;
  margin: 11px 13px;
  align-items: center;
  gap: 15px;
`;

const EditIcon = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 15px;
  &:hover {
    color: #007bff;
  }
`;

const AddIcon = styled.div`
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;
