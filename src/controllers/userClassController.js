import * as userClassService from "../services/userClassService.js";

export const getUserClassByIdController = async (req, res) => {
  try {
    const userClass = await userClassService.getUserClassByIdService(
      req.params.id
    );
    if (userClass) {
      res.json(userClass);
    } else {
      res.status(404).json({ error: "UserClass not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserClassByEmailController = async (req, res) => {
  const { email } = req.user;
  try {
    const userClass = await userClassService.getUserClassByEmailService(email);
    if (userClass) {
      res.json(userClass);
    } else {
      res.status(404).json({ error: "UserClass not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllUserClassController = async (req, res) => {
  try {
    const data = await userClassService.getAllUserClassService();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createUserClassController = async (req, res) => {
  try {
    const result = await userClassService.createUserClassService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUserClassController = async (req, res) => {
  try {
    const result = await userClassService.updateUserClassService(
      req.params.id,
      req.body
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUserClassController = async (req, res) => {
  try {
    const result = await userClassService.deleteUserClassService(
      req.params.id
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
