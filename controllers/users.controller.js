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

export default { showAll };
