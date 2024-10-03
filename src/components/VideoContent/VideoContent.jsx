import "./VideoContent.scss";
import Comments from "../Comments/Comments.jsx";

const VideoContent = ({ video, onVideoUpdate }) => {
    const { title, channel, timestamp, views, likes, description, comments } = video;

    return (
        <section className="video-content">
            <h1 className="video-content__title">{title}</h1>
            <div className="video-content__stats">
                <div className="video-content__container">
                    <h4 className="video-content__channel">by {channel}</h4>
                    <p className="video-content__stat video-content__stat--timestamp">
                        {new Date(timestamp).toLocaleDateString("es-pa")}
                    </p>
                </div>
                <div className="video-content__container">
                    <p className="video-content__stat video-content__stat--views">{views}</p>
                    <p className="video-content__stat video-content__stat--likes">{likes}</p>
                </div>
            </div>
            <p className="video-content__description">{description}</p>
            <Comments comments={comments} onVideoUpdate={onVideoUpdate} />
        </section>
    );
};

export default VideoContent;
