import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer.jsx";
import VideoContent from "../../components/VideoContent/VideoContent.jsx";
import NextVideos from "../../components/NextVideos/NextVideos.jsx";
import videosApi from "../../services/videos-api.js";
import { scrollToTop } from "../../utils/utils.js";
import "./Video.scss";

const Video = () => {
    const { videoId } = useParams();
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);

    useEffect(() => {
        scrollToTop();

        const fetchVideos = async () => {
            const videosData = await videosApi.getVideos();
            const videoData = await videosApi.getVideo(videoId || videosData[0]?.id );

            setVideos(videosData);
            setCurrentVideo(videoData);
        };

        fetchVideos();
    }, [videoId]);

    const nextVideos = videos.filter(({ id }) => id !== currentVideo?.id);

    return (
        <main className="main">
            {currentVideo && (
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
