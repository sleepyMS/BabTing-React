import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoHomeOutline, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BiMap, BiUserCircle } from "react-icons/bi";
import users from "../../data/users"; // 데이터 파일 경로에 맞게 수정하세요

const CommunityMain = () => {
  const navigate = useNavigate();
  const [meetings, setMeetings] = useState([]);
  const [posts, setPosts] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // 모든 유저의 meetings 수집
    const allMeetings = users.flatMap((user) =>
      user.meetings.map((meeting) => ({
        ...meeting,
        organizer: user.name,
        userProfileImage:
          user.profileImage || "https://via.placeholder.com/50x50",
      }))
    );

    // meetings를 날짜순으로 정렬 (최신순)
    allMeetings.sort((a, b) => new Date(b.date) - new Date(a.date));
    setMeetings(allMeetings);

    // 모든 유저의 게시글 수집
    const allPosts = users.flatMap((user) =>
      user.myPosts.map((post) => ({
        ...post,
        userName: user.name,
        userId: user.id,
        userProfileImage:
          user.profileImage || "https://via.placeholder.com/50x50",
        date: post.date || "2024-11-25", // 날짜가 없을 경우 기본값 사용
      }))
    );

    // 게시글을 날짜순으로 정렬 (최신순)
    allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    setPosts(allPosts);

    // 모든 유저의 리뷰 수집
    const allReviews = users.flatMap((user) =>
      user.reviews
        ? user.reviews.map((review) => ({
            ...review,
            userName: user.name,
            userId: user.id,
            userProfileImage:
              user.profileImage || "https://via.placeholder.com/50x50",
          }))
        : []
    );

    // 리뷰를 날짜순으로 정렬 (최신순)
    allReviews.sort((a, b) => new Date(b.date) - new Date(a.date));
    setReviews(allReviews);
  }, []);

  return (
    <Container>
      <Header>커뮤니티</Header>

      {/* 맛남 게시판 섹션 */}
      <Section>
        <SectionHeader>
          <SectionTitle onClick={() => navigate("/community/meetings")}>
            맛남 게시판
          </SectionTitle>
          <div onClick={() => navigate("/community/meetings/magic")}>
            <Icon>★</Icon>
          </div>
        </SectionHeader>
        <List>
          {meetings.slice(0, 5).map((meeting) => (
            <ListItem key={meeting.id}>
              <Thumbnail src={meeting.userProfileImage} />
              <Content>
                <Title>{meeting.title}</Title>
                <Description>
                  활동: {meeting.activity} | 날짜: {meeting.date}
                </Description>
                <Description>장소: {meeting.location}</Description>
                <Description>
                  모임 구성: {meeting.groupSize} | 참여인원:{" "}
                  {meeting.participants.length}/{meeting.maxParticipants}
                </Description>
              </Content>
            </ListItem>
          ))}
        </List>
      </Section>

      {/* 커뮤니티 게시판 섹션 */}
      <Section>
        <SectionHeader>
          <SectionTitle onClick={() => navigate("/community/board")}>
            커뮤니티 게시판
          </SectionTitle>
          <Icon>›</Icon>
        </SectionHeader>
        <List>
          {posts.slice(0, 5).map((post) => (
            <ListItem key={post.id}>
              <Thumbnail src={post.userProfileImage} />
              <Content>
                <Title>{post.title}</Title>
                <SubText>{post.userName}</SubText>
                <Description>{post.date}</Description>
              </Content>
            </ListItem>
          ))}
        </List>
      </Section>

      {/* 최근 맛집 리뷰 섹션 */}
      <Section>
        <SectionHeader>
          <SectionTitle onClick={() => navigate("/community/reviews")}>
            최근 맛집 리뷰
          </SectionTitle>
          <Icon>›</Icon>
        </SectionHeader>
        <List>
          {reviews.slice(0, 5).map((review, index) => (
            <ReviewItem key={index}>
              <Thumbnail src={review.userProfileImage} />
              <Content>
                <Title>{review.title}</Title>
                <SubText>{review.userName}</SubText>
                <Description>{review.content}</Description>
                <Rating>{review.rating}</Rating>
              </Content>
            </ReviewItem>
          ))}
        </List>
      </Section>

      {/* 네비게이션 바 */}
      <NavBar>
        <NavItem onClick={() => navigate("/community/main")} active>
          <IoHomeOutline size={20} />
          <NavText>홈</NavText>
        </NavItem>
        <NavItem onClick={() => navigate("/meetupmap")}>
          <BiMap size={20} />
          <NavText>캠퍼스 지도</NavText>
        </NavItem>
        <NavItem onClick={() => navigate("/chat")}>
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

export default CommunityMain;

// 스타일 정의

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
  min-height: 100vh;
`;

const Header = styled.div`
  padding: 15px 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
`;

const Section = styled.div`
  padding: 20px;
  background-color: #ffffff;
  margin-bottom: 10px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

const Icon = styled.span`
  font-size: 30px;
  transform: translateY(-10%);
  color: #6b7280;
`;

const List = styled.div`
  margin-top: 10px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-right: 15px;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #1f2937;
`;

const SubText = styled.div`
  font-size: 14px;
  color: #4b5563;
  margin-top: 2px;
`;

const Description = styled.div`
  font-size: 12px;
  color: #6b7280;
  margin-top: 3px;
`;

const ReviewItem = styled(ListItem)``;

const Rating = styled.div`
  font-size: 14px;
  color: #fbbf24;
  margin-top: 5px;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  background-color: #ffffff;
  border-top: 1px solid #e5e7eb;
  position: sticky;
  bottom: 0;
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
