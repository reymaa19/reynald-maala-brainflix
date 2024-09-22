import Avatar from "../Avatar/Avatar.jsx";
import Stat from "../Stat/Stat.jsx";
import "./Comment.scss";

const Comment = ({ comment: commentObj }) => {
    const { id, name, timestamp, comment } = commentObj;

    const formatTimestamp = () => {
        const difference = Math.floor(new Date() - new Date(timestamp)) / 1000;
        const minute = 60;
        const hour = 3600;
        const day = 86400;
        const month = 2592000;

        if (difference < minute) {
            return "Just now";
        } else if (difference < hour) {
            const minutes = Math.floor(difference / minute);
            return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
        } else if (difference < day) {
            const hours = Math.floor(difference / hour);
            return `${hours} hour${hours > 1 ? "s" : ""} ago`;
        } else if (difference < month) {
            const days = Math.floor(difference / day);
            return `${days} day${days > 1 ? "s" : ""} ago`;
        } else {
            return new Date(timestamp).toLocaleDateString("es-pa");
        }
    };

    return (
        <li id={id} className="comment">
            <Avatar />
            <div className="comment__details">
                <div className="comment__head">
                    <h4 className="comment__name">{name}</h4>
                    <Stat stat={formatTimestamp()} variant="timestamp" />
                </div>
                <p className="comment__text">{comment}</p>
            </div>
        </li>
    );
};

export default Comment;
