import yup from '../config/yup.config.js'
import bcrypt from "bcrypt"

const showPage = (req, res) => {
    res.render('connexion')
}

export default { showPage }