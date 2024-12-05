import React from "react";
import styled from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useNavigate } from "react-router-dom";
import { IoHomeOutline, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BiMap, BiUserCircle } from "react-icons/bi";
/**
 * MeetupMap 컴포넌트 - 지도와 이벤트 목록을 표시
 * @param {Object} props - MeetupMap에 전달되는 props
 * @param {Array} props.events - 이벤트 목록 배열 (각 이벤트 객체는 { id, title, address, time, distance, status } 포함)
 * @param {Object} props.currentPosition - 현재 위치 (위도, 경도) 객체 { lat, lng }
 * @returns {JSX.Element} MeetupMap 컴포넌트
 */
const MeetupMap = ({ events, currentPosition }) => {
  const navigate = useNavigate();
  return (
    <Container>
        
      {/* 지도 영역 */}
      <MapContainer>
        <Map
          center={currentPosition}
          style={{ width: "100%", height: "80%" }}
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
        <Handle />
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

      {/* 네비게이션 바 */}
      <NavBar>
        <NavItem onClick={() => navigate("/community/main")}>
          <IoHomeOutline size={20} />
          <NavText>홈</NavText>
        </NavItem>
        <NavItem onClick={() => navigate("/meetupmap")}active>
          <BiMap size={20} />
          <NavText>캠퍼스 지도</NavText>
        </NavItem>
        <NavItem onClick={() => navigate("/chat")} >
          <IoChatbubbleEllipsesOutline size={20} />
          <NavText>채팅</NavText>
        </NavItem>
        <NavItem onClick={() => navigate("/mypage")}>
          <BiUserCircle size={20} />
          <NavText>마이페이지</NavText>
        </NavItem>
      </NavBar>
    </Container>
  );
};

export default MeetupMap;
const Handle = styled.div`
  width: 50px;
  height: 5px;
  background: #ccc;
  border-radius: 5px;
  margin: 8px auto;
`;
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
position: fixed;
bottom: 65px;
left: 0;
right: 0;
background: white;
border-radius: 20px 20px 0 0;
box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
padding: 16px;
z-index: 1;
animation: slideUp 0.3s ease-out;

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
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
const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  background-color: #ffffff;
  border-top: 1px solid #e5e7eb;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 2;
`;

const NavItem = styled.div`
  text-align: center;
  color: ${(props) => (props.active ? "#4f46e5" : "#6b7280")};
  font-size: 12px;
  cursor: pointer;
`;

const NavText = styled.div`
  margin-top: 5px;
`;