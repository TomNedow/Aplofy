import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Example placeholders for future pages */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/timeoff" element={<TimeOffForm />} /> */}
      </Routes>
    </Router>
  );
}

export default App;