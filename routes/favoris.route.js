import express from 'express'
import favorisController from '../controllers/favoris.controller.js'

const routeur = express.Router()

routeur.get('/', favorisController.show)

export default routeur