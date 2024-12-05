// TeamCreation.js
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaSearch } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import {
  FaUtensils,
  FaCoffee,
  FaRunning,
  FaFilm,
  FaPlane,
  FaBook,
  FaSmile,
  FaComments,
} from "react-icons/fa"; // 필요한 아이콘 추가

const steps = ["활동 선택", "날짜 선택", "장소 선택", "모임 구성", "정보 확인"];

const TeamCreation = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    activity: "",
    date: "",
    location: "",
    groupSize: "",
  });

  const activities = [
    { name: "식사", icon: <FaUtensils /> },
    { name: "커피", icon: <FaCoffee /> },
    { name: "운동", icon: <FaRunning /> },
    { name: "관람", icon: <FaFilm /> },
    { name: "여행", icon: <FaPlane /> },
    { name: "스터디", icon: <FaBook /> },
    { name: "놀기", icon: <FaSmile /> },
    { name: "일상대화", icon: <FaComments /> },
  ];
  const locations = [
    "용인시 블랙탑커피",
    "부산광역시 블랙탑",
    "강원특별자치도 강릉시 교동 번지 2층 블랙탑",
  ];

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => {
    if (step === 1 && !formData.activity) return alert("활동을 선택해주세요!");
    if (step === 2 && !formData.date) return alert("날짜를 선택해주세요!");
    if (step === 3 && !formData.location) return alert("장소를 선택해주세요!");
    if (step === 4 && !formData.groupSize)
      return alert("모임 구성을 선택해주세요!");
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const navigate = useNavigate();

  const handleCreateMeeting = () => {
    // 필요한 경우 서버와 통신하여 맛남을 생성하는 로직을 추가할 수 있습니다.
    // 여기서는 단순히 채팅방으로 이동합니다.
    navigate("/chatroom", { state: { formData } });
  };

  return (
    <Container>
      <ProgressBar>
        {steps.map((item, index) => (
          <ProgressStep key={index} active={index < step}>
            {index < step - 1 ? <FiCheckCircle /> : index + 1}
            <span>{item}</span>
          </ProgressStep>
        ))}
      </ProgressBar>
      {step === 1 && (
        <FadeIn>
          <Header>맛남 만들기</Header>
          <Title>함께 무엇을 할까요?</Title>
          <Options>
            {activities.map((activity, index) => (
              <Option
                key={index}
                onClick={() => handleChange("activity", activity.name)}
                selected={formData.activity === activity.name}
              >
                <Placeholder>{activity.icon}</Placeholder> {/* 아이콘 표시 */}
                <OptionText>{activity.name}</OptionText>
              </Option>
            ))}
          </Options>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={nextStep} disabled={!formData.activity}>
              다음
            </Button>
          </div>
        </FadeIn>
      )}
      {step === 2 && (
        <FadeIn>
          <Header>맛남 만들기</Header>
          <Title>언제가 편하세요?</Title>
          <Calendar>
            <input
              type="date"
              onChange={(e) => handleChange("date", e.target.value)}
            />
          </Calendar>
          <ButtonGroup>
            <BackButton onClick={prevStep}>이전</BackButton>
            <NextButton onClick={nextStep} disabled={!formData.date}>
              다음
            </NextButton>
          </ButtonGroup>
        </FadeIn>
      )}
      {step === 3 && (
        <FadeIn>
          <Header>맛남 만들기</Header>
          <Title>어디가 좋을까요?</Title>
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="장소를 검색하세요"
              onChange={(e) => handleChange("location", e.target.value)}
            />
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
          </SearchContainer>
          <Locations>
            {locations.map((location, index) => (
              <Location
                key={index}
                onClick={() => handleChange("location", location)}
                selected={formData.location === location}
              >
                {location}
              </Location>
            ))}
          </Locations>
          <ButtonGroup>
            <BackButton onClick={prevStep}>이전</BackButton>
            <NextButton onClick={nextStep} disabled={!formData.location}>
              다음
            </NextButton>
          </ButtonGroup>
        </FadeIn>
      )}
      {step === 4 && (
        <FadeIn>
          <Header>맛남 만들기</Header>
          <Title>어떻게 모이는게 편하세요?</Title>
          <Options>
            <Option
              onClick={() => handleChange("groupSize", "여러 명")}
              selected={formData.groupSize === "여러 명"}
            >
              <Placeholder>👥</Placeholder>
              <OptionText>여러 명</OptionText>
              <OptionSubText>최대 10명까지 모집할 수 있어요!</OptionSubText>
            </Option>
            <Option
              onClick={() => handleChange("groupSize", "한 명")}
              selected={formData.groupSize === "한 명"}
            >
              <Placeholder>👤</Placeholder>
              <OptionText>한 명</OptionText>
              <OptionSubText>
                한 명만 모집해서 나와 1:1로 진행해요!
              </OptionSubText>
            </Option>
          </Options>
          <ButtonGroup>
            <BackButton onClick={prevStep}>이전</BackButton>
            <NextButton onClick={nextStep} disabled={!formData.groupSize}>
              다음
            </NextButton>
          </ButtonGroup>
        </FadeIn>
      )}
      {step === 5 && (
        <FadeIn>
          <Header>맛남 정보 확인</Header>
          <Summary>
            <SummaryItem>
              <Label>카테고리</Label>
              <Value>{formData.activity}</Value>
            </SummaryItem>
            <SummaryItem>
              <Label>일정</Label>
              <Value>{formData.date}</Value>
            </SummaryItem>
            <SummaryItem>
              <Label>장소</Label>
              <Value>{formData.location}</Value>
            </SummaryItem>
            <SummaryItem>
              <Label>모임 구성</Label>
              <Value>{formData.groupSize}</Value>
            </SummaryItem>
          </Summary>
          <ButtonGroup>
            <BackButton onClick={prevStep}>이전</BackButton>
            <Button onClick={handleCreateMeeting}>맛남 만들기</Button>
          </ButtonGroup>
        </FadeIn>
      )}
    </Container>
  );
};

