import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import GlobalStyles from "./GlobalStyles";
import MeetingManagement from "./pages/MeetingManagement";
import UnivCertForm from "./pages/UnivCertForm";
import MeetupMap from "./pages/MeetupMap";
import { events, currentPosition} from "./data/MeetupMapData";
import ApiTester from "./pages/ApiTester";
import TeamCreation from "./pages/TeamCreation";
import ChatRoom from "./pages/ChatRoom";
import EditTimeTablePage from "./pages/EditTimeTablePage";
import TimeTablePage from "./pages/TimeTablePage";

function App() {
  const handleSuccess = () => {
    alert("인증 성공!");
  };
  
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          
        <Route path="/test/api" element={<ApiTester/>} />
        {/* ===TEST==== */}

        
          <Route path="/univform" element={<UnivCertForm onSuccess={handleSuccess} />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/signup/*" element={<SignUp />} />
          
          <Route path="/user/timetable" element={<TimeTablePage events={[
            { day: "월요일", time: "10:00-12:00", subject: "자료구조" },
            { day: "화요일", time: "14:00-16:00", subject: "운영체제" },
            { day: "수요일", time: "09:00-10:00", subject: "컴퓨터 네트워크" },
            { day: "목요일", time: "13:00-14:00", subject: "데이터베이스" },
            { day: "금요일", time: "11:00-12:00", subject: "소프트웨어 공학" },
          ]} />} />
          <Route path="/user/timetable/edit" element={<EditTimeTablePage  events={[
            { day: "월요일", time: "10:00-12:00", subject: "자료구조" },
            { day: "화요일", time: "14:00-16:00", subject: "운영체제" },
            { day: "수요일", time: "09:00-10:00", subject: "컴퓨터 네트워크" },
            { day: "목요일", time: "13:00-14:00", subject: "데이터베이스" },
            { day: "금요일", time: "11:00-12:00", subject: "소프트웨어 공학" },
          ]}/>} />

          <Route path="/meeting/*" element={<MeetingManagement />} />
          <Route path="/meetupmap" element={<MeetupMap events={events} currentPosition={currentPosition} />} />
          <Route path="/TeamCreation" element={<TeamCreation />} />
          <Route path="/chatroom" element={<ChatRoom />} />
          {/* <Route path="/search/detail/*" element={<SearchDetail />} />
          <Route path="/replay/detail/*" element={<ReplayDetail />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
