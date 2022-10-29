import { connect } from "mongoose";
import { config } from "dotenv";

config();

const db = connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

export { db };