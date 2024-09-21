import Stat from "../Stat/Stat.jsx";

const Video = ({ video }) => {
    const { image, title, channel, timestamp, views, likes, description } =
        video;

    return (
        <section className="video">
            <div className="video__wrapper">
                <video
                    className="video__player"
                    controls
                    poster={image}
                    src=""
                ></video>
            </div>
            <div className="video__content">
                <h1 className="video__title">{title}</h1>
                <div className="video__stats">
                    <div className="video__container">
                        <h4 className="video__channel">by {channel}</h4>
                        <Stat stat={timestamp} variant="timestamp" />
                    </div>
                    <div className="video__container">
                        <Stat stat={views} variant="views" />
                        <Stat stat={likes} variant="likes" />
                    </div>
                </div>
                <p className="video__description">{description}</p>
            </div>
        </section>
    );
};

export default Video;
