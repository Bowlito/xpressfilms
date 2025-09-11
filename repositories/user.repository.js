import connection from "../config/db.config.js";

const showUsers = async () => {
  const SELECT = "SELECT * FROM utilisateurs";
  try {
    const resultat = await connection.query(SELECT);
    return resultat[0];
  } catch (error) {
    console.log(error);

    return null;
  }
};

export default { showUsers };
