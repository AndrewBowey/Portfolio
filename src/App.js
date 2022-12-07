import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Dashboard from "./Pages/Dashboard.js";
import NavBar from "./Components/Navbar";
import Pdf from "./Pages/Pdf";
import Projects from "./Pages/Projects";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/resume" element={<Pdf />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
