const TicketService = require("../services/email-service");

const create = async (req, res) => {
  try {
    console.log(req.body);
    const response = await TicketService.createNotification(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully registered an email reminder",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "unable to registered an email reminder",
    });
  }
};

module.exports = {
  create,
};
