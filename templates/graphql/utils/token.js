const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, "your_jwt_secret", {
    expiresIn: "7d", // or any expiry you want
  });
};

module.exports = { generateToken };
