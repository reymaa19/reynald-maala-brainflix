import Header from "./components/Header/Header.jsx";
import Stat from "./components/Stat/Stat.jsx";
import videoDetails from "./data/video-details.json";
import "./App.scss";

const App = () => {
  const vid = videoDetails[0]

  return (
    <>
      <Header />
      <main>
        <section className="video">
          <div className="video__wrapper">
            <video className="video__player" controls poster={vid.image} src=""></video>
          </div>
          <div className="video__content">
            <h1 className="video__title">{vid.title}</h1>
            <div className="video__stats">
              <div className="video__container">
                <h4 className="video__channel">by {vid.channel}</h4>
                <Stat stat={vid.timestamp} variant="timestamp" />
              </div>
              <div className="video__container">
                <Stat stat={vid.views} variant="views" />
                <Stat stat={vid.likes} variant="likes" />
              </div>
            </div>
            <p className="video__description">{vid.description}</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
