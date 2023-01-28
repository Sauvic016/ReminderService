const express = require("express");

const { PORT } = require("./config/serverConfig");
const EmailService = require("./services/email-service");

const apiRoutes = require("./routes");

const jobs = require("./utils/job");

const { subscribeMessage, createChannel } = require("./utils/messageQueue");
const { REMINDER_BINDING_KEY } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  const channel = await createChannel();
  subscribeMessage(channel, EmailService.subscribeEvents, REMINDER_BINDING_KEY);

  app.listen(PORT, () => {
    console.log(`Server started at Port: ${PORT}`);
    // jobs();
  });
};

setupAndStartServer();
