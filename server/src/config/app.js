import express from "express";
import cors from "cors";

const app = express();

if (process.env.NODE_ENV === "development") {
    app.use(cors({origin: "https://studio.apollographql.com"}));
}

export default app;