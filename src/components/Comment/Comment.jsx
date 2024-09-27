import { formatTimestamp } from "../../utils/utils";
import { useParams } from "react-router-dom";
import { deleteComment } from "../../services/videos-api";
import "./Comment.scss";

const Comment = ({ comment: commentObj, onVideoUpdate }) => {
    const { videoId } = useParams();
    const { id, name, timestamp, comment } = commentObj;

    const handleDeleteClick = async () => {
        await deleteComment(videoId, id);
        onVideoUpdate();
    };

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
                <button
                    className="comment__delete-button"
                    onClick={handleDeleteClick}
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

export default Comment;
