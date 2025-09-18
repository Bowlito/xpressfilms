import express from "express";
import usersController from "../controllers/users.controller.js";
import filmController from "../controllers/films.controller.js";

const routeur = express.Router();

routeur.get("/", usersController.showAll);
routeur.get("/favoris/:id", usersController.favIt);

export default routeur;
