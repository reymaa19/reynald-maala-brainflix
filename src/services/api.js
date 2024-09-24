import axios from "axios";
const BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com";
const API_KEY = "86787a94-e6e0-4ab2-ae3a-46f8d35a1713";
const VIDEOS_ENDPOINT = "/videos";

const getVideo = async (id) => {
    try {
        const response = await axios.get(
            `${BASE_URL}${VIDEOS_ENDPOINT}/${id}?api_key=${API_KEY}`,
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const getVideos = async () => {
    try {
        const response = await axios.get(
            `${BASE_URL}${VIDEOS_ENDPOINT}?api_key=${API_KEY}`,
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export default {
    getVideos,
    getVideo,
};
