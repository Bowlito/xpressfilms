import userRepository from "../repositories/user.repository.js";
import connexionRepository from "../repositories/connexion.repository.js"
import inscriptionRepository from "../repositories/inscription.repository.js"
import yup from "../config/yup.config.js";
import bcrypt from "bcrypt";

const userSchema = yup.object().shape({
  nom: yup
    .string()
    .required()
    .matches(
      /^[A-Z]{1}.{2,19}$/,
      "Le nom doit commencer par une majuscule et comporter entre 3 et 20 lettres"
    ),
  prenom: yup
    .string()
    .min(
      3,
      (args) =>
        `Le prénom doit contenir au moins ${args.min} caractères, valeur saisie : ${args.value} `
    )
    .max(20),
  email: yup
    .string()
    .required()
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/),
  password: yup.string().required(),
});



const addUser = (req, res, next) => {
    
    
    userSchema
        .validate(req.body, { abortEarly: false })
        .then(async () => {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const u = await inscriptionRepository.save(req.body, req.body.password = hashedPassword)
            
            console.log(u);
            
            if (u) {
                return res
                    .status(201)
                    .json(u)
            }
        })
        .catch(err => {
            console.log(err);
            return res
                .sendStatus(500)
        })
}

const verifyUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Mot de passe saisi : ", password);

    const user = await connexionRepository.login(email);

    if (!user) {
      return res
        .sendStatus(401)
    }

    const bonMdp = await bcrypt.compare(password, user.password);
    if (!bonMdp) {
      return res
        .sendStatus(401)
    }

    return res
      .status(201)
      .json(user)

    


  } catch (error) {
    console.error(error);
    res
      .sendStatus(500)
      
  }
};

export default { addUser, verifyUser }


