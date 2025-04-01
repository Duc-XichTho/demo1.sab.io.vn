import * as ktqtPhanTichNoteService from "../services/ktqtPhantichNoteService.js";

export const getAllKTQTPhanTichNoteController = async (req, res) => {
  try {
    const notes = await ktqtPhanTichNoteService.getAllKTQTPhanTichNoteService();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createKTQTPhanTichNoteController = async (req, res) => {
  try {
    const newKTQTPhanTichNote = await ktqtPhanTichNoteService.createKTQTPhanTichNoteService(req.body);
    res.status(201).json(newKTQTPhanTichNote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateKTQTPhanTichNoteController = async (req, res) => {
  try {
    const updatedKTQTPhanTichNote = await ktqtPhanTichNoteService.updateKTQTPhanTichNoteService(
      req.params.id,
      req.body
    );
    if (updatedKTQTPhanTichNote) {
      res.json(updatedKTQTPhanTichNote);
    } else {
      res.status(404).json({ error: "KTQTPhanTichNote not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteKTQTPhanTichNoteController = async (req, res) => {
  try {
    const result = await ktqtPhanTichNoteService.deleteKTQTPhanTichNoteService(req.params.id);
    if (result.success) {
      res.status(204).send();
    } else {
      res.status(404).json(result);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
