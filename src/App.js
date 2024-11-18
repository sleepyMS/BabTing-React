import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import GlobalStyles from "./GlobalStyles";
import MeetingManagement from "./pages/MeetingManagement";

function App() {
  return <div className="App">
    <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/login/" element={<Login />} />
          <Route path="/signup/*" element={<SignUp />} />
          <Route path="/meeting/*" element={<MeetingManagement />} />
          {/* <Route path="/search/detail/*" element={<SearchDetail />} />
          <Route path="/replay/detail/*" element={<ReplayDetail />} /> */}
        </Routes>
      </BrowserRouter>
  </div>;
}

export default App;
