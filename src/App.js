import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Dashboard from "./Pages/Dashboard.js";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/contact" />
        <Route path="/certsandrecs" />
        <Route path="/resume" />
        <Route path="/projects" />
      </Routes>
    </Router>
  );
}

export default App;
