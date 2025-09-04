import express from 'express'
import filmsController from '../controllers/films.controller.js'

const routeur = express.Router()

routeur.get('/', filmsController.show)


export default routeur