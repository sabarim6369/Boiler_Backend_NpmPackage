const bcrypt = require("bcryptjs");
const User = require('../Models/authmodel');
const { generateToken } = require("../utils/token");

const login = async (_, { username, password }) => {
  const user = await User.findOne({ username });
  if (!user) return { error: "User not found" };

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return { error: "Invalid password" };

  const token = generateToken(user._id);
  return { token };
};

const signup = async (_, { username, password, email }) => {
  const existingUser = await User.findOne({ username });
  if (existingUser) return { error: "Username already exists" };

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    name:username,
    email,
    password: hashedPassword,
  });

  const token = generateToken(newUser._id);
  return { token };
};

const getmydata = async (_, { id }) => {
  const user = await User.findById(id);
  console.log(user)
  if (!user) return { error: "User not found",username:user.name };
  return {
      token: null,  
    message: "User data fetched successfully",
    user:{
          id: user._id,
      username: user.name,
      email: user.email
    }
  };
};

module.exports = { login, signup, getmydata };
