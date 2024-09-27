import axios from "axios";
const BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com";
const API_KEY = "86787a94-e6e0-4ab2-ae3a-46f8d35a1713";
const VIDEOS_ENDPOINT = "/videos";
const COMMENTS_ENDPOINT = "/comments";

export let firstVideoId;

export const getVideo = async (videoId) => {
    try {
        const url = `${BASE_URL}${VIDEOS_ENDPOINT}/${videoId || firstVideoId}?api_key=${API_KEY}`;
        const response = await axios.get(url);

        return response.data;
    } catch (error) {
        console.log("An error occurred while fetching current video.", error);
        alert("Failed to fetch current video. Please try again.");
    }
};

export const getVideos = async () => {
    try {
        const url = `${BASE_URL}${VIDEOS_ENDPOINT}?api_key=${API_KEY}`;
        const response = await axios.get(url);

        firstVideoId = response.data[0].id;
        return response.data;
    } catch (error) {
        console.log("An error occurred while fetching videos.", error);
        alert("Failed to fetch videos. Please try again.");
    }
};

export const postComment = async (videoId, comment) => {
    try {
        const url = `${BASE_URL}${VIDEOS_ENDPOINT}/${videoId || firstVideoId}${COMMENTS_ENDPOINT}?api_key=${API_KEY}`;
        const newComment = {
            name: "Reynald Maala",
            comment,
        };

        const response = await axios.post(url, newComment);
        return response.data;
    } catch (error) {
        console.log("An error occurred while submitting your comment.", error);
        alert("Failed to add comment. Please try again.");
    }
};

export const deleteComment = async (videoId, commentId) => {
    try {
        const url = `${BASE_URL}${VIDEOS_ENDPOINT}/${videoId || firstVideoId}${COMMENTS_ENDPOINT}/${commentId}?api_key=${API_KEY}`;
        const response = await axios.delete(url);

        return response.status;
    } catch (error) {
        console.log(
            "An error occurred while deleting selected comment.",
            error,
        );
        alert("Failed to delete selected comment. Please try again.");
    }
};

export default {
    getVideos,
    getVideo,
    firstVideoId,
    postComment,
};
