import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Dashboard from "./Pages/Dashboard.js";

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/contact" />
        <Route path="/Certificates and recognition" />
        <Route path="/resume" />
        <Route path="/projects" />
        <Route exact path="/" element={<Dashboard />} />
        <Route element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
