// src/pages/community/Reviews.js

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaThumbsUp, FaCommentDots, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import users from "../../data/users"; // 데이터 파일 경로에 맞게 수정하세요

const Reviews = () => {
  const [sortBy, setSortBy] = useState("recent");
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 모든 유저의 리뷰 수집
    const allReviews = users.flatMap((user) =>
      user.reviews
        ? user.reviews.map((review) => ({
            ...review,
            userName: user.name,
            userProfileImage:
              user.profileImage || "https://via.placeholder.com/50",
            likes: review.likes || 0,
            comments: review.comments || [],
            date: review.date || "2024-11-25",
          }))
        : []
    );

    setReviews(allReviews);
  }, []);

  const sortedReviews =
    sortBy === "recent"
      ? [...reviews].sort((a, b) => new Date(b.date) - new Date(a.date))
      : [...reviews].sort((a, b) => b.likes - a.likes);

  const backHandler = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={backHandler}>
          <FaArrowLeft />
        </BackButton>
        <Title>맛집 리뷰</Title>
        <SortContainer>
          <SortButton
            active={sortBy === "recent"}
            onClick={() => setSortBy("recent")}
          >
            최신순
          </SortButton>
          <SortButton
            active={sortBy === "popular"}
            onClick={() => setSortBy("popular")}
          >
            인기순
          </SortButton>
        </SortContainer>
      </Header>
      <List>
        {sortedReviews.map((review, index) => (
          <ListItem key={index}>
            <Thumbnail src={review.userProfileImage} alt="User Avatar" />
            <Content>
              <ReviewTitle>{review.title}</ReviewTitle>
              <Description>{review.content}</Description>
              <Meta>
                <UserName>{review.userName}</UserName>
                <Divider>|</Divider>
                <DateText>{review.date}</DateText>
              </Meta>
              <Actions>
                <ActionItem>
                  <FaThumbsUp /> {review.likes}
                </ActionItem>
                <ActionItem>
                  <FaCommentDots /> {review.comments.length}
                </ActionItem>
              </Actions>
            </Content>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Reviews;

// 스타일 정의
const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #007bff;
  cursor: pointer;
  margin-right: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  flex: 1;
`;

const SortContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const SortButton = styled.button`
  background-color: ${(props) => (props.active ? "#007bff" : "#eee")};
  color: ${(props) => (props.active ? "white" : "#666")};
  padding: 6px 12px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${(props) => (props.active ? "#0056b3" : "#d4d4d4")};
  }
`;

const List = styled.div`
  margin-top: 15px;
`;

const ListItem = styled.div`
  display: flex;
  padding: 15px;
  border-bottom: 1px solid #eee;
`;

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

const Content = styled.div`
  flex: 1;
`;

const ReviewTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const Description = styled.div`
  font-size: 16px;
  margin: 10px 0;
  color: #555;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #777;
`;

const UserName = styled.span``;

const DateText = styled.span``;

const Divider = styled.span`
  margin: 0 5px;
`;

const Actions = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const ActionItem = styled.div`
  display: flex;
  align-items: center;
  color: #555;
  font-size: 14px;

  svg {
    margin-right: 5px;
  }
`;
