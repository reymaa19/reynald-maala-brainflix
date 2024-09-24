import { Link } from "react-router-dom";
import "./CtaButton.scss";

const CtaButton = ({ content }) => {
    return (
        <Link
            className={`cta-button cta-button--${content}`}
            to={`${content === "UPLOAD" ? "/upload" : ""} `}
        >
            {content}
        </Link>
    );
};

export default CtaButton;
