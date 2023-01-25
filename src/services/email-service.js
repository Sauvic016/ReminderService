const sender = require("../config/emailConfig");

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
  sender.sendMail({
    from: mailFrom,
    to: mailTo,
    subject: mailSubject,
    text: mailBody,
  });
};

module.exports = {
  sendBasicEmail,
};
