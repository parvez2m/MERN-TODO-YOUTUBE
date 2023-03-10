const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/ToDoRouter");

require("dotenv").config();

const app = express();

const PORT = process.env.port || 5000;

app.use(express.json());

app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("conected"))
  .catch((err) => console.log(err));

// router.post("/get", async (req, res) => {
//   res.json({ message: "Yes It working!" });
// });

// app.use(routes);

app.use("/api/todo", routes);

app.listen(PORT, () => console.log(`Listening port${PORT}`));
