import "./VideoPlayer.scss";

const Video = ({ video }) => {
    const { image } = video;

    return (
        <div className="video-player">
            <video
                className="video-player__video"
                controls
                poster={image}
                src="#"
            ></video>
        </div>
    );
};

export default Video;
