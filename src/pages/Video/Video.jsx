import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { scrollToTop } from "../../utils/utils.js";
import { getVideos, getVideo, firstVideoId } from "../../services/videos-api.js";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer.jsx";
import VideoContent from "../../components/VideoContent/VideoContent.jsx";
import NextVideos from "../../components/NextVideos/NextVideos.jsx";
import "./Video.scss";

const Video = () => {
    const { videoId } = useParams();
    const [videos, setVideos] = useState([]);
    const [video, setVideo] = useState(null);

    const findVideo = async (targetVideoId) => {
        const videoData = await getVideo(targetVideoId || firstVideoId);
        setVideo(videoData);
    };

    useEffect(() => {
        scrollToTop();
        video && findVideo(videoId);
    }, [videoId]);

    useEffect(() => {
        const fetchVideos = async () => {
            const videosData = await getVideos();
            findVideo();
            setVideos(videosData);
        };

        fetchVideos();
    }, []);

    const nextVideos = videos.filter(({ id }) => id !== video?.id);

    return (
        <main className="main">
            {video && (
                <>
                    <VideoPlayer video={video} />
                    <div className="main__wrapper">
                        <VideoContent
                            video={video}
                            onVideoUpdate={() => findVideo(video.id)}
                        />
                        <NextVideos nextVideos={nextVideos} />
                    </div>
                </>
            )}
        </main>
    );
};

export default Video;
