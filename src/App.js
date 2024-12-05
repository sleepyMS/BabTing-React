import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import GlobalStyles from "./GlobalStyles";
import MeetingManagement from "./pages/MeetingManagement";
import UnivCertForm from "./pages/UnivCertForm";
import MeetupMap from "./pages/MeetupMap";
import { events, currentPosition } from "./data/MeetupMapData";
import ApiTester from "./pages/ApiTester";
import TeamCreation from "./pages/TeamCreation";
import ChatRoom from "./pages/ChatRoom";
import EditTimeTablePage from "./pages/EditTimeTablePage";
import TimeTablePage from "./pages/TimeTablePage";
import CommunityMain from "./pages/community/CommunityMain";
import MeetingBoard from "./pages/community/MeetingBoard";
import Reviews from "./pages/community/Reviews";
import Board from "./pages/community/Board";
import ReviewWrite from "./pages/community/ReviewWrite";
import MyPageInfo from "./pages/MyPageInfo";
import MyPage from "./pages/MyPage";
import RecommendedMeetings from "./pages/community/RecommendedMeetings";
import MeetingDetails from "./pages/community/MeetingDetails";

function App({history }) {
  const handleSuccess = () => {
    alert("회원가입 완료");
    window.location.href = "/login";
  };

  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/test/api" element={<ApiTester />} />
          {/* ===TEST==== */}

          <Route
            path="/univform"
            element={<UnivCertForm onSuccess={handleSuccess} />}
          />
          <Route path="/login/" element={<Login />} />
          <Route path="/signup/*" element={<SignUp />} />

          <Route path="/user/timetable" element={<TimeTablePage />} />
          <Route path="/user/timetable/edit" element={<EditTimeTablePage />} />

          <Route path="/chat/*" element={<MeetingManagement />} />
          <Route
            path="/meetupmap"
            element={
              <MeetupMap events={events} currentPosition={currentPosition} />
            }
          />
          <Route path="/team/creation" element={<TeamCreation />} />
          <Route path="/chatroom" element={<ChatRoom />} />
          <Route path="/community/main" element={<CommunityMain />} />
          <Route path="/community/meetings" element={<MeetingBoard />} />
          <Route
            path="/community/meetings/:meetingId"
            element={<MeetingDetails />}
          />
          <Route
            path="/community/meetings/magic"
            element={<RecommendedMeetings />}
          />
          <Route path="/community/board" element={<Board />} />
          <Route path="/community/reviews" element={<Reviews />} />
          <Route path="/community/reviewWrite" element={<ReviewWrite />} />
          <Route path="/mypage/info" element={<MyPage />} />
          <Route path="/mypage" element={<MyPageInfo />} />

          {/* <Route path="/search/detail/*" element={<SearchDetail />} />
          <Route path="/replay/detail/*" element={<ReplayDetail />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
