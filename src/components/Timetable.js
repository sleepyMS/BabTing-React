import React from "react";
import styled from "styled-components";
import SemesterTabs from "./SemesterTabs";

/**
 * Calendar 컴포넌트 - 주간 캘린더 UI
 * @param {Object} props - Calendar 컴포넌트에 전달되는 props
 * @param {Array} props.events - 각 시간대별로 표시될 이벤트 목록
 * @returns {JSX.Element} Calendar 컴포넌트
 */
const TimeTable = ({ events }) => {
  const days = ["월요일", "화요일", "수요일", "목요일", "금요일"];

  // Helper 함수: 시간을 grid-row로 변환 (9:00부터 시작)
  const calculateGridPosition = (time) => {
    const [start, end] = time.split("-").map((t) => {
      const [hour, minute] = t.split(":").map(Number);
      return (hour - 9) * 2 + (minute / 30) + 1; // 1시간 = 2칸, 30분 = 1칸
    });
    return { start, end };
  };

  return (<>
  <CalendarContainer>
      <Header>
        {days.map((day, index) => (
          <DayTab key={index}>{day}</DayTab>
        ))}
      </Header>
      <Table>
        <TimeColumn>
          {Array.from({ length: 20 }, (_, i) => (
            <TimeSlot key={i}>
              {`${Math.floor(i / 2) + 9}:` + (i % 2 === 0 ? "00" : "30")}
            </TimeSlot>
          ))}
        </TimeColumn>
        {days.map((day, index) => (
          <DayColumn key={index}>
            {events
              .filter((event) => event.day === day)
              .map((event, i) => {
                const { start, end } = calculateGridPosition(event.time);
                return (
                  <Event key={i} style={{ gridRowStart: start, gridRowEnd: end }}>
                    {event.subject}
                  </Event>
                );
              })}
          </DayColumn>
        ))}
      </Table>
    </CalendarContainer>
  </>
    
  );
};

export default TimeTable;

const CalendarContainer = styled.div`
  width: 100%;
  max-width: 800px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  border-bottom: 1px solid #eaeaea;
  background-color: #f8f8f8;
`;

const DayTab = styled.div`
  flex: 1;
  text-align: center;
  font-weight: bold;
  padding: 10px;
  border-right: 1px solid #eaeaea;
`;

const Table = styled.div`
  display: grid;
  grid-template-columns: 50px repeat(5, 1fr);
`;

const TimeColumn = styled.div`
  display: grid;
  grid-template-rows: repeat(20, 30px); /* 20칸 = 30분 단위 */
  border-right: 1px solid #eaeaea;
  text-align: center;
  font-size: 12px;
  color: #999;
`;

const TimeSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eaeaea;
`;

const DayColumn = styled.div`
  display: grid;
  grid-template-rows: repeat(20, 30px); /* 20칸 = 30분 단위 */
  border-right: 1px solid #eaeaea;
  position: relative;
`;

const Event = styled.div`
  background-color: #d7eaff;
  border-radius: 4px;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  margin: 2px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
`;