export default TeamCreation;

// 스타일 컴포넌트 및 애니메이션 정의

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const FadeIn = styled.div`
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Container = styled.div`
  padding: 20px;
  max-width: 480px;
  margin: 0 auto;
  background-color: #f9fafb;
  border-radius: 8px;
`;

const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ProgressStep = styled.div`
  flex: 1;
  text-align: center;
  position: relative;
  color: ${(props) => (props.active ? "#4f46e5" : "#d1d5db")};

  &::before {
    content: "";
    position: absolute;
    top: 12px;
    left: 50%;
    width: 100%;
    height: 2px;
    background-color: ${(props) => (props.active ? "#4f46e5" : "#d1d5db")};
    z-index: -1;
  }

  &:first-child::before {
    display: none;
  }

  svg {
    font-size: 24px;
  }

  span {
    display: block;
    margin-top: 8px;
    font-size: 12px;
  }
`;

const Header = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 20px;
  color: #374151;
  margin-bottom: 20px;
  text-align: center;
`;

const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

const Option = styled.div`
  width: 140px;
  margin: 10px;
  text-align: center;
  cursor: pointer;
  border: ${(props) =>
    props.selected ? "2px solid #4f46e5" : "1px solid #e5e7eb"};
  border-radius: 12px;
  padding: 20px;
  background-color: ${(props) => (props.selected ? "#eef2ff" : "#ffffff")};
  transition: all 0.3s ease;

  &:hover {
    border-color: #4f46e5;
  }
`;

const Placeholder = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;

const OptionText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #374151;
  margin-bottom: 5px;
`;

const OptionSubText = styled.p`
  font-size: 12px;
  color: #6b7280;
`;

const Calendar = styled.div`
  margin: 20px 0;

  input {
    width: 93%;
    padding: 15px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-size: 16px;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 85%;
  padding: 15px 50px 15px 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 15px;
  color: #9ca3af;
  font-size: 20px;
`;

const Locations = styled.div`
  max-height: 200px;
  overflow-y: auto;
  border-top: 1px solid #e5e7eb;
`;

const Location = styled.div`
  padding: 15px;
  border-bottom: 1px solid #e5e7eb;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#eef2ff" : "#ffffff")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f3f4f6;
  }
`;

const Summary = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Label = styled.span`
  font-weight: bold;
  color: #374151;
`;

const Value = styled.span`
  color: #4b5563;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const BackButton = styled.button`
  width: 48%;
  padding: 15px;
  background-color: #e5e7eb;
  color: #374151;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #d1d5db;
  }
`;

const NextButton = styled.button`
  width: 48%;
  padding: 15px;
  background-color: ${(props) => (props.disabled ? "#e5e7eb" : "#4f46e5")};
  color: ${(props) => (props.disabled ? "#9ca3af" : "#ffffff")};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#e5e7eb" : "#4338ca")};
  }
`;

const Button = styled.button`
  width: 48%;
  padding: 15px;
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #4338ca;
  }
`;
