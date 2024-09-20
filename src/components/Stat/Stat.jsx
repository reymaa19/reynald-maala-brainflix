import './Stat.scss';

const Stat = ({ stat, variant }) => {
  const text = variant === "timestamp" ? new Date(stat).toLocaleDateString("es-pa") : stat;

  return (
    <p className={`stat stat--${variant}`}>{text}</p>
  )
}

export default Stat


//<p className="video__timestamp">{vid.timestamp}</p>
//<p className="video__views">{vid.views}</p>
//<p className="video__likes">{vid.likes}</p>
