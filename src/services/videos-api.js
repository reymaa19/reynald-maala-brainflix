import axios from "axios";

const BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com";
const API_KEY = "86787a94-e6e0-4ab2-ae3a-46f8d35a1713";
let _firstVideoId; // Stores the ID of the first video fetched.

// Fetches a single video by its ID.
export const getVideo = async (videoId) => {
    try {
        const response = await axios.get(`${BASE_URL}/videos/${videoId || _firstVideoId}?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.log("An error occurred while fetching current video.", error);
        alert("Failed to fetch current video. Please try again.");
    }
};

// Fetches all videos.
export const getVideos = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/videos?api_key=${API_KEY}`);

        _firstVideoId = response.data[0].id;
        return response.data;
    } catch (error) {
        console.log("An error occurred while fetching videos.", error);
        alert("Failed to fetch videos. Please try again.");
    }
};

// Posts a new comment on a video.
export const postComment = async (videoId, comment) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/videos/${videoId || _firstVideoId}/comments?api_key=${API_KEY}`,
            { name: "Reynald Maala", comment },
        );

        return response;
    } catch (error) {
        console.log("An error occurred while submitting your comment.", error);
        alert("Failed to add comment. Please try again.");
    }
};

// Deletes a comment from a video.
export const deleteComment = async (videoId, commentId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/videos/${videoId || _firstVideoId}/comments/${commentId}?api_key=${API_KEY}`);
        return response;
    } catch (error) {
        console.log("An error occurred while deleting selected comment.", error);
        alert("Failed to delete selected comment. Please try again.");
    }
};

export default {
    getVideo,
    getVideos,
    postComment,
    deleteComment,
};
