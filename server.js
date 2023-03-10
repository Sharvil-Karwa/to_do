require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connect = require("./config/database");
const listRoutes = require("./routes/list");
const taskRoutes = require("./routes/task");
connect();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use("/api/lists", listRoutes);
app.use("/api/tasks", taskRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
