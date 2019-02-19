import mongoose, { mongo } from "mongoose";

const VideoScheme = new mongoose.Schema({
    fileURL: {
        type: String,
        required: "File URL is required"
    },
    title: {
        type: String,
        required: "Title is required"
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model("Video", VideoScheme);
export default model;
