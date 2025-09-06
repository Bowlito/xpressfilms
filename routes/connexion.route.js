import express from "express";
import connexionController from "../controllers/connexion.controller.js";

const routeur = express.Router();

routeur.get("/", connexionController.showPage);
routeur.post("/", connexionController.verifyUser);

export default routeur;
