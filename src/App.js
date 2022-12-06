import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { ProductOne } from "./components/ProductOne";
import Shop from "./components/Shop";

function App() {
  return (
    <div className="App">
      <h1>Plan+Flow</h1>
      <p>Digitally plan your day.</p>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product-one" element={<ProductOne />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
