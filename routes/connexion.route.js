import express from 'express'
import connexionController from '../controllers/connexion.controller.js'

const routeur = express.Router()

routeur.get('/', connexionController.showPage)


export default routeur