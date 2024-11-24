import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const loadKakaoMapScript = () => {
  const kakaoScript = document.createElement("script");
  //dapi.kakao.com/v2/maps/sdk.js?appkey=%REACT_APP_KAKAO_API_KEY%&libraries=services
  kakaoScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_KEY}&libraries=services`;
  kakaoScript.async = true;
  document.head.appendChild(kakaoScript);
};

loadKakaoMapScript(); // Kakao Maps API 스크립트를 동적으로 로드
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
