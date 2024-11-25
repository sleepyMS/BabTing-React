import React from "react";
import styled from "styled-components";
import TimeTable from "../components/Timetable";
import SemesterTabs from "../components/SemesterTabs";

/**
 * Calendar 컴포넌트 - 주간 캘린더 UI
 * @param {Object} props - Calendar 컴포넌트에 전달되는 props
 * @param {Array} props.events - 각 시간대별로 표시될 이벤트 목록
 * @returns {JSX.Element} Calendar 컴포넌트
 */
const TimeTablePage = ({ events }) => {
  

  return (<>
  
  <SemesterTabs />
  <TimeTable events={events}/>
  </>
    
  );
};

export default TimeTablePage;