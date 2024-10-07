import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postVideo } from "../../services/videos-api";
import "./UploadPage.scss";

const UploadPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState({
        title: "",
        description: "",
    });
    const [values, setValues] = useState({
        title: "",
        description: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!values.title || !values.description) {
            if (!values.title) setError((prev) => ({ ...prev, title: "Title is required" }));
            if (!values.description)
                setError((prev) => ({ ...prev, description: "Description is required" }));

            return;
        }

        const result = await postVideo(values);

        if (result.status === 201) navigate("/");
        else setError(result.data.error);
    };

    const handleValueChange = (e) => {
        const { name, value } = e.target;

        if (error.title || error.description) setError({ ...error, [name]: "" });
        setValues({ ...values, [name]: value });
    };

    return (
        <main className="main">
            <section className="upload">
                <h1 className="upload__header">Upload Video</h1>
                <form onSubmit={handleSubmit} className="upload__form">
                    <div className="upload__container upload__container--form">
                        <label className="upload__label">
                            VIDEO THUMBNAIL
                            <input className="upload__thumbnail" />
                        </label>
                        <div className="upload__container upload__container--inputs">
                            <label htmlFor="title" className="upload__label">
                                TITLE YOUR VIDEO
                                <input
                                    name="title"
                                    id="title"
                                    placeholder={error.title ? "" : "Add a title to your video"}
                                    className={`upload__input ${error.title && "upload__input--error"}`}
                                    value={values.title}
                                    onChange={handleValueChange}
                                />
                                <p className="upload__label upload__label--error">{error.title}</p>
                            </label>
                            <label htmlFor="description" className="upload__label">
                                VIDEO ADD A VIDEO DESCRIPTION
                                <textarea
                                    name="description"
                                    id="description"
                                    placeholder={
                                        error.description ? "" : "Add a description to your video"
                                    }
                                    className={`upload__input upload__input--textarea ${error.description && "upload__input--error"}`}
                                    value={values.description}
                                    onChange={handleValueChange}
                                ></textarea>
                                <p className="upload__label upload__label--error">
                                    {error.description}
                                </p>
                            </label>
                        </div>
                    </div>
                    <div className="upload__container upload__container--buttons">
                        <button className="upload__button upload__button--primary" type="submit">
                            PUBLISH
                        </button>
                        <button
                            className="upload__button upload__button--secondary"
                            type="button"
                            onClick={() => navigate("/")}
                        >
                            CANCEL
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default UploadPage;
