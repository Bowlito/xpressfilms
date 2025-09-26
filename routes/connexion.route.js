import express from "express";
import connexionController from "../controllers/connexion.controller.js";
import usersReactController from "../react.controllers/users.react.controller.js";

const routeur = express.Router();

//routeur.get("/", connexionController.showPage);
//routeur.post("/", connexionController.verifyUser);
routeur.post("/", usersReactController.verifyUser);

export default routeur;
