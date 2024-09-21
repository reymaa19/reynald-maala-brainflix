import Avatar from "../Avatar/Avatar.jsx";

const Comment = ({ details }) => {
    const { id, name, timestamp, comment } = details;

    return (
        <li id={id} className="comment">
            <Avatar />
            <div className="comment__details">
                <div className="comment__head">
                    <h4 className="comment__name">{name}</h4>
                    <p className="comment__date">{timestamp}</p>
                </div>
                <p className="comment__text">{comment}</p>
            </div>
        </li>
    );
};

export default Comment;
