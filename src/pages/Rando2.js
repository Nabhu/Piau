import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import MediaModal from "../components/MediaModal";

function Rando2() {
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
                  <Link to="/randonnee-2" aria-current="page">
                    Jour 2 - Pic de Piau
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
                    src={require("../img/randonnees/002/001.jpg").default}
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
                        11<span>km</span>
                      </p>
                    </div>
                  </div>

                  <div className="level-item has-text-centered">
                    <div>
                      <p className="heading">Dénivelé</p>
                      <p className="title">
                        1000<span>m</span>
                      </p>
                    </div>
                  </div>
                  <div className="level-item has-text-centered">
                    <div>
                      <p className="heading">Temps</p>
                      <p className="title">
                        3<span>h</span>15
                      </p>
                    </div>
                  </div>
                </nav>
                <div className="buttons">
                  <a
                    className="button is-primary is-fullwidth"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.strava.com/activities/5748169776"
                  >
                    Voir l'activité Strava
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-two-thirds is-right">
            <h1 className="title is-1">Pic de Piau</h1>
            <div className="tags">
              <Link className="tag is-rounded" to="/galerie/piau">
                piau
              </Link>
              <Link className="tag is-rounded" to="/galerie/mer-de-nuages">
                mer de nuages
              </Link>
              <Link className="tag is-rounded" to="/galerie/lac">
                lac
              </Link>
            </div>

            {/* <!-- Bloc 1 --> */}
            <div className="block">
              <div className="content">
                <strong>Début des hostilités</strong>
                <br />
                Ce matin, c'est tranquille. La randonnée part du pied de notre
                logement, pas besoin de se dépêcher. En plus le parcours est
                beaucoup moins fréquenté que celui de la veille, donc plus
                besoin de
                <s>pousser des enfants pour passer</s> patienter derrière les
                familles. Par contre, on se rend vite compte de 2-3 problèmes :
                <ol>
                  <li>
                    Ok on a 1000m de dénivelé, deux fois plus qu'hier. Mais en
                    plus, c'est un pic, donc ce dénivelé, on le monte à l'aller
                    (bonjour les mollets) et on le descend au retour (bonjour
                    les genoux) sur 5.5km. En un mot, raide.
                  </li>
                  <li>
                    La météo. Temps idéal, température idéale. Mais ces nuages,
                    ces gros nuages, est ce qu'il y en aura aussi en haut du pic
                    ? Est ce qu'on va être dans le brouillard ou est ce qu'on
                    pourra voir notre première
                    <Link
                      className="tag is-rounded"
                      to="/galerie/mer-de-nuages"
                    >
                      Mer de nuages
                    </Link>
                    ?
                  </li>
                  <li>
                    Vertige. Besoin de plus de détails ? Rendez-vous plus
                    haut...euh, plus bas. Bref, lis.
                  </li>
                </ol>
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
                            <p className="title is-4">13°C</p>
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
                            <p className="title is-4">91%</p>
                            <p className="subtitle is-6">Humidité</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <div className="content">
                Nous voilà donc partis, dans les nuages, pour les premières
                pentes d'un pic qui alterne entre les lacets et les longues
                lignes droites interminables.
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-6">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        onClick={() => setMedia("randonnees/002/002_01.jpg")}
                        src={
                          require("../img/randonnees/002/002_01.jpg").default
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
                        onClick={() => setMedia("randonnees/002/004.jpg")}
                        src={require("../img/randonnees/002/004.jpg").default}
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
                        onClick={() => setMedia("randonnees/002/005.jpg")}
                        src={require("../img/randonnees/002/005.jpg").default}
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
                <strong>Au dessus des nuages</strong>
                <br />
                La chance est avec nous. Malgré une pente raide de chez raide et
                une vitesse moyenne horrible (bonjour les pentes à 28.6%), on
                trouve du réconfort en passant rapidement au dessus des nuages !
                Objectif, monter plus vite qu'eux, en n'oubliant pas de
                s'arrêter de temps en temps pour contempler cette vue.
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        onClick={() => setMedia("randonnees/002/008.jpg")}
                        src={require("../img/randonnees/002/008.jpg").default}
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
                        onClick={() => setMedia("randonnees/002/009_01.jpg")}
                        src={
                          require("../img/randonnees/002/009_01.jpg").default
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
                        onClick={() => setMedia("randonnees/002/010_01.jpg")}
                        src={
                          require("../img/randonnees/002/010_01.jpg").default
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
                        onClick={() => setMedia("randonnees/002/011.jpg")}
                        src={require("../img/randonnees/002/011.jpg").default}
                        alt=""
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
                        onClick={() => setMedia("randonnees/002/012_01.jpg")}
                        src={
                          require("../img/randonnees/002/012_01.jpg").default
                        }
                        alt=""
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
                        onClick={() => setMedia("randonnees/002/013_01.jpg")}
                        src={
                          require("../img/randonnees/002/013_01.jpg").default
                        }
                        alt=""
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
                        onClick={() => setMedia("randonnees/002/014.jpg")}
                        src={require("../img/randonnees/002/014.jpg").default}
                        alt=""
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
                        onClick={() => setMedia("randonnees/002/015.jpg")}
                        src={require("../img/randonnees/002/015.jpg").default}
                        alt=""
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-12">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        onClick={() => setMedia("randonnees/002/017.jpg")}
                        src={require("../img/randonnees/002/017.jpg").default}
                        alt=""
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>

            {/* <!-- Bloc 3 --> */}
            <div className="block">
              <div className="content">
                <strong>Vers l'infini et...vertige</strong>
                <br />
                Le temps passe, nos mollets semblent aussi durs que les rochers
                que l'on voit à droite à gauche. Nous rattrapons une famille
                très cool, et faisons les dernières montées ensemble, jusqu'au
                téléphérique, où ils ont prévu de manger. En dialoguant avec
                eux, ils nous apprennent que le chemin entre le téléphérique et
                le pic n'est pas un sentier, et qu'ils ne l'avaient fait qu'une
                fois (en tenue de ski, il y a plus de 20 ans. Rassurant quoi).
                <br />
                En arrivant au téléphérique, on comprend l'ampleur de ce qu'il
                nous reste à faire : un tout droit, à flanc de montagne, sur
                plusieurs centaines de mètres avec des pentes à plus de 40%. Tu
                te souviens du vertige dont je parlais ? Eh bah le voilà. Une
                tentative de quelques mètres pour
                <Link className="tag is-rounded" to="/galerie/karyl">
                  Karyl
                </Link>{" "}
                et moi, et hop, demi-tour, laissant
                <Link className="tag is-rounded" to="/galerie/guillaume">
                  Guillaume
                </Link>
                seul à son aventure.
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        onClick={() => setMedia("randonnees/002/018_01.jpg")}
                        src={
                          require("../img/randonnees/002/018_01.jpg").default
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
                        onClick={() => setMedia("randonnees/002/024.jpg")}
                        src={require("../img/randonnees/002/024.jpg").default}
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
                        onClick={() => setMedia("randonnees/002/023_01.jpg")}
                        src={
                          require("../img/randonnees/002/023_01.jpg").default
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
                        onClick={() => setMedia("randonnees/002/025_01.jpg")}
                        src={
                          require("../img/randonnees/002/025_01.jpg").default
                        }
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
                <strong>Apéro !</strong>
                <br />
                Ça y est, notre héros est de retour ! Trinquons à sa santé et
                restaurons nous.
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        onClick={() => setMedia("randonnees/002/026.jpg")}
                        src={require("../img/randonnees/002/026.jpg").default}
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
                        onClick={() => setMedia("randonnees/002/022.jpg")}
                        src={require("../img/randonnees/002/022.jpg").default}
                        alt=""
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
                        onClick={() => setMedia("randonnees/002/027_01.jpg")}
                        src={
                          require("../img/randonnees/002/027_01.jpg").default
                        }
                        alt=""
                      />
                    </figure>
                    <ion-icon name="expand-outline"></ion-icon>
                  </div>
                </article>
              </div>
            </div>

            {/* <!-- Bloc 5 --> */}
            <div className="block">
              <div className="content">
                <strong>Nouvelle tentative</strong>
                <br />
                Après le repas, l'envie nous prend de retenter d'escalader le
                pic.
                <Link className="tag is-rounded" to="/galerie/guillaume">
                  Guillaume
                </Link>
                étant tout seul la première fois, il n'avait pas voulu aller
                jusqu'en haut, et moi je me disais que c'était une occasion de
                surmonter mes peurs. Ni une ni deux, on active le mode
                "escalade". Je décide de m'arrêter à mi-parcours, et
                <Link className="tag is-rounded" to="/galerie/guillaume">
                  Guillaume
                </Link>
                monte tout en haut du pic ! Champion du monde !!
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        onClick={() => setMedia("randonnees/002/030.jpg")}
                        src={require("../img/randonnees/002/030.jpg").default}
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
                        onClick={() => setMedia("randonnees/002/031.jpg")}
                        src={require("../img/randonnees/002/031.jpg").default}
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
                        onClick={() => setMedia("randonnees/002/032.jpg")}
                        src={require("../img/randonnees/002/032.jpg").default}
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
                        onClick={() => setMedia("randonnees/002/033.jpg")}
                        src={require("../img/randonnees/002/033.jpg").default}
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
                <strong>Descente</strong>
                <br />
                Après nos aventures en haute altitude, le moment est venu de
                redescendre. On se retrouve très rapidement en bas, à regretter
                que la deuxième partie de la randonnée soit passée si vite.
                C'est décidé, on remet ça demain ! Un petit passage devant un "
                <Link className="tag is-rounded" to="/galerie/lac">
                  lac
                </Link>
                " et nous voilà rentrés, près à accueillir notre 4<sup>ème</sup>
                lascar.
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-3">
                <article className="tile is-child card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        onClick={() => setMedia("randonnees/002/035.jpg")}
                        src={require("../img/randonnees/002/035.jpg").default}
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
                        onClick={() => setMedia("randonnees/002/036.jpg")}
                        src={require("../img/randonnees/002/036.jpg").default}
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
                        onClick={() => setMedia("randonnees/002/037.jpg")}
                        src={require("../img/randonnees/002/037.jpg").default}
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
                        onClick={() => setMedia("randonnees/002/038.jpg")}
                        src={require("../img/randonnees/002/038.jpg").default}
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
      <Link className="hero is-medium is-primary" to="/randonnee-3">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">Jour 3 - Col du Portet</p>
            <p className="subtitle">Lire la suite</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Rando2;
