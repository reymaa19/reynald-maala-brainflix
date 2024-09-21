import "./Stat.scss";

const Stat = ({ stat, variant }) => {
    const text =
        variant === "timestamp"
            ? new Date(stat).toLocaleDateString("es-pa")
            : stat;

    return <p className={`stat stat--${variant}`}>{text}</p>;
};

export default Stat;
