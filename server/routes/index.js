import express from "express";
import { getAdmin, Login, Register, Logout } from "../controllers/Admin.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getWorkshop,getWorkshopById,saveWorkshop,deleteWorkshop, updateWorkshop } from "../controllers/Workshop.js";
const router = express.Router();

// Admin Account
router.get('/admin',verifyToken,getAdmin);
router.post('/admin', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

//Workshop
router.get('/workshop',getWorkshop);
router.get('/workshop/:id',getWorkshopById);
router.post('/workshop', saveWorkshop);
router.patch('/workshop/:id', updateWorkshop);
router.delete('/workshop/:id', deleteWorkshop);

export default router;