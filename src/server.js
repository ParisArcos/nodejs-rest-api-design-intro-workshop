const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const { json } = require("body-parser");
const config = require("./config/config");

const bookRouter = require("./routes/book-routes");
const userRouter = require("./routes/user-routes");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(
  cors({
    origin: config.client.URL,
  }),
);

app.use(bookRouter);
app.use("/user", userRouter);

module.exports = app;
