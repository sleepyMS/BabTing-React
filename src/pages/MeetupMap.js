import React from "react";
import styled from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";

/**
 * MeetupMap 컴포넌트 - 지도와 이벤트 목록을 표시
 * @param {Object} props - MeetupMap에 전달되는 props
 * @param {Array} props.events - 이벤트 목록 배열 (각 이벤트 객체는 { id, title, address, time, distance, status } 포함)
 * @param {Object} props.currentPosition - 현재 위치 (위도, 경도) 객체 { lat, lng }
 * @returns {JSX.Element} MeetupMap 컴포넌트
 */
const MeetupMap = ({ events, currentPosition }) => {
  return (
    <Container>
        
      {/* 지도 영역 */}
      <MapContainer>
        <Map
          center={currentPosition}
          style={{ width: "100%", height: "100%" }}
          level={5}
        >
          {events.map((event) => (
            <MapMarker
              key={event.id}
              position={event.position}
              clickable
            >
              <MarkerInfo>
                <strong>{event.title}</strong>
                <p>{event.time}</p>
              </MarkerInfo>
            </MapMarker>
          ))}
        </Map>
      </MapContainer>

      {/* 하단 리스트 영역 */}
      <EventList>
        {events.map((event) => (
          <EventCard key={event.id}>
            <EventTitle>
              <span>{event.status === "진행중" ? "🟢" : "🔴"}</span> {event.title}
            </EventTitle>
            <EventInfo>
              <p>{event.address}</p>
              <p>{event.time}</p>
              <p>{`+${event.distance} km`}</p>
            </EventInfo>
          </EventCard>
        ))}
      </EventList>
    </Container>
  );
};

export default MeetupMap;

const Container = styled.div`
  width: 100%;
  height: 100vh; /* 뷰포트 전체 높이를 설정 */
  display: flex;
  flex-direction: column;
`;

const MapContainer = styled.div`
  flex: 1;
  height: 60%;
`;

const EventList = styled.div`
  flex: 0.4;
  padding: 10px;
  background-color: #fff;
  overflow-y: auto;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
`;

const EventCard = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
`;

const EventTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  display: flex;
  align-items: center;

  span {
    margin-right: 8px;
  }
`;

const EventInfo = styled.div`
  font-size: 14px;
  color: #666;

  p {
    margin: 2px 0;
  }
`;

const MarkerInfo = styled.div`
  font-size: 12px;
  background-color: white;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  strong {
    display: block;
    font-size: 14px;
    margin-bottom: 3px;
  }
`;
