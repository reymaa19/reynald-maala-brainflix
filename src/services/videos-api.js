import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
let _firstVideoId; // Stores the ID of the first video fetched.

// Fetches all videos.
export const getVideos = async () => {
    try {
        const url = `${BASE_URL}/videos`;
        const response = await axios.get(url);

        _firstVideoId = response.data[0].id;
        return response;
    } catch (err) {
        return err.response;
    }
};

// Fetches a single video by its ID.
export const getVideo = async (videoId) => {
    try {
        const url = `${BASE_URL}/videos/${videoId || _firstVideoId}`;
        const response = await axios.get(url);

        return response;
    } catch (err) {
        return err.response;
    }
};

// Posts a new video.
export const postVideo = async (newVideo) => {
    try {
        const url = `${BASE_URL}/videos`;
        const response = await axios.post(url, newVideo);

        return response;
    } catch (err) {
        return err.response;
    }
};

// Posts a new comment on a video.
export const postComment = async (videoId, comment) => {
    try {
        const url = `${BASE_URL}/videos/${videoId || _firstVideoId}/comments`;
        const response = await axios.post(url, { comment });

        return response;
    } catch (err) {
        return err.response;
    }
};

// Deletes a comment from a video.
export const deleteComment = async (videoId, commentId) => {
    try {
        const url = `${BASE_URL}/videos/${videoId || _firstVideoId}/comments/${commentId}`;
        const response = await axios.delete(url);

        return response;
    } catch (err) {
        return err.response;
    }
};

export default {
    getVideo,
    getVideos,
    postVideo,
    postComment,
    deleteComment,
};
