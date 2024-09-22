import Avatar from "../Avatar/Avatar.jsx";
import "./Comment.scss";

const Comment = ({ comment: commentObj }) => {
    const { id, name, timestamp, comment } = commentObj;

    // Formats the timestamp to a more human-readable format.
    const formatTimestamp = () => {
        const difference = Math.floor(new Date() - new Date(timestamp)) / 1000;
        const minute = 60;
        const hour = 60 * minute;
        const day = 24 * hour;
        const month = 30.437 * day;
        const year = 12 * month;

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
        } else if (difference < year) {
            const months = Math.floor(difference / month);
            return `${months} month${months > 1 ? "s" : ""} ago`;
        } else {
            const years = Math.floor(difference / year);
            return `${years} year${years > 1 ? "s" : ""} ago`;
        }
    };

    return (
        <li id={id} className="comment">
            <Avatar />
            <div className="comment__details">
                <div className="comment__head">
                    <h4 className="comment__name">{name}</h4>
                    <p className="comment__timestamp">{formatTimestamp()}</p>
                </div>
                <p className="comment__text">{comment}</p>
            </div>
        </li>
    );
};

export default Comment;
