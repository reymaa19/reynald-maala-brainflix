import "./Comment.scss";

const Comment = ({ comment: commentObj }) => {
    const { id, name, timestamp, comment } = commentObj;

    // Formats the timestamp to a more human-readable format.
    const formatTimestamp = () => {
        const difference = Math.floor(new Date() - new Date(timestamp)) / 1000;
        const timeUnits = [
            { name: "year", seconds: 12 * 30.437 * 24 * 60 * 60 },
            { name: "month", seconds: 30.437 * 24 * 60 * 60 },
            { name: "day", seconds: 24 * 60 * 60 },
            { name: "hour", seconds: 60 * 60 },
            { name: "minute", seconds: 60 },
        ];

        if (difference < 60) {
            return "Just now";
        }

        for (const unit of timeUnits) {
            if (difference >= unit.seconds) {
                const value = Math.floor(difference / unit.seconds);
                return `${value} ${unit.name}${value > 1 ? "s" : ""} ago`;
            }
        }
    };

    return (
        <li id={id} className="comment">
            <div className="comment__avatar" />
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
