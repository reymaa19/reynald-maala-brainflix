import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../../services/videos-api";
import "./CommentsForm.scss";

const CommentsForm = ({ onVideoUpdate }) => {
    const { videoId } = useParams();
    const [comment, setComment] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        //if (comment.length === 0) {
        //    setError("Comment is required");
        //    return;
        //}

        const result = await postComment(videoId, comment);

        if (result.status === 201) {
            setComment("");
            onVideoUpdate();
        } else setError(result.data.error);
    };

    const handleCommentChange = (e) => {
        if (error) setError("");
        setComment(e.target.value);
    };

    return (
        <form className="comments-form" onSubmit={handleSubmit}>
            <div className="comments-form__avatar" />
            <div className="comments-form__inputs">
                <div className="comments-form__inputs-container">
                    <label htmlFor="comment" className="comments-form__label">
                        JOIN THE CONVERSATION
                    </label>
                    <textarea
                        name="comment"
                        id="comment"
                        placeholder={error ? "" : "Add a new comment"}
                        className={`comments-form__input ${error && "comments-form__input--error"}`}
                        value={comment}
                        onChange={handleCommentChange}
                    ></textarea>
                    <p className="comments-form__error">{error}</p>
                </div>
                <button className="comments-form__button" type="submit">
                    COMMENT
                </button>
            </div>
        </form>
    );
};

export default CommentsForm;
