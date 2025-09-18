import yup from "../config/yup.config.js";
import userRepository from "../repositories/user.repository.js";
import bcrypt from "bcrypt";

const showAll = async (req, res) => {
  try {
    const users = await userRepository.showUsers();
    return res.render("users", {
      users: users,
      erreurs: null,
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

const favIt = async (req, res, next) => {
  try {
    const user = req.session.user;
    if (!user) {
      return res.redirect("/connexion")
    }
    const film = { id: parseInt(req.params.id) };
    const fav = await userRepository.addFav(user, film);
    console.log("FILM AJOUTE AUX FAVORIS : ");
    return res.redirect("/favoris")
  } catch (error) {
    console.log(error);

    return null;
  }
};

export default { showAll, favIt };
