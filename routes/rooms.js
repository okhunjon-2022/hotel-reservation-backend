import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updatedRoom,
} from "../controller/room.js";

const router = express.Router();

//CREATE
router.post("/:hotelId", verifyAdmin, createRoom);
//UPDATE
router.put("/:id", verifyAdmin, updatedRoom);
//DELETE
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);
//GET
router.get("/:id", getRoom);
//GET ALL
router.get("/", getAllRooms);

export default router;
