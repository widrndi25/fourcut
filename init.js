import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const handleListening = () => console.log(`✅Listening on: http://localhost:${process.env.PORT}`);

app.listen(process.env.PORT, handleListening);
