import connection from "../config/db.config.js";

const findFavs = async (user) => {
  const SELECT = "SELECT f.* FROM favoris AS fav JOIN films AS f ON fav.id_film = f.id_film WHERE fav.id_utilisateur=?";
  try {
    const resultat = await connection.query(SELECT, [user.id]);
    console.log(resultat[0]);
    return resultat[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default { findFavs };
