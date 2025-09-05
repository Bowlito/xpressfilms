import yup from '../config/yup.config.js'
import inscriptionRepository from "../repositories/inscription.repository.js"


const showPage = (req, res) => {
    res.render('inscription')
}

const userSchema = yup.object().shape({
    nom: yup
        .string()
        .required()
        .matches(/^[A-Z]{1}.{2,19}$/, "Le nom doit commencer par une majuscule et comporter entre 3 et 20 lettres"),
    prenom: yup
        .string()
        .min(3, (args) => `Le prénom doit contenir au moins ${args.min} caractères, valeur saisie : ${args.value} `)
        .max(20),
    email: yup
        .string()
        .required()
        .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/),
    password: yup
        .string()
        .required()

})

const addUser = async (req, res, next) => {
    userSchema
        .validate(req.body, { abortEarly: false })
        .then(async () => {
            req.session.prenom = req.body.prenom
            const u = await inscriptionRepository.save(req.body)
            if (u == null) {
                res.render('inscription', {
                    erreurs: ["Problème d'insertion"],
                })
            } else {
                console.log(u);
                
                res.redirect('/accueil')

            }
        })
        .catch(async err => {
            console.log(" C'est moi");
           
            res.redirect('/inscription')
        })
}


export default { addUser, showPage }