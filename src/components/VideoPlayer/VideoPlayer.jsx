import "./VideoPlayer.scss";

const Video = ({ currentVideo }) => {
    const { image } = currentVideo;

    return (
        <section className="video-player">
            <video
                className="video-player__video"
                controls
                poster={image}
                src=""
            ></video>
        </section>
    );
};

export default Video;
