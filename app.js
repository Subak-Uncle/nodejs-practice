const express = require("express");
const logger = require("morgan");
const router = require("./src/routes/route");

const app = express();

app.use(express.json());
app.use(logger("dev"));
app.use("/movie", router);
app.listen(8888, () => console.log("Server is running on port 8888"));
