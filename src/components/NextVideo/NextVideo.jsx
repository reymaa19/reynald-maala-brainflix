import { Link } from "react-router-dom";
import "./NextVideo.scss";

const NextVideo = ({ nextVideo }) => {
    const { id, image, title, channel } = nextVideo;

    return (
        <li className="next-video" id={id}>
            <Link to={`/videos/${id}`}>
                <img src={image} alt="" className="next-video__thumbnail" />
            </Link>
            <div className="next-video__wrapper">
                <h4 className="next-video__title">{title}</h4>
                <p className="next-video__channel">{channel}</p>
            </div>
        </li>
    );
};

export default NextVideo;
