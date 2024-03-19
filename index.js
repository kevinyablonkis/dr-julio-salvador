import express from "express";
const app = express();

const PORT = 3000 || 0;

app.listen(PORT, () => {
  console.log("Server listening on port http://localhost:3000");
});
