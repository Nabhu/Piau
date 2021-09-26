import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Rando1 from "./pages/Rando1";
import Rando2 from "./pages/Rando2";
import Rando3 from "./pages/Rando3";
import Galerie from "./pages/galerie/Galerie";
import GalerieApero from "./pages/galerie/Apero";
import GalerieAurelien from "./pages/galerie/Aurelien";
import GalerieColDuPortet from "./pages/galerie/ColDuPortet";
import GalerieGuillaume from "./pages/galerie/Guillaume";
import GalerieKaryl from "./pages/galerie/Karyl";
import GalerieLac from "./pages/galerie/Lac";
import GalerieLacDAubert from "./pages/galerie/LacDAubert";
import GalerieLacDAumar from "./pages/galerie/LacDAumar";
import GalerieLacDeLoule from "./pages/galerie/LacDeLoule";
import GalerieLacDOredon from "./pages/galerie/LacDOredon";
import GalerieMerDeNuages from "./pages/galerie/MerDeNuages";
import GaleriePiau from "./pages/galerie/Piau";
import GalerieThomas from "./pages/galerie/Thomas";
import GalerieTimelapse from "./pages/galerie/Timelapse";
import SearchModal from "./components/SearchModal";
import ScrollTop from "./components/ScrollTop";
import { openSearchModal } from "./functions/front";
import audio from "./music/music.mp3";

