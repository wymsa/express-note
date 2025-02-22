import express from "express";
import mainRouter from "./router";

const application = express();
application.use("/api", mainRouter);

application.listen(3001, () => {
  console.log("Server is running");
});
