import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";

// Load environment variables
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("DB Connected");
    app.listen(PORT, () => {
        console.log(`Server is running on port :${PORT}`);
    });
})
.catch(error => {
    console.error("MongoDB connection error:", error);
    process.exit(1); 
});

app.use("/api", route);
