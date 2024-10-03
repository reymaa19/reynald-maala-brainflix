import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
    return (
        <main className="main">
            <div className="not-found">
                <h1 className="not-found__header">Oops! Page not Found</h1>
                <p className="not-found__description">
                    The page you are looking for might have been removed, had its name changed or is temporarily
                    unavailable.
                </p>
                <Link className="not-found__link" to="/">
                    HOME
                </Link>
            </div>
        </main>
    );
};

export default NotFoundPage;
