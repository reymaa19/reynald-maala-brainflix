import "./VideoContent.scss";
import Comments from "../Comments/Comments.jsx";
import Stat from "../Stat/Stat.jsx";

const VideoContent = ({ currentVideo }) => {
    const { title, channel, timestamp, views, likes, description, comments } =
        currentVideo;

    return (
        <section className="video-content">
            <h1 className="video-content__title">{title}</h1>
            <div className="video-content__stats">
                <div className="video-content__container">
                    <h4 className="video-content__channel">by {channel}</h4>
                    <Stat stat={timestamp} variant="timestamp" />
                </div>
                <div className="video-content__container">
                    <Stat stat={views} variant="views" />
                    <Stat stat={likes} variant="likes" />
                </div>
            </div>
            <p className="video-content__description">{description}</p>
            <Comments comments={comments} />
        </section>
    );
};

export default VideoContent;
