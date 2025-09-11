import { id } from 'yup-locales'
import yup from '../config/yup.config.js'
import inscriptionRepository from "../repositories/inscription.repository.js"
import bcrypt from "bcrypt"


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

            const hashedPassword = await bcrypt.hash(req.body.password, 10);


            const user = await inscriptionRepository.save({
                id: req.body.id_utilisateur,
                nom: req.body.nom,
                prenom: req.body.prenom,
                email: req.body.email,
                password: hashedPassword,
                role: "user"
            });

            if (user == null) {
                res.render('inscription', {
                    erreurs: ["Problème d'insertion"],
                })
            } else {
                req.session.id_user = user.id_utilisateur;
                req.session.prenom = user.prenom;
                req.session.nom = user.nom;
                req.session.role = user.role;

                
                res.redirect('/accueil')

            }
        })
        .catch(async err => {
            console.log("JE ME SUIS FAIT CATCH", err);

            res.redirect('/inscription')
        })

    console.log(req.session);

}


export default { addUser, showPage }