import connection from "../config/db.config.js";

const login = async (email) => {
  const SELECT = `SELECT * FROM utilisateurs WHERE email=?`;
  try {
    const resultat = await connection.query(SELECT, [email]);
    return resultat[0][0]; // récupérer le premier utilisateur
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default { login };
