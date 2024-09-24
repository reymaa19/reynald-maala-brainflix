import "./Upload.scss";

const Upload = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <main className="main">
            <section className="upload">
                <h1 className="upload__header">Upload Video</h1>
                <form
                    action="#"
                    onSubmit={handleSubmit}
                    className="upload__form"
                >
                    <div className="upload__container--form">
                        <div>
                            <label className="upload__label">
                                VIDEO THUMBNAIL
                            </label>
                            <div className="upload__thumbnail" />
                        </div>
                        <div className="upload__container upload__container--inputs">
                            <div>
                                {" "}
                                <label
                                    htmlFor="title"
                                    className="upload__label"
                                >
                                    TITLE YOUR VIDEO
                                </label>
                                <input
                                    name="title"
                                    id="title"
                                    type="text"
                                    placeholder="Add a title to your video"
                                    className="upload__input"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="description"
                                    className="upload__label"
                                >
                                    VIDEO ADD A VIDEO DESCRIPTION
                                </label>
                                <textarea
                                    name="description"
                                    id="description"
                                    placeholder="Add a description to your video"
                                    className="upload__input upload__input--textarea"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="upload__container upload__container--buttons">
                        <button className="upload__button upload__button--primary">
                            PUBLISH
                        </button>
                        <button className="upload__button upload__button--secondary">
                            CANCEL
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default Upload;
