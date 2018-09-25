import express from "express";
import graphql from "./src/index";

const app = express();

app.listen("3000", () => {
  console.log("Server is running on PORT 3000");
});
