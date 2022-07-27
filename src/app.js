const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
require("./db/connection");
app.use(express.json());
const studentRouter = require("./routers/student");
app.use(studentRouter);

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
