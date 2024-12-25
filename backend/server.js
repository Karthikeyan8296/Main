const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const quizRoutes = require("./routes/quizRoutes");
const errorHandler = require("./middleware/errorHanding");
const notFoundHandler = require("./middleware/notFoundHandler");

const PORT = process.env.PORT || 5001; // Change to a different port like 5001

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(
    process.env.MONGO_URI ||
      "mongodb+srv://karthikeyan76652:karthik@cluster0.1otvp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.error(err));

app.use("/api/quizzes", quizRoutes);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
