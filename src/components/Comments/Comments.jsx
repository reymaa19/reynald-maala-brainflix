import Comment from "../Comment/Comment";
import Avatar from "../Avatar/Avatar";
import CtaButton from "../CtaButton/CtaButton";
import "./Comments.scss";

const Comments = ({ comments }) => {
    return (
        <section className="comments">
            <h3 className="comments__title">{comments.length} Comments</h3>
            <form action="#" className="comments__form">
                <Avatar withImage={true} variant="comment" />
                <div className="comments__inputs">
                    <div className="comments__inputs-container">
                        <label htmlFor="comment" className="comments__label">
                            JOIN THE CONVERSATION
                        </label>
                        <textarea
                            name="comment"
                            id="comment"
                            placeholder="Add a new comment"
                            className="comments__input"
                        ></textarea>
                    </div>
                    <CtaButton content="COMMENT" />
                </div>
            </form>
            <ul className="comments__feed">
                {comments.map(({ id, name, timestamp, comment }) => {
                    return (
                        <Comment
                            key={id}
                            details={{ id, name, timestamp, comment }}
                        />
                    );
                })}
            </ul>
        </section>
    );
};

export default Comments;
