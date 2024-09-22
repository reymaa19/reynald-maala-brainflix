import Comment from "../Comment/Comment";
import CommentsForm from "../CommentsForm/CommentsForm";
import "./Comments.scss";

const Comments = ({ comments }) => {
    return (
        <section className="comments">
            <h3 className="comments__header">{comments.length} Comments</h3>
            <CommentsForm />
            <ul className="comments__feed">
                {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                ))}
            </ul>
        </section>
    );
};

export default Comments;
