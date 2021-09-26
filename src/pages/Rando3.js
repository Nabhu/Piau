import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import MediaModal from "../components/MediaModal";

function Rando3() {
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
                  <Link to="/randonnee-3" aria-current="page">
                    Jour 3 - Col du Portet
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
                    src={require("../img/randonnees/003/001.JPG").default}
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
                        16.5<span>km</span>
                      </p>
                    </div>
                  </div>

                  <div className="level-item has-text-centered">
                    <div>
                      <p className="heading">Dénivelé</p>
                      <p className="title">
                        1050<span>m</span>
                      </p>
                    </div>
                  </div>
                  <div className="level-item has-text-centered">
                    <div>
                      <p className="heading">Temps</p>
                      <p className="title">
                        4<span>h</span>
                      </p>
                    </div>
                  </div>
                </nav>
                <div className="buttons">
                  <a
                    className="button is-primary is-fullwidth"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.strava.com/activities/5753899328"
                  >
                    Voir l'activité Strava
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-two-thirds is-right">
            <h1 className="title is-1">Col du Portet</h1>
            <div className="tags">
              <Link className="tag is-rounded" to="/galerie/col-du-portet">
                col du portet
              </Link>
              <Link className="tag is-rounded" to="/galerie/mer-de-nuages">
                mer de nuages
              </Link>
              <Link className="tag is-rounded" to="/galerie/lac">
                lac
              </Link>
              <Link className="tag is-rounded" to="/galerie/lac-de-loule">
                lac de loule
              </Link>
            </div>

            {/* <!-- Bloc 1 --> */}
            <div className="block">
              <div className="content">
                <strong>Préambule</strong>
                <br />
                Toi aussi t'as remarqué que tout marchait comme sur des
                roulettes depuis le début ? Groupe hyper bien organisé, météo de
                ouf, paysages de ouf et j'en passe. Et bien maintenant, tu vas
                avoir une masterclass de l'inverse.
              </div>
              <div className="content">
                <strong>Départ</strong>
                <br />
                Pour ce dernier jour de randonnée et avec la présence d'
                <Link className="tag is-rounded" to="/galerie/aurelien">
                  Aurélien
                </Link>
                , un acolyte tout frais, on décide d'un parcours bien séduisant.
                Un
                <Link className="tag is-rounded" to="/galerie/lac">
                  lac
                </Link>{" "}
                aussi beau que ceux du premier jour, et un dénivelé de 550m
                réparti en plusieurs fois, pour éviter les déceptions du
                deuxième jour où la deuxième partie du trajet nous avait laissé
                sur notre fin.
                <br />
                Le matin, tout beau tout propre, on prend donc la route vers
                notre point de départ, dans le brouillard mais en se disant que
                ça passera, comme la veille. Et là, bim, premier problème : la
                route jusqu'en haut du col est fermée aux voitures. Obligé donc
                de garer titine en bas, et de monter le
                <Link className="tag is-rounded" to="/galerie/col-du-portet">
                  col du Portet
                </Link>
                à pieds. Au menu donc, 600m de dénivelé en 4km, un plaisir. Oh,
                je vous ai pas dit ? Le brouillard n'est pas parti, on voit pas
                à 10m.
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-6">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        onClick={() => setMedia("randonnees/003/002_01.jpg")}
                        src={
                          require("../img/randonnees/003/002_01.jpg").default
                        }
                        alt=""
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
                        onClick={() => setMedia("randonnees/003/004.jpg")}
                        src={require("../img/randonnees/003/004.jpg").default}
                        alt=""
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
                        onClick={() => setMedia("randonnees/003/005.jpg")}
                        src={require("../img/randonnees/003/005.jpg").default}
                        alt=""
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>

            {/* <!-- Bloc 2 --> */}
            <div className="block">
              <div className="content">
                <strong>Marmotte(s) !</strong>
                <br />
                Après avoir croisé des grosses bêtes avec des cornes bien
                poitues et pas très amicales qui nous ont obligé à faire un
                petit détour (je vous avais parlé d'une masterclass non ?), on
                se rattrape avec pleiiiin de marmottes de part et d'autre du
                sentier. L'occasion de faire un petit break et d'immortaliser
                cette rencontre.
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <video onClick={() => setMedia("randonnees/003/038.MP4")}>
                      <source
                        src={require("../img/randonnees/003/038.MP4").default}
                        alt=""
                        type="video/mp4"
                      />
                    </video>
                    <ion-icon name="play-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>

            {/* <!-- Bloc 3 --> */}
            <div className="block">
              <div className="content">
                <strong>Col du Portet</strong>
                <br />
                Après 1h10 de grimpette, nous voici enfin devant le
                <Link className="tag is-rounded" to="/galerie/lac-d-aumar">
                  col du Portet
                </Link>
                ! La fin de la montée était beaucoup plus facile, sur des lacets
                goudronnés (merci le Tour de France). Avec cette photo, on
                pourra dire "On l'a fait" !
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        onClick={() => setMedia("randonnees/003/007.jpg")}
                        src={require("../img/randonnees/003/007.jpg").default}
                        alt=""
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>

            {/* <!-- Bloc 4 --> */}
            <div className="block">
              <div className="content">
                <strong>Où manger ?</strong>
                <br />
                Petit problème, il est 12h50, on a faim, et surtout peur
                d'attraper froid en s'arrêtant manger. Notre itinéraire pour la
                journée étant déjà chamboulé, on décide de marcher vers le
                <Link className="tag is-rounded" to="/galerie/lac-de-loule">
                  lac de Loule
                </Link>
                , en espérant retomber sous les nuages et manger au sec.
                Heureusement, le soleil se décide à pointer le bout de son nez
                au moment où on arrive dans une vallée ! Ni une ni deux, on
                s'arrête pour recharger les batteries et observer les nuages
                bouger si rapidement.
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        onClick={() => setMedia("randonnees/003/008.jpg")}
                        src={require("../img/randonnees/003/008.jpg").default}
                        alt=""
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
                        onClick={() => setMedia("randonnees/003/009.jpg")}
                        src={require("../img/randonnees/003/009.jpg").default}
                        alt=""
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
                        onClick={() => setMedia("randonnees/003/010.jpg")}
                        src={require("../img/randonnees/003/010.jpg").default}
                        alt=""
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
                        onClick={() => setMedia("randonnees/003/011.jpg")}
                        src={require("../img/randonnees/003/011.jpg").default}
                        alt=""
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
                    <video onClick={() => setMedia("randonnees/003/012.MP4")}>
                      <source
                        src={require("../img/randonnees/003/012.MP4").default}
                        alt=""
                        type="video/mp4"
                      />
                    </video>
                    <ion-icon name="play-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <video onClick={() => setMedia("randonnees/003/033.MP4")}>
                      <source
                        src={require("../img/randonnees/003/033.MP4").default}
                        alt=""
                        type="video/mp4"
                      />
                    </video>
                    <ion-icon name="play-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>

            {/* <!-- Bloc 5 --> */}
            <div className="block">
              <div className="content">
                <strong>En route vers le lac</strong>
                <br />
                Vous l'avez remarqué, le ciel bleu n'a pas été visible bien
                longtemps. Pas grave, on continue quand même : destination le
                <Link className="tag is-rounded" to="/galerie/lac-de-loule">
                  lac de Loule
                </Link>
                , avec une mission pour
                <Link className="tag is-rounded" to="/galerie/guillaume">
                  Guillaume
                </Link>
                : trouver un baton plus efficace que celui du premier jour.
                Va-t-on passer sous les nuages ?
                <Link className="tag is-rounded" to="/galerie/guillaume">
                  Gui
                </Link>
                aka Sam de Koh Lanta va-t-il nous dénicher une pépite ?
                <Link className="tag is-rounded" to="/galerie/karyl">
                  Karyl
                </Link>
                aka le bonhomme va-t-il s'arrêter à chaque cours d'eau pour
                prendre le ruisselement de l'eau en ralenti ? Dans 3km, nous
                aurons toutes les réponses. Le suspens est à son comble...
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        onClick={() => setMedia("randonnees/003/013.jpg")}
                        src={require("../img/randonnees/003/013.jpg").default}
                        alt=""
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
                        onClick={() => setMedia("randonnees/003/014.jpg")}
                        src={require("../img/randonnees/003/014.jpg").default}
                        alt=""
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
                        onClick={() => setMedia("randonnees/003/015.jpg")}
                        src={require("../img/randonnees/003/015.jpg").default}
                        alt=""
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
                        onClick={() => setMedia("randonnees/003/016.jpg")}
                        src={require("../img/randonnees/003/016.jpg").default}
                        alt=""
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>

            {/* <!-- Bloc 6 --> */}
            <div className="block">
              <div className="content">
                <strong>Un lac ?</strong>
                <br />
                Les lacets en descente s'enchainent, j'ai l'impression de me
                planter : plus que 3 virages et toujours pas de
                <Link className="tag is-rounded" to="/galerie/lac">
                  lac
                </Link>
                , plus que 2, plus que 1...mais on n'y voit rien dans ce pays !
                Et finalement le dénouement, le voici ce fameux
                <Link className="tag is-rounded" to="/galerie/lac">
                  lac
                </Link>
                .
                <br />
                On pose nos affaires, prend quelques photos, puis on se pose
                avec quelques livres sur le bien être... bon ok, on joue à qui
                lance des cailloux le plus loin dans l'eau ou à qui fait le plus
                gros PLOUF, mais ça veut dire qu'on est heureux non ?
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        onClick={() => setMedia("randonnees/003/017.jpg")}
                        src={require("../img/randonnees/003/017.jpg").default}
                        alt=""
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
                        onClick={() => setMedia("randonnees/003/019.jpg")}
                        src={require("../img/randonnees/003/019.jpg").default}
                        alt=""
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
                        onClick={() => setMedia("randonnees/003/021.jpg")}
                        src={require("../img/randonnees/003/021.jpg").default}
                        alt=""
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
                        onClick={() => setMedia("randonnees/003/022.jpg")}
                        src={require("../img/randonnees/003/022.jpg").default}
                        alt=""
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
                        onClick={() => setMedia("randonnees/003/023.jpg")}
                        src={require("../img/randonnees/003/023.jpg").default}
                        alt=""
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
                        onClick={() => setMedia("randonnees/003/025.jpg")}
                        src={require("../img/randonnees/003/025.jpg").default}
                        alt=""
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <video onClick={() => setMedia("randonnees/003/035.MP4")}>
                      <source
                        src={require("../img/randonnees/003/035.MP4").default}
                        alt=""
                        type="video/mp4"
                      />
                    </video>
                    <ion-icon name="play-outline"></ion-icon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <video onClick={() => setMedia("randonnees/003/036.MP4")}>
                      <source
                        src={require("../img/randonnees/003/036.MP4").default}
                        alt=""
                        type="video/mp4"
                      />
                    </video>
                    <ion-icon name="play-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>

            {/* <!-- Bloc 7 --> */}
            <div className="block">
              <div className="content">
                <strong>Retour express</strong>
                <br />
                Après un bon moment à faire les gamins au bord de l'eau, on se
                rend compte qu'il fait quand même sacrément froid, et que ce qui
                était de simples nuages s'est transformé en pluie fine qui peut
                rapidement tremper nos vêtements, surtout avec les 9km qu'il
                nous reste pour rentrer.
              </div>
              <div className="columns is-meteo">
                <div className="column">
                  <article className="message is-link">
                    <div className="message-body">
                      <div className="media">
                        <div className="media-left">
                          <span className="icon">
                            <ion-icon name="rainy-outline"></ion-icon>
                          </span>
                        </div>
                        <div className="media-content">
                          <p className="title is-4">Pluvieux</p>
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
                          <p className="title is-4">17°C</p>
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
                          <p className="title is-4">87%</p>
                          <p className="subtitle is-6">Humidité</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="content">
                Hop, c'est parti ! Une bonne grimpette (passages à 25%) pour
                rejoindre la vallée, puis un faux plat montant jusqu'au
                <Link className="tag is-rounded" to="/galerie/col-du-portet">
                  col du Portet
                </Link>
                . Dans le froid, la pluie et sans énergie, on force pour faire
                la descente du col le plus rapidement possible. On l'a fait, au
                mental et tous ensemble ! Masterclass je vous disais.
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        onClick={() => setMedia("randonnees/003/027.jpg")}
                        src={require("../img/randonnees/003/027.jpg").default}
                        alt=""
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
                        onClick={() => setMedia("randonnees/003/028.jpg")}
                        src={require("../img/randonnees/003/028.jpg").default}
                        alt=""
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
                        onClick={() => setMedia("randonnees/003/029.jpg")}
                        src={require("../img/randonnees/003/029.jpg").default}
                        alt=""
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
                        onClick={() => setMedia("randonnees/003/030.jpg")}
                        src={require("../img/randonnees/003/030.jpg").default}
                        alt=""
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>

            {/* <!-- Fin de colonne de droite --> */}
          </div>
        </div>
      </section>
      <a
        className="hero is-medium is-primary"
        href="mailto:bonjour@nabhu.fr"
        target="_blank"
        rel="noreferrer"
      >
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">Tu as aimé cette petite aventure ?</p>
            <p className="subtitle">N'hésite pas à nous écrire</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Rando3;
