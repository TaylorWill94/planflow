import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <h1>Plan+Flow</h1>
      <p>Digitally plan your day.</p>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/impact" element={"IMPACT"} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
