import React, { useState } from "react";
import { Link } from "react-router-dom";
import MediaModal from "../components/MediaModal";
import ProgressBar from "../components/ProgressBar";

function Rando1() {
  const [media, setMedia] = useState(null);

  // Affichage DOM
  return (
    <div className="template-randonnee">
      <ProgressBar />
      <MediaModal media={media} setMedia={setMedia} />
      <section className="section container">
        <div className="columns is-multiline">
          <div className="column is-12">
            <nav className="breadcrumb is-small" aria-label="breadcrumbs">
              <ul>
                <li>
                  <Link to="/">Accueil</Link>
                </li>
                <li className="is-active">
                  <Link to="/randonnee-1" aria-current="page">
                    Jour 1 - Néouvielle
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="column is-one-third is-left">
            <div className="card is-sticky">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../img/randonnees/001/001.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
              <div className="card-content">
                <nav className="level is-mobile">
                  <div className="level-item has-text-centered">
                    <div>
                      <p className="heading">Distance</p>
                      <p className="title">
                        14.5<span>km</span>
                      </p>
                    </div>
                  </div>

                  <div className="level-item has-text-centered">
                    <div>
                      <p className="heading">Dénivelé</p>
                      <p className="title">
                        550<span>m</span>
                      </p>
                    </div>
                  </div>
                  <div className="level-item has-text-centered">
                    <div>
                      <p className="heading">Temps</p>
                      <p className="title">
                        3<span>h</span>40
                      </p>
                    </div>
                  </div>
                </nav>
                <div className="buttons">
                  <a
                    className="button is-primary is-fullwidth"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.strava.com/activities/5743567480"
                  >
                    Voir l'activité Strava
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-two-thirds is-right">
            <h1 className="title is-1">Réserve naturelle de Néouvielle</h1>
            <div className="tags">
              <Link className="tag is-rounded" to="/galerie/lac">
                lac
              </Link>
              <Link className="tag is-rounded" to="/galerie/lac-d-oredon">
                lac d'oredon
              </Link>
              <Link className="tag is-rounded" to="/galerie/lac-d-aubert">
                lac d'aubert
              </Link>
              <Link className="tag is-rounded" to="/galerie/lac-d-aumar">
                lac d'aumar
              </Link>
            </div>

            {/* <!-- Bloc 1 --> */}
            <div className="block">
              <div className="content">
                <strong>Préambule</strong>
                <br />
                Bien le bonjour ! Pour faire une présentation rapide, on est une
                petite troupe de 3-4 amis d'enfance, anciens colocs etc, venant
                de l'Ouest de la France (Nantes, Bordeaux, Toulouse). Etant tous
                un minimum sportifs, on s'est dit que pour des retrouvailles, un
                mélange apéro/sport ça pourrait être pas mal. Après quelques
                petites recherches, on décide de louer un petit logement à
                <Link className="tag is-rounded" to="/galerie/piau">
                  Piau
                </Link>
                Engaly, dans les Pyrénées, et de profiter des quelques jours
                qu'on a en commun pour découvrir les joies de la randonnée.
              </div>
              <div className="content">
                <strong>D-Day</strong>
                <br />
                Ça y est, le jour tant attendu est arrivé. Après des semaines de
                préparation, de planification, nous voici à notre première
                randonnée. Bon, t'as compris, on a trouvé cette rando hier soir.
                On gare la voiture, découvre le paysage, fait les petits
                réglages de montres, dit au revoir à sa chérie et leeeet's go !
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/003.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/003.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/004.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/004.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-6">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={
                          require("../img/randonnees/001/005_01.jpg").default
                        }
                        alt=""
                        onClick={() => setMedia("randonnees/001/005_01.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>

            {/* <!-- Bloc 2 --> */}
            <div className="block">
              <strong>Début du parcours</strong>
              <br />
              Descente à pieds jusqu'au niveau du premier
              <Link className="tag is-rounded" to="/galerie/lac">
                lac
              </Link>
              . On y découvre un refuge et un barrage. On décide de faire un
              premier petit "hors piste" pour aller prendre tout ça en photos.
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/007.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/007.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/008.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/008.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/009.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/009.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/010.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/010.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/011.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/011.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/012.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/012.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/014.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/014.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/015.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/015.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>

            {/* <!-- Bloc 3 --> */}
            <div className="block">
              <strong>Début de la grimpette</strong>
              <br />À peine le refuge passé, on se rend compte qu'il fait bien
              beau et chaud. Tout le monde à poil, crème solaire, et c'est parti
              pour la sieste...euh, la montée !
            </div>
            <div className="columns is-meteo">
              <div className="column">
                <article className="message is-link">
                  <div className="message-body">
                    <div className="media">
                      <div className="media-left">
                        <span className="icon">
                          <ion-icon name="sunny-outline"></ion-icon>
                        </span>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">Ensoleillé</p>
                        <p className="subtitle is-6">Météo</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="column">
                <article className="message is-link">
                  <div className="message-body">
                    <div className="media">
                      <div className="media-left">
                        <span className="icon">
                          <ion-icon name="thermometer-outline"></ion-icon>
                        </span>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">14°C</p>
                        <p className="subtitle is-6">Température</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="column">
                <article className="message is-link">
                  <div className="message-body">
                    <div className="media">
                      <div className="media-left">
                        <span className="icon">
                          <ion-icon name="water-outline"></ion-icon>
                        </span>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">58%</p>
                        <p className="subtitle is-6">Humidité</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={
                          require("../img/randonnees/001/016_01.jpg").default
                        }
                        alt=""
                        onClick={() => setMedia("randonnees/001/016_01.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/017.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/017.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/018.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/018.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/019.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/019.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>

            {/* <!-- Bloc 4 --> */}
            <div className="block">
              <strong>Col hors-catégorie</strong>
              <br />
              Pas si facile cette randonnée !
              <Link className="tag is-rounded" to="/galerie/karyl">
                Karyl
              </Link>{" "}
              mène la troupe, et derrière on se bat comme on peut.
              <Link className="tag is-rounded" to="/galerie/guillaume">
                Guillaume
              </Link>
              cherche un baton pendant que je teste les appuis de mes
              chaussures. On monte vite et bien, en dépassant quelques groupes
              dans cette rando très familiale. La pente nous paraît raide,
              j'espère en secret que ça ne dure pas 4h comme ça. Heureusement,
              le paysage est magnifique. On surplombe vite le
              <Link className="tag is-rounded" to="/galerie/lac-d-oredon">
                lac d'Orédon
              </Link>
              , par lequel on était arrivés, et on suit un petit ruisseau dont
              les rochers nous offrent plein de spots pour de belles photos.
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/020.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/020.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/021.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/021.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/022.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/022.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/023.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/023.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/024.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/024.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/025.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/025.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/026.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/026.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>

            {/* <!-- Bloc 5 --> */}
            <div className="block">
              <strong>Lac non répertorié</strong>
              <br />
              Ça y est, la montée est finie ! On ne le sait pas encore mais on
              vient de faire les pentes les plus dures de la journée, tout le
              reste sera en faux plat, ce qui explique le grand nombre de
              familles. On tombe alors sur un
              <Link className="tag is-rounded" to="/galerie/lac">
                lac
              </Link>
              magnifique que l'on doit longer pour continuer notre parcours.
              L'occasion de faire une petite pause détente.
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/027.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/027.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={
                          require("../img/randonnees/001/028_01.jpg").default
                        }
                        alt=""
                        onClick={() => setMedia("randonnees/001/028_01.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={
                          require("../img/randonnees/001/029_01.jpg").default
                        }
                        alt=""
                        onClick={() => setMedia("randonnees/001/029_01.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={
                          require("../img/randonnees/001/030_01.jpg").default
                        }
                        alt=""
                        onClick={() => setMedia("randonnees/001/030_01.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={
                          require("../img/randonnees/001/031_01.jpg").default
                        }
                        alt=""
                        onClick={() => setMedia("randonnees/001/031_01.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/032.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/032.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/033.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/033.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={
                          require("../img/randonnees/001/034_01.jpg").default
                        }
                        alt=""
                        onClick={() => setMedia("randonnees/001/034_01.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/035.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/035.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/036.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/036.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/037.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/037.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/038.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/038.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/039.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/039.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/040.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/040.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/041.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/041.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/042.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/042.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={
                          require("../img/randonnees/001/044_01.jpg").default
                        }
                        alt=""
                        onClick={() => setMedia("randonnees/001/044_01.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/045.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/045.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/046.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/046.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/047.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/047.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/048.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/048.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/049.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/049.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>

            {/* <!-- Bloc 6 --> */}
            <div className="block">
              <strong>Lac d'Aubert</strong>
              <br />
              Après quelques minutes, nous arrivons au grand
              <Link className="tag is-rounded" to="/galerie/lac-d-aubert">
                lac d'Aubert
              </Link>
              . On décide de faire un petit détour et d'aller au niveau du
              barrage, d'où on surplombe l'ancien
              <Link className="tag is-rounded" to="/galerie/lac">
                lac
              </Link>
              , et encore plus le
              <Link className="tag is-rounded" to="/galerie/lac-d-oredon">
                lac d'Orédon
              </Link>
              que l'on ne voit même plus.
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/050.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/050.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/051.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/051.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/052.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/052.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/054.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/054.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/053.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/053.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/055.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/055.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={
                          require("../img/randonnees/001/056_01.jpg").default
                        }
                        alt=""
                        onClick={() => setMedia("randonnees/001/056_01.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/057.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/057.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>

            {/* <!-- Bloc 7 --> */}
            <div className="block">
              <strong>Pause repas</strong>
              <br />
              13h30, joli paysage, peu de cailloux, herbe verte...c'est le
              moment ! On se trouve un petit coin sympa au bord du
              <Link className="tag is-rounded" to="/galerie/lac">
                lac
              </Link>{" "}
              et on passe un peu de bon temps. Au programme : repas, sieste et
              baignade (juste les pieds, on se calme).
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={
                          require("../img/randonnees/001/058_01.jpg").default
                        }
                        alt=""
                        onClick={() => setMedia("randonnees/001/058_01.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={
                          require("../img/randonnees/001/059_01.jpg").default
                        }
                        alt=""
                        onClick={() => setMedia("randonnees/001/059_01.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={
                          require("../img/randonnees/001/060_01.jpg").default
                        }
                        alt=""
                        onClick={() => setMedia("randonnees/001/060_01.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>

            {/* <!-- Bloc 8 --> */}
            <div className="block">
              <strong>GR20 nous voilà !</strong>
              <br />
              C'est reparti ! Après une bonne petite pause, on remarque que le
              parcours du GR20 passe sur notre chemin. On décide alors d'en
              faire une petite partie, en se disant que la vue ne doit pas être
              dégueu en haut...c'est validé non ?
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/064.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/064.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/065.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/065.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-6">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={
                          require("../img/randonnees/001/066_01.jpg").default
                        }
                        alt=""
                        onClick={() => setMedia("randonnees/001/066_01.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>

            {/* <!-- Bloc 8 --> */}
            <div className="block">
              <strong>Lac d'Aumar</strong>
              <br />
              Assez rigolé, le GR ce sera pour une autre fois. Nous voici de
              retour sur notre parcours, à longer le
              <Link className="tag is-rounded" to="/galerie/lac-d-aumar">
                lac d'Aumar
              </Link>
              . Fini les sentiers et les enfants, on se retrouve sur une route
              escarpée, pleine de rochers, de pentes glissantes et de
              randonneurs bien chaussés. Au bout du
              <Link className="tag is-rounded" to="/galerie/lac">
                lac
              </Link>
              , oh surprise ! Alors, vous avez trouvé la vache "Milka" ?
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/063.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/063.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/071.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/071.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/073.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/073.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/074.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/074.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/075.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/075.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/078.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/078.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={
                          require("../img/randonnees/001/080_01.jpg").default
                        }
                        alt=""
                        onClick={() => setMedia("randonnees/001/080_01.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/077.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/077.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>

            {/* <!-- Bloc 9 --> */}
            <div className="block">
              <strong>Fin de parcours...ou pas</strong>
              <br />
              Après la beauté des
              <Link className="tag is-rounded" to="/galerie/lac">
                lacs
              </Link>
              , après avoir traversé une petite pleine (pas de photo, c'est de
              l'herbe et un terrain plat, tmtc), après s'être perdus quelques
              fois (je ne dirai pas qui faisais le GPS ce jour là), nous voici
              revenus à notre point de départ...mais 500m plus haut ! Jolie vue
              sur le
              <Link className="tag is-rounded" to="/galerie/lac-d-oredon">
                lac d'Orédon
              </Link>
              , n'est ce pas ?
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/081.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/081.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={
                          require("../img/randonnees/001/082_01.jpg").default
                        }
                        alt=""
                        onClick={() => setMedia("randonnees/001/082_01.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/083.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/083.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/084.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/084.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/085.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/085.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/086.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/086.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/087.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/087.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>

            {/* <!-- Bloc 10 --> */}
            <div className="block">
              <div className="content">
                <strong>THE END</strong>
                <br />
                Tu sais ce petit challenge que tu as quand tu vois Waze
                t'indiquer une heure d'arriver et que tu prends ça comme un
                temps à battre ? Panneau en haut de la descente :
                <blockquote>"1h de descente"</blockquote>
                Nous 27 minutes plus tard :
                <blockquote>
                  "On a plus de genoux, mais temps explosé !"
                </blockquote>
                Un dernier petit tour du
                <Link className="tag is-rounded" to="/galerie/lac-d-oredon">
                  lac d'Orédon
                </Link>
                et nous voilà entrain de
                <s>penser à la raclette du soir</s>
                préparer la prochaine randonnée au Pic de
                <Link className="tag is-rounded" to="/galerie/piau">
                  Piau
                </Link>
                .
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={require("../img/randonnees/001/088.jpg").default}
                        alt=""
                        onClick={() => setMedia("randonnees/001/088.jpg")}
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Link className="hero is-medium is-primary" to="/randonnee-2">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">Jour 2 - Pic de Piau</p>
            <p className="subtitle">Lire la suite</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Rando1;
