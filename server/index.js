import express from "express";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import db from "./config/Database.js";
import router from "./routes/index.js";
import cors from "cors";

dotenv.config();
const app = express();

try{
    await db.authenticate();
    console.log('Database Connected...');
} catch (error){
console.error(error);
}
app.unsubscribe(cookieParser());
app.use(express.json());
app.use(router);
app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.static("public"));
app.use(fileUpload());

app.listen(8000, ()=> console.log('Server running at port 8000'));