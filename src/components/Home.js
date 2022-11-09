import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h2>Home</h2>
      <div className="mainSec">
        <span>
          Welcome to Plan+Flow
          <br />
          Build your life.
          <br />
          Organize your life
          <br />
          Plan+Flow
        </span>
      </div>
      <div className="subSection">
        <p className="subTitle">
          The digital planner to help you organize your life!
        </p>
      </div>
      <div className="lastSec">
        <p className="subTitle">Get Started</p>
      </div>
    </div>
  );
};

export default Home;
