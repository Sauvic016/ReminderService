const express = require("express");

const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server started at Port: ${PORT}`);
  });
};

setupAndStartServer();
