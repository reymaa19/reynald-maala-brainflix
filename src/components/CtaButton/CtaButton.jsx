import "./CtaButton.scss";

const CtaButton = ({ content }) => {
    return (
        <button className={`cta-button cta-button--${content}`}>
            {content}
        </button>
    );
};

export default CtaButton;
