import * as userService from "../services/userService.js";

export const getUserByEmailController = async (req, res) => {
  const { email } = req.user;
  try {
    const user = await userService.getUserByEmailService(email);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllUserController = async (req, res) => {
  try {
    const result = await userService.getAllUserService();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createUserController = async (req, res) => {
  try {
    const result = await userService.createUserService(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUserController = async (req, res) => {
  try {
    const result = await userService.updateUserService(
      req.params.email,
      req.body
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUserController = async (req, res) => {
  try {
    const result = await userService.deleteUsersService(req.body.emails);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
