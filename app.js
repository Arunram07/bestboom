import express from "express";
import routes from "./src/routes/index.js";
const app = express();
import bodyParser from "body-parser";
import path from "path";

const __dirname = path.resolve();

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/images", express.static(__dirname + "public/images"));
app.use("/js", express.static(__dirname + "public/js"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", routes);

export default app;
