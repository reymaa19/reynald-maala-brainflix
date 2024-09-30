import { formatTimestamp } from "../../utils/utils";
import { useParams } from "react-router-dom";
import { deleteComment } from "../../services/videos-api";
import "./Comment.scss";

const Comment = ({ comment: commentObj, onVideoUpdate }) => {
    const { videoId } = useParams();
    const { id, name, timestamp, comment } = commentObj;

    const handleDeleteClick = async () => {
        const isConfirmed = confirm(`${name}\n${comment}\n\nAre you sure you want to delete this comment?`);
        if (!isConfirmed) return;

        const result = await deleteComment(videoId, id);
        if (result.status === 200) onVideoUpdate();
    };

    return (
        <li id={id} className="comment">
            <div className="comment__wrapper">
                <div className="comment__avatar" />
                <button
                    className="comment__delete-button"
                    onClick={handleDeleteClick}
                />
            </div>
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
