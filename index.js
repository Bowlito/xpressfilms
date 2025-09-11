import express from "express";
import "dotenv/config";
import { setLocale } from "yup";
import { fr } from "yup-locales";
import session from "express-session";
import films from "./routes/film.route.js";
import inscriptions from "./routes/inscription.route.js";
import connexions from "./routes/connexion.route.js";
// import favoris from "./routes/favoris.route.js"
import path from "path";
import lastFilm from "./repositories/films.repository.js";
import users from "./routes/users.route.js";

const app = express();

app.use(
  session({
    secret: "XPRESS-VID",
    resave: false,
    saveUninitialized: false,
  })
);

app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

app.use(express.urlencoded());
app.use(express.static("public"));

setLocale(fr);

app.use(
  "/bootstrap",
  express.static(path.join(import.meta.dirname, "node_modules/bootstrap/dist"))
);

app.set("view engine", "ejs");
app.set("views", import.meta.dirname + "/templates");
app.set("view options", { delimiter: "?" });

app.use("/films", films);
app.use("/inscription", inscriptions);
app.use("/connexion", connexions);
app.use("/users", users);
// app.use('/films', films)
// app.use('/films', films)

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Erreur lors de la destruction de session :", err);
      return res.status(500).send("Erreur serveur");
    }
    res.clearCookie("connect.sid");

    res.redirect("/accueil");
  });
});

app.get(["/", "/home", "/accueil"], async (req, res) => {
  const movies = await lastFilm.findLast();

  res.render("index", { movies });
});

app.all("/*splat", (req, res) => {
  res.status(404).end("Page introuvable");
});

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
  console.log(`Adresse serveur : http://localhost:${PORT}`);
});
