import express from "express";
import {
  getAllTicketController,
  getTicketByCompanyIdController,
  createTicketController,
  updateTicketController,
  deleteTicketController,
} from "../../controllers/gateway/ticketController.js";

const router = express.Router();

router.get("/", getAllTicketController);

router.get("/company/:companyId", getTicketByCompanyIdController);

router.put("/", updateTicketController);

router.post("/", createTicketController);

router.delete("/:id", deleteTicketController);

export default router;
