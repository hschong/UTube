// export const arrayVideos = [
//     {
//         id: 13984280,
//         title: "Alien",
//         description: "My favorite SF movie",
//         views: 59,
//         videoSource: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator: {
//             id: 12318923,
//             name: "I hate CSS",
//             email: "Do not disturb@bombmail.com"
//         }
//     },
//     {
//         id: 14984280,
//         title: "Batman",
//         description: "My favorite hero movie",
//         views: 59,
//         videoSource: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator: {
//             id: 12318923,
//             name: "I hate CSS",
//             email: "Do not disturb@bombmail.com"
//         }
//     },
//     {
//         id: 15984280,
//         title: "Indian Jones",
//         description: "My favorite adventure movie",
//         views: 59,
//         videoSource: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator: {
//             id: 12318923,
//             name: "I hate CSS",
//             email: "Do not disturb@bombmail.com"
//         }
//     },
//     {
//         id: 15994280,
//         title: "Usual suspect",
//         description: "My favorite thriler movie",
//         views: 59,
//         videoSource: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator: {
//             id: 12318923,
//             name: "I hate CSS",
//             email: "Do not disturb@bombmail.com"
//         }
//     }
// ];


import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(
    // "mongodb://localhost:27017/UTube",
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;
const handleOpen = () => console.log("✅ Connected to DB");
const handleError = error => console.log(`❌ Error on DB connection ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
