import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaSearch, FaPen, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import users from "../../data/users"; // 데이터 파일 경로에 맞게 수정하세요

const Board = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [sortOption, setSortOption] = useState("latest");
  const navigate = useNavigate();

  useEffect(() => {
    // 모든 유저의 게시글 수집
    const allPosts = users.flatMap((user) =>
      user.myPosts.map((post) => ({
        ...post,
        userName: user.name,
        date: post.date || "2024-11-25", // 날짜가 없을 경우 기본값 사용
        commentsCount: post.comments ? post.comments.length : 0,
        likes: post.likes || 0,
      }))
    );

    // 게시글을 정렬
    const sortedPosts = sortPosts(allPosts, sortOption);
    setPosts(sortedPosts);
  }, [sortOption]);

  const sortPosts = (postsArray, option) => {
    let sorted = [...postsArray];
    if (option === "latest") {
      sorted.sort((a, b) => new window.Date(b.date) - new window.Date(a.date));
    } else if (option === "popular") {
      sorted.sort((a, b) => b.likes - a.likes);
    }
    return sorted;
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const writeHandler = () => {
    navigate("/community/write");
  };

  const postClickHandler = (postId) => {
    navigate(`/community/post/${postId}`);
  };

  const backHandler = () => {
    navigate(-1); // 이전 페이지로 이동
  };
  return (
    <Container>
      <Header>
        <div style={{ display: "flex" }}>
          <BackButton onClick={backHandler}>
            <FaArrowLeft />
          </BackButton>
          <Title>자유게시판</Title>
        </div>

        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="검색어를 입력하세요"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
        </SearchContainer>
      </Header>

      <SortOptions>
        <SortButton
          active={sortOption === "latest"}
          onClick={() => setSortOption("latest")}
        >
          최신순
        </SortButton>
        <SortButton
          active={sortOption === "popular"}
          onClick={() => setSortOption("popular")}
        >
          인기순
        </SortButton>
      </SortOptions>

      <List>
        {filteredPosts.map((post, index) => (
          <ListItem key={index} onClick={() => postClickHandler(post.id)}>
            <PostTitle>{post.title}</PostTitle>
            <PostInfo>
              <UserName>{post.userName}</UserName>
              <Divider>|</Divider>
              <DateText>{post.date}</DateText>
              <Divider>|</Divider>
              <Likes>좋아요 {post.likes}</Likes>
              <Divider>|</Divider>
              <Comments>댓글 {post.commentsCount}</Comments>
            </PostInfo>
          </ListItem>
        ))}
      </List>
      <WriteButton onClick={writeHandler}>
        <FaPen /> 글쓰기
      </WriteButton>
    </Container>
  );
};

export default Board;

// 스타일 정의
const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-bottom: 10px;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 85%;
  padding: 12px 40px 12px 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  color: #888;
`;

const SortOptions = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const SortButton = styled.button`
  background-color: ${(props) => (props.active ? "#007bff" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#007bff")};
  border: 1px solid #007bff;
  border-radius: 20px;
  padding: 6px 12px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.active ? "#0056b3" : "#e6f0ff")};
  }
`;

const List = styled.div`
  margin-top: 15px;
`;

const ListItem = styled.div`
  padding: 15px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
`;

const PostTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const PostInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-size: 14px;
  color: #777;
`;

const UserName = styled.span``;

const DateText = styled.span``;

const Likes = styled.span``;

const Comments = styled.span``;

const Divider = styled.span`
  margin: 0 5px;
`;

const WriteButton = styled.button`
  position: fixed;
  bottom: 80px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
