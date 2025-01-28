import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Notes from "./pages/Notes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Notes />} />
      </Routes>
    </Router>
  );
}

export default App;
