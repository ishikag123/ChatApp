//import logo from "./logo.svg";
//import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { ChatBox } from "./Components/Chat/ChatBox";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatBox />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
