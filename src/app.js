import fileUpload from "express-fileupload";
import express from "express";
import cors from "cors";
import { resolve } from "path";
import morgan from "morgan";

import { NODE_ENV } from "./config/index.js";

import { errorHandler } from "./middlewares/errorHandler.js";

// import { routes } from './api/routes/index.js'

export const app = express();

app.use(cors());

if(NODE_ENV) {
  app.use(morgan("dev"));
}

app.use(express.static(resolve(process.cwd(), "uploads")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(
  fileUpload({
    limits: {
      fileSize: 50 * 1024 * 1024,
    }
  })
)

// app.use("/api", routes);


app.use(errorHandler)