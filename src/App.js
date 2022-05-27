import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./page/About";
import BookCart from "./components/BookCart";
import SumbitRef from "./hw/FormsReactRef";

function App() {
  return (
    <div className="1">
      <div className="App">
        <Routes>
          <Route path="/" element={<SumbitRef />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
