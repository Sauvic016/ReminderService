const express = require("express");

const { PORT } = require("./config/serverConfig");

const apiRoutes = require("./routes");
const jobs = require("./utils/job");

const setupAndStartServer = async () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, () => {
    console.log(`Server started at Port: ${PORT}`);
    jobs();
  });
};

setupAndStartServer();
