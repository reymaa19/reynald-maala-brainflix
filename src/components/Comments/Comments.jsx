import Comment from "../Comment/Comment";
import CommentsForm from "../CommentsForm/CommentsForm";
import { sortByLatest } from "../../utils/utils";
import "./Comments.scss";

const Comments = ({ comments, onVideoUpdate }) => {
    return (
        <section className="comments">
            <h3 className="comments__header">{comments.length} Comments</h3>
            <CommentsForm onVideoUpdate={onVideoUpdate} />
            <ul className="comments__feed">
                {sortByLatest(comments).map((comment) => (
                    <Comment key={comment.id} comment={comment} onVideoUpdate={onVideoUpdate} />
                ))}
            </ul>
        </section>
    );
};

export default Comments;
