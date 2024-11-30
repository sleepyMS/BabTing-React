import React, { useState } from "react";
import styled from "styled-components";

const ReviewWrite = () => {
  const [reviewText, setReviewText] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    if (reviewText) {
      alert("리뷰가 작성되었습니다!");
    } else {
      alert("리뷰 내용을 입력해주세요.");
    }
  };

  return (
    <Container>
      <Header>리뷰 작성</Header>
      <TextArea
        placeholder="리뷰를 입력하세요..."
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <ImageUpload>
        <input type="file" onChange={handleImageUpload} />
        {image && <ImagePreview src={image} alt="업로드된 이미지" />}
      </ImageUpload>
      <SubmitButton onClick={handleSubmit}>작성 완료</SubmitButton>
    </Container>
  );
};

export default ReviewWrite;

// 스타일 정의
const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const ImageUpload = styled.div`
  margin-bottom: 20px;
`;

const ImagePreview = styled.img`
  width: 100%;
  margin-top: 10px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
