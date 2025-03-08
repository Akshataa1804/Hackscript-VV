import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Summary from "./components/Summary";
import Specifications from "./components/Specifications";
import History from "./components/History";
import Test from "./components/Test";
function App() {
  return (
    <Router>
      <div className="flex bg-gradient-to-r from-purple-800 to-pink-600 text-white min-h-screen">
        <Navbar />
        <div className="flex-1 ml-64 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/specifications" element={<Specifications />} />
            <Route path="/history" element={<History />} />
            <Route path="/test" element = {<Test />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
