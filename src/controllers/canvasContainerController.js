import * as canvasContainerService from '../services/canvasContainerService.js';

export const getAllCanvasContainerController = async (req, res) => {
  try {
    const data = await canvasContainerService.getAllCanvasContainerService();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCanvasContainerController = async (req, res) => {
  try {
    const result = await canvasContainerService.createCanvasContainerService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateCanvasContainerController = async (req, res) => {
  try {
    const result = await canvasContainerService.updateCanvasContainerService(
      req.params.id,
      req.body
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCanvasContainerController = async (req, res) => {
  try {
    const result = await canvasContainerService.deleteCanvasContainerService(
      req.params.id
    );
    if (result) {
      res.status(200).json({ message: 'Deleted successfully' });
    } else {
      res.status(404).json({ error: 'Not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
