import bcrypt from "bcrypt";
import connexionRepository from "../repositories/connexion.repository.js";

const showPage = (req, res) => {
  res.render("connexion");
};

const verifyUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Mot de passe saisi : ", password);

    const user = await connexionRepository.login(email);

    if (!user) {
      return res
        .status(401)
        .render("connexion", { error: "Utilisateur non trouvé" });
    }

    const bonMdp = await bcrypt.compare(password, user.password);
    if (!bonMdp) {
      return res
        .status(401)
        .render("connexion", { error: "Mot de passe incorrect" });
    }

    req.session.user = {
      id: user.id_utilisateur,
      nom: user.nom,
      prenom: user.prenom,
      role: user.role,
    };
    console.log("Connecté avec succès");

    res.redirect("/home");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .render("connexion", { error: "Erreur serveur, veuillez réessayer" });
  }
};

export default { showPage, verifyUser };
