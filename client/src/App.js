import { io } from "socket.io-client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { ChatBox } from "./Components/Chat/ChatBox";

const socket = io("https://chat-buzz.onrender.com/");

function App() {
  // const socket = useRef();

  // useEffect(() => {
  //   socket.current = io("ws://localhost:9000");
  // }, []);

  return (
    <div className="App">
      {/* <AccountProvider> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatBox socket={socket} />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Router>
      {/* </AccountProvider> */}
    </div>
  );
}

export default App;
