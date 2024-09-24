import "./CommentsForm.scss";

const CommentsForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
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
                    ></textarea>
                </div>
                <button className="comments-form__button">COMMENT</button>
            </div>
        </form>
    );
};

export default CommentsForm;