function App() {
  const burger_menu = useRef(null);
  const music_player = useRef(null);

  let music = new Audio(audio);

  useEffect(() => {
    playMusic();
  });

  const playMusic = () => {
    const play_promise = music.play();

    if (play_promise !== undefined) {
      play_promise
        .then((_) => {
          music_player.current.classList.toggle("is-playing");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const toggleMusic = (e) => {
    music_player.current.classList.toggle("is-playing");
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  };

  return (
    <Router
      basename={
        !process.env.NODE_ENV || process.env.NODE_ENV === "development"
          ? ""
          : "/Piau"
      }
    >
      <ScrollTop>
        <div>
          <nav
            className="navbar is-fixed-top is-transparent is-spaced"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <div
                className="navbar-burger"
                onClick={() => {
                  burger_menu.current.classList.toggle("is-active");
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="navbar-menu" ref={burger_menu}>
              <div className="navbar-start">
                <Link className="navbar-item" to="/randonnee-1">
                  Néouvielle
                </Link>
                <Link className="navbar-item" to="/randonnee-2">
                  Pic de Piau
                </Link>
                <Link className="navbar-item" to="/randonnee-3">
                  Col du Portet
                </Link>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <button
                      className="button"
                      id="is-search-control"
                      onClick={openSearchModal}
                    >
                      <span className="icon">
                        <ion-icon name="search-outline"></ion-icon>
                      </span>
                    </button>
                  </p>
                  <p className="control">
                    <Link className="button" to="/galerie">
                      <span className="icon">
                        <ion-icon name="grid-outline"></ion-icon>
                      </span>
                    </Link>
                  </p>
                  <p className="control">
                    <button
                      className="button is-player"
                      onClick={toggleMusic}
                      ref={music_player}
                    >
                      <div className="is-pause">
                        <span className="icon">
                          <ion-icon name="pause-outline"></ion-icon>
                        </span>
                      </div>
                      <div className="is-play">
                        <span className="icon">
                          <ion-icon name="play-outline"></ion-icon>
                        </span>
                      </div>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/randonnee-1">
              <Rando1 />
            </Route>
            <Route exact path="/randonnee-2">
              <Rando2 />
            </Route>
            <Route exact path="/randonnee-3">
              <Rando3 />
            </Route>
            <Route exact path="/galerie">
              <Galerie />
            </Route>
            <Route exact path="/galerie/apero">
              <GalerieApero />
            </Route>
            <Route exact path="/galerie/aurelien">
              <GalerieAurelien />
            </Route>
            <Route exact path="/galerie/col-du-portet">
              <GalerieColDuPortet />
            </Route>
            <Route exact path="/galerie/guillaume">
              <GalerieGuillaume />
            </Route>
            <Route exact path="/galerie/karyl">
              <GalerieKaryl />
            </Route>
            <Route exact path="/galerie/lac">
              <GalerieLac />
            </Route>
            <Route exact path="/galerie/lac-d-aubert">
              <GalerieLacDAubert />
            </Route>
            <Route exact path="/galerie/lac-d-aumar">
              <GalerieLacDAumar />
            </Route>
            <Route exact path="/galerie/lac-de-loule">
              <GalerieLacDeLoule />
            </Route>
            <Route exact path="/galerie/lac-d-oredon">
              <GalerieLacDOredon />
            </Route>
            <Route exact path="/galerie/mer-de-nuages">
              <GalerieMerDeNuages />
            </Route>
            <Route exact path="/galerie/piau">
              <GaleriePiau />
            </Route>
            <Route exact path="/galerie/thomas">
              <GalerieThomas />
            </Route>
            <Route exact path="/galerie/timelapse">
              <GalerieTimelapse />
            </Route>
          </Switch>
          <footer className="footer">
            {/* <audio id="is-music-player" autoPlay>
              <source
                src={require("./music/music.mp3").default}
                type="audio/mpeg"
              />
            </audio> */}

            <SearchModal />

            <div className="container content is-footer-container">
              <p className="has-text-centered">
                Site créé par{" "}
                <a
                  href="mailto:bonjour@nabhu.fr"
                  target="_blank"
                  rel="noreferrer"
                >
                  Thomas Dubois
                </a>
              </p>
              <div className="columns section">
                <div className="column">
                  <div className="block">
                    <p className="subtitle">Suivre Aurélien</p>
                    <div className="tags">
                      <a
                        className="tag is-light"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/jonasaurelien33/"
                      >
                        <span className="icon">
                          <ion-icon name="logo-instagram"></ion-icon>
                        </span>
                        <span>jonasaurelien33</span>
                      </a>
                    </div>
                  </div>
                  <div className="block">
                    <p className="subtitle">Suivre Guillaume</p>
                    <div className="tags">
                      <a
                        className="tag is-light"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/gudrillaud/"
                      >
                        <span className="icon">
                          <ion-icon name="logo-instagram"></ion-icon>
                        </span>
                        <span>gudrillaud</span>
                      </a>
                    </div>
                  </div>
                  <div className="block">
                    <p className="subtitle">Suivre Karyl</p>
                    <div className="tags">
                      <a
                        className="tag is-light"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/karyl.jf/"
                      >
                        <span className="icon">
                          <ion-icon name="logo-instagram"></ion-icon>
                        </span>
                        <span>karyl.jf</span>
                      </a>
                    </div>
                  </div>
                  <div className="block">
                    <p className="subtitle">Suivre Thomas</p>
                    <div className="tags">
                      <a
                        className="tag is-light"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/_nabhu/"
                      >
                        <span className="icon">
                          <ion-icon name="logo-instagram"></ion-icon>
                        </span>
                        <span>_nabhu</span>
                      </a>
                      <a
                        className="tag is-light"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/_nabhu.cycling/"
                      >
                        <span className="icon">
                          <ion-icon name="logo-instagram"></ion-icon>
                        </span>
                        <span>_nabhu.cycling</span>
                      </a>
                      <a
                        className="tag is-light"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.tiktok.com/@_nabhu"
                      >
                        <span className="icon">
                          <ion-icon name="logo-tiktok"></ion-icon>
                        </span>
                        <span>_nabhu</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="block">
                    <p className="subtitle">Musique</p>
                    <div className="content is-small">
                      La douce mélodie que vous entendez en fond sonore, c'est
                      l'album "V", produit par Lane 8, que nous avons écouté en
                      boucle pendant nos aventures pyrénéennes. Il est
                      disponible sur{" "}
                      <a
                        href="https://open.spotify.com/album/0u3GrHZ9EeJoOjB4QD0q8H?si=NS-cuUITQMWt0FA-yivefA&dl_branch=1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Spotify
                      </a>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="block is-tags-section">
                    <p className="subtitle">
                      Les prochaines évolutions du site
                    </p>
                    <div className="tags has-addons">
                      <span className="tag is-dark">Moteur de recherche</span>
                      <span className="tag is-primary">13/08/21</span>
                    </div>
                    <div className="tags has-addons">
                      <span className="tag is-dark">Nos réseaux sociaux</span>
                      <span className="tag is-primary">13/08/21</span>
                    </div>
                    <div className="tags has-addons">
                      <span className="tag is-dark">Une page par tag</span>
                      <span className="tag is-info">En cours</span>
                    </div>
                    <div className="tags has-addons">
                      <span className="tag is-dark">Page galerie</span>
                      <span className="tag is-primary">13/08/21</span>
                    </div>
                    <div className="tags has-addons">
                      <span className="tag is-dark">Un logo</span>
                      <span className="tag is-danger">À faire</span>
                    </div>
                    <div className="tags has-addons">
                      <span className="tag is-dark">Musique Lane 8</span>
                      <span className="tag is-primary">13/08/21</span>
                    </div>
                    <div className="tags has-addons">
                      <span className="tag is-dark">Vidéos GoPro</span>
                      <span className="tag is-danger">À faire</span>
                    </div>
                    <div className="tags has-addons">
                      <span className="tag is-dark">Site administrable</span>
                      <span className="tag is-danger">À faire</span>
                    </div>
                    <div className="tags has-addons">
                      <span className="tag is-dark">Passer sur React</span>
                      <span className="tag is-primary">24/09/21</span>
                    </div>
                    <div className="tags has-addons">
                      <span className="tag is-dark">
                        Modifier les couleurs du site
                      </span>
                      <span className="tag is-danger">À faire</span>
                    </div>
                    <div className="tags has-addons">
                      <span className="tag is-dark">
                        Mode avancé pour voir les photos/vidéos dossier
                      </span>
                      <span className="tag is-danger">À faire</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </ScrollTop>
    </Router>
  );
}

export default App;
