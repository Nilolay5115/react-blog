import Topbar from "./components/topbar/Topbar";
import Home from "./pades/home/Home";
import Login from "./pades/login/Login";
import Register from "./pades/register/Register";
import Settings from "./pades/settings/Settings";
import Single from "./pades/single/Single";
import Write from "./pades/write/Write";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <Topbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> :<Register />} />
        <Route path="/login" element={user ? <Home /> :<Login />} />
        <Route path="/write" element={user ? <Write /> :<Register />} />
        <Route path="/settings" element={user ? <Settings /> :<Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
