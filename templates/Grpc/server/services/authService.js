import User from "../models/User.js";

export const authService = {

  Signup: async (call, callback) => {
    try {
      const { email, password, name } = call.request;

      const exists = await User.findOne({ email });
      if (exists) {
        return callback(null, { success: false, message: "User already exists" });
      }
console.log(email, password, name);
console.log("Reached here");
      // Create new user
      await User.create({ email, password, name });
      return callback(null, { success: true, message: "Signup successful" });
    } catch (err) {
      return callback(null, { success: false, message: "Signup failed" });
    }
  },

  Login: async (call, callback) => {
    try {
      const { email, password } = call.request;

      // Find user
      const user = await User.findOne({ email });
      if (!user || user.password !== password) {
        return callback(null, { success: false, message: "Invalid credentials" });
      }

      return callback(null, { success: true, message: "Login successful" });
    } catch (err) {
      return callback(null, { success: false, message: "Login failed" });
    }
  }
};
