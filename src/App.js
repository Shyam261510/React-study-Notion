import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
function App() {
  const [isLogin, setISLogin] = useState(false);
  return (
    <div className="App">
      <div className="w-screen h-[100vh] bg-[#000814] overflow-x-hidden font-[Inter, sans-serif] p-2">
        <Navbar isLogin={isLogin} setISLogin={setISLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup setISLogin={setISLogin} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login setISLogin={setISLogin} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
