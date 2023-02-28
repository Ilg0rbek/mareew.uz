import fileUpload from "express-fileupload";
import express from "express";
import cors from "cors";
import { resolve } from "path";
import morgan from "morgan";

import "#config/index";
import routes from "#api/routes";

const app = express();

app.use(cors());

if(process.env.NODE_ENV === 'development') {
  app.use(morgan("dev"));
}

app.use(express.static(resolve(process.cwd(), "src", "uploads")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(
  fileUpload({
    limits: {
      fileSize: 50 * 1024 * 1024,
    }
  })
)

app.use("/api", routes);

async function main() {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}

main()