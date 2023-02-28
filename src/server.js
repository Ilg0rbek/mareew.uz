import http from "http";

import { sequelize } from "./models/index.js";
import { PORT, NODE_ENV } from "./config/index.js";
import { app } from "./app.js";

const server = http.createServer(app)

async function main() {
  if(NODE_ENV === 'development') {
    await sequelize.sync({ force: false, alter: true })
  } else {
    await sequelize.authenticate()
  }


  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

main()