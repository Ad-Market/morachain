import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./screens/Landing";
import Discover from "./screens/Discover";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import NFTs from "./screens/NFTs";
import Staking from "./screens/Staking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/discover" element={<Discover />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Landing />} />
        <Route path="/nfts" element={<NFTs />} />
        <Route path="/staking" element={<Staking />} />
      </Routes>
    </Router>
  );
}

export default App;
