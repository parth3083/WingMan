import UserModel from "../models/user.model.js";

export const createUser = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }
  try {
    const hashedPaswword = await UserModel.hashPassword(password);
    const user = await UserModel.create({
      email,
      password: hashedPaswword,
    });
    return user;
  } catch (error) {
    console.error(error);
  }
};
