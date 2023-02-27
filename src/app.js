const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const jwtRoute = require("./routes/jwt");

app.use(
  cors({
    origin: "*",
  })
);

app.use("/", jwtRoute);

app.listen(process.env.PORT || port, () => {
  console.log(`server is running on port ${port}`);
});
