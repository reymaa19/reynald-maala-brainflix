import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../../services/videos-api";
import "./CommentsForm.scss";

const CommentsForm = ({ onVideoUpdate }) => {
    const [comment, setComment] = useState("");
    const { videoId } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await postComment(videoId, comment);

        if (result.status === 201) {
            setComment("");
            onVideoUpdate();
        }
    };

    return (
        <form action="#" className="comments-form" onSubmit={handleSubmit}>
            <div className="comments-form__avatar" />
            <div className="comments-form__inputs">
                <div className="comments-form__inputs-container">
                    <label htmlFor="comment" className="comments-form__label">
                        JOIN THE CONVERSATION
                    </label>
                    <textarea
                        name="comment"
                        id="comment"
                        placeholder="Add a new comment"
                        className="comments-form__input"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                </div>
                <button className="comments-form__button">COMMENT</button>
            </div>
        </form>
    );
};

export default CommentsForm;
