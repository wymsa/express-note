import express from "express";

const application = express();

application.listen(3001, () => {
  console.log("Server is running");
});
