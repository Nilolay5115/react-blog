import Topbar from "./components/topbar/Topbar";
import Home from "./pades/home/Home";
import Login from "./pades/login/Login";
import Register from "./pades/register/Register";
import Settings from "./pades/settings/Settings";
import Single from "./pades/single/Single";
import Write from "./pades/write/Write";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
