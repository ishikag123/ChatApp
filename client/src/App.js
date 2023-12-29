//import logo from "./logo.svg";
//import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { ChatBox } from "./Components/Chat/ChatBox";
import { AccountProvider } from "./Context/AccountProvider";

function App() {
  return (
    <div className="App">
      <AccountProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<ChatBox />} />
          </Routes>
        </Router>
      </AccountProvider>
    </div>
  );
}

export default App;
