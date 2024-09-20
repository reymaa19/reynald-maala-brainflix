import Header from "./components/Header/Header.jsx";
import videoDetails from './data/video-details.json'
import "./App.scss";

const App = () => {
  console.log(videoDetails);

  return (
    <>
      <Header />
      <main>
        <section className="video">
          <video className="video__player" controls poster={videoDetails[0].image} src=""></video>
        </section>
      </main>
    </>
  );
};

export default App;
