import Avatar from "../Avatar/Avatar";
import CtaButton from "../CtaButton/CtaButton";
import "./CommentsForm.scss";

const CommentsForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form action="#" className="comments-form" onSubmit={handleSubmit}>
            <Avatar withImage={true} variant="comment" />
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
                <CtaButton content="COMMENT" />
            </div>
        </form>
    );
};

export default CommentsForm;
