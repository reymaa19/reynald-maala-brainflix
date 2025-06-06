import "./NextVideos.scss";
import NextVideo from "../NextVideo/NextVideo.jsx";

const NextVideos = ({ nextVideos }) => {
    return (
        <aside className="next-videos">
            <h3 className="next-videos__header">NEXT VIDEOS</h3>
            <ul className="next-videos__list">
                {nextVideos.map((nextVideo) => (
                    <NextVideo key={nextVideo.id} nextVideo={nextVideo} />
                ))}
            </ul>
        </aside>
    );
};

export default NextVideos;
