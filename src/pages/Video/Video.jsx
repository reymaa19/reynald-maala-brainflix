import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer.jsx";
import VideoContent from "../../components/VideoContent/VideoContent.jsx";
import NextVideos from "../../components/NextVideos/NextVideos.jsx";
import videosApi from "../../services/api.js";
import "./Video.scss";

const Video = () => {
    const { videoId } = useParams();
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState({});

    useEffect(() => {
        const fetchVideos = async () => {
            const videosData = await videosApi.getVideos();
            const videoData = await videosApi.getVideo(videosData[0].id);

            setVideos(videosData);
            setCurrentVideo(videoData);
        };

        fetchVideos();
    }, []);

    useEffect(() => {
        const fetchNewVideo = async () => {
            if (videoId) {
                const newVideoData = await videosApi.getVideo(videoId);
                setCurrentVideo(newVideoData);
            }
        };

        fetchNewVideo();
    }, [videoId]);

    const nextVideos = videos.filter(({ id }) => id !== currentVideo.id);

    return (
        <main className="main">
            {videos.length > 0 && (
                <>
                    <VideoPlayer currentVideo={currentVideo} />
                    <div className="main__wrapper">
                        <VideoContent currentVideo={currentVideo} />
                        <NextVideos nextVideos={nextVideos} />
                    </div>
                </>
            )}
        </main>
    );
};

export default Video;
