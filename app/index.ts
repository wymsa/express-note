import "dotenv/config";

import express from "express";
import mainRouter from "./router";

const application = express();
application.use(express.json());
application.use("/api", mainRouter);

application.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on PORT = ${process.env.APP_PORT}`);
});
