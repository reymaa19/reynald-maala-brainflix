import { formatTimestamp } from "../../utils/utils";
import "./Comment.scss";

const Comment = ({ comment: commentObj }) => {
    const { id, name, timestamp, comment } = commentObj;

    return (
        <li id={id} className="comment">
            <div className="comment__avatar" />
            <div className="comment__details">
                <div className="comment__head">
                    <h4 className="comment__name">{name}</h4>
                    <p className="comment__timestamp">
                        {formatTimestamp(timestamp)}
                    </p>
                </div>
                <p className="comment__text">{comment}</p>
            </div>
        </li>
    );
};

export default Comment;
