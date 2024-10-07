import { useState, useEffect, useRef } from "react";
import { formatTime } from "../../utils/utils.js";
import "./VideoPlayer.scss";

const VideoPlayer = ({ video: data }) => {
    const videoRef = useRef();
    const progressRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const video = videoRef.current;

        const updateProgress = () => {
            setCurrentTime(video.currentTime);
            setProgress((video.currentTime / video.duration) * 100);
        };

        video.addEventListener("timeupdate", updateProgress);
        video.addEventListener("loadedmetadata", () => setDuration(video.duration));

        return () => video.removeEventListener("timeupdate", updateProgress);
    }, []);

    const togglePlay = () => {
        if (isPlaying) videoRef.current.pause();
        else videoRef.current.play();

        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    const handleProgressChange = (e) => {
        const newTime = (e.target.value / 100) * videoRef.current.duration;
        videoRef.current.currentTime = newTime;
        setProgress(e.target.value);
    };

    return (
        <div className="video-player">
            <video ref={videoRef} className="video-player__video" poster={data.image}>
                <source src={data.video} type="video/mp4" />
            </video>
            <div className="video-player__controls">
                <div className="video-player__container">
                    <button
                        className={`video-player__button video-player__button--${isPlaying ? "pause" : "play"}`}
                        onClick={togglePlay}
                    />
                </div>
                <div className="video-player__container video-player__container--progress">
                    <input
                        ref={progressRef}
                        type="range"
                        className="video-player__progress"
                        value={progress}
                        onChange={handleProgressChange}
                    />
                    <div className="video-player__time">
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                </div>
                <div className="video-player__container">
                    <button
                        className="video-player__button video-player__button--fullscreen"
                        onClick={() => videoRef.current.requestFullscreen()}
                    />
                    <button
                        className={`video-player__button video-player__button--volume-${!isMuted ? "up" : "off"}`}
                        onClick={toggleMute}
                    />
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
