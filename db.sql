DROP DATABASE IF EXISTS xpress_films

CREATE DATABASE xpress_films

USE xpress_films

CREATE TABLE films (
    id_film INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(50) NOT NULL,
    image VARCHAR(200),
    description VARCHAR(200),
    dateSortie DATE,
    genre VARCHAR(30),
    dateAjout TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE utilisateurs (
    id_utilisateur INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(15) NOT NULL
)

CREATE TABLE favoris (
    id_utilisateur INT NOT NULL,
    id_film INT NOT NULL,
    PRIMARY KEY (id_utilisateur, id_film),
    FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur),
    FOREIGN KEY (id_film) REFERENCES film(id_film)
)

INSERT INTO films VALUES (
    NULL,
    "Spiderman and the spider-verse",
    "images/spiderverse1.jpg",
    "A man with spider abilities in multiple univers",
    "2018-09-24",
    "action",
    DEFAULT
)

INSERT INTO films VALUES (
    NULL,
    "Inception",
    "images/inception1.jpg",
    "What if you could interact with others dreams in order to influence them?",
    "2019-08-24",
    "science-fiction",
    DEFAULT
)

INSERT INTO films VALUES (
    NULL,
    "Destins entre-lacets",
    "images/destinsdnd.png",
    "Leur destinée fragile ne tient qu/’à un fil… ou peut-être à deux lacets.",
    "2025-06-15",
    "Fantaisie",
    DEFAULT
)

INSERT INTO utilisateurs VALUES (
    NULL,
    "Boule",
    "Monsieur",
    "monsieur@boule.fr",
    "$2b$10$TKpmYNyyefNmfXQseyG88OMJSJsDT/C1fVM5aQWXbilhghYk42Fba",
    "admin"
)