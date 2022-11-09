import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <h1>Plan+Flow</h1>
      <p>Digitally plan your day.</p>
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
