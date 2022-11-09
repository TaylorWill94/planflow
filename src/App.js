import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <h1>Plan+Flow</h1>
      <p>Digitally plan your day.</p>
      <Nav />
      <Home />
    </div>
  );
}

export default App;
