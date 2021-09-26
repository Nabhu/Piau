import React from "react";
import { Link } from "react-router-dom";

function Home() {
  // Affichage DOM
  return (
    <div className="template-home">
      <section className="hero is-primary is-fullheight-with-navbar header">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-8 left">
                <h1 className="title is-1">Pyrénées, nous voilà !</h1>
                <p className="subtitle">
                  Pour les premières randonnées de nos vies, on a décidé de
                  s'attaquer aux Pyrénées, en essayant de mélanger sport et
                  plaisir. À ton avis, pari réussi ?
                </p>

                <div className="columns">
                  <div className="column">
                    <Link className="card" to="/randonnee-1">
                      <div>
                        <div className="card-image">
                          <figure className="image">
                            <img
                              src={
                                require("../img/randonnees/001/001.jpg").default
                              }
                              alt="Parcours Strava de la randonnée 1"
                            />
                          </figure>
                        </div>
                        <div className="card-content">
                          <div className="content is-small">
                            <p className="title is-4">J1 - Néouvielle</p>
                            <p>
                              Aventure pour ceux qui ne savent pas quel est leur
                              niveau et qui cherchent donc "Rando familiale".
                            </p>
                          </div>
                        </div>
                      </div>
                      <footer className="card-footer">
                        <nav className="level">
                          <div className="level-item has-text-centered">
                            <div>
                              <p className="heading">Distance.</p>
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
                        </nav>
                      </footer>
                    </Link>
                  </div>
                  <div className="column">
                    <Link className="card" to="/randonnee-2">
                      <div>
                        <div className="card-image">
                          <figure className="image">
                            <img
                              src={
                                require("../img/randonnees/002/001.jpg").default
                              }
                              alt="Parcours Strava de la randonnée 2"
                            />
                          </figure>
                        </div>
                        <div className="card-content">
                          <div className="content is-small">
                            <p className="title is-4">J2 - Pic de Piau</p>
                            <p>
                              Aventure pour ceux qui se surestiment ou qui
                              veulent muscler leurs mollets.
                            </p>
                          </div>
                        </div>
                      </div>
                      <footer className="card-footer">
                        <nav className="level">
                          <div className="level-item has-text-centered">
                            <div>
                              <p className="heading">Distance.</p>
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
                        </nav>
                      </footer>
                    </Link>
                  </div>
                  <div className="column">
                    <Link className="card" to="/randonnee-3">
                      <div>
                        <div className="card-image">
                          <figure className="image">
                            <img
                              src={
                                require("../img/randonnees/003/001.JPG").default
                              }
                              alt="Parcours Strava de la randonnée 3"
                            />
                          </figure>
                        </div>
                        <div className="card-content">
                          <div className="content is-small">
                            <p className="title is-4">J3 - Col du Portet</p>
                            <p>
                              Aventure dite "parfaite", combinant les avantages
                              des 2 précédentes. C'est putaclic ? Je sais pas,
                              peut être...
                            </p>
                          </div>
                        </div>
                      </div>
                      <footer className="card-footer">
                        <nav className="level">
                          <div className="level-item has-text-centered">
                            <div>
                              <p className="heading">Distance.</p>
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
                        </nav>
                      </footer>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="column is-4 right">
                <div className="tile is-ancestor">
                  <div className="tile is-parent">
                    <article className="tile is-child card">
                      <div className="card-image">
                        <figure className="image">
                          <img
                            src={require("../img/home/001.jpg").default}
                            alt=""
                          />
                        </figure>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child card">
                      <div className="card-image">
                        <figure className="image">
                          <img
                            src={require("../img/home/002.jpg").default}
                            alt=""
                          />
                        </figure>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child card">
                      <div className="card-image">
                        <figure className="image">
                          <img
                            src={require("../img/home/003.jpg").default}
                            alt=""
                          />
                        </figure>
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
                            src={require("../img/home/004.jpg").default}
                            alt=""
                          />
                        </figure>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child card">
                      <div className="card-image">
                        <figure className="image">
                          <img
                            src={require("../img/home/005.jpg").default}
                            alt=""
                          />
                        </figure>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child card">
                      <div className="card-image">
                        <figure className="image">
                          <img
                            src={require("../img/home/006.jpg").default}
                            alt=""
                          />
                        </figure>
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
                            src={require("../img/home/007.jpg").default}
                            alt=""
                          />
                        </figure>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child card">
                      <div className="card-image">
                        <figure className="image">
                          <img
                            src={require("../img/home/008.jpg").default}
                            alt=""
                          />
                        </figure>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child card">
                      <div className="card-image">
                        <figure className="image">
                          <img
                            src={require("../img/home/009.jpg").default}
                            alt=""
                          />
                        </figure>
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
                            src={require("../img/home/010.jpg").default}
                            alt=""
                          />
                        </figure>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child card">
                      <div className="card-image">
                        <figure className="image">
                          <img
                            src={require("../img/home/011.jpg").default}
                            alt=""
                          />
                        </figure>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child card">
                      <div className="card-image">
                        <figure className="image">
                          <img
                            src={require("../img/home/012.jpg").default}
                            alt=""
                          />
                        </figure>
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
                            src={require("../img/home/013.jpg").default}
                            alt=""
                          />
                        </figure>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child card">
                      <div className="card-image">
                        <figure className="image">
                          <img
                            src={require("../img/home/014.jpg").default}
                            alt=""
                          />
                        </figure>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child card">
                      <div className="card-image">
                        <figure className="image">
                          <img
                            src={require("../img/home/015.jpg").default}
                            alt=""
                          />
                        </figure>
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
                            src={require("../img/home/016.jpg").default}
                            alt=""
                          />
                        </figure>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child card">
                      <div className="card-image">
                        <figure className="image">
                          <img
                            src={require("../img/home/017.jpg").default}
                            alt=""
                          />
                        </figure>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child card">
                      <div className="card-image">
                        <figure className="image">
                          <img
                            src={require("../img/home/018.jpg").default}
                            alt=""
                          />
                        </figure>
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
                            src={require("../img/home/019.jpg").default}
                            alt=""
                          />
                        </figure>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child card">
                      <div className="card-image">
                        <figure className="image">
                          <img
                            src={require("../img/home/020.jpg").default}
                            alt=""
                          />
                        </figure>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child card">
                      <div className="card-image">
                        <figure className="image">
                          <img
                            src={require("../img/home/021.jpg").default}
                            alt=""
                          />
                        </figure>
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
                            src={require("../img/home/022.jpg").default}
                            alt=""
                          />
                        </figure>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child card">
                      <div className="card-image">
                        <figure className="image">
                          <img
                            src={require("../img/home/023.jpg").default}
                            alt=""
                          />
                        </figure>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child card">
                      <div className="card-image">
                        <figure className="image">
                          <img
                            src={require("../img/home/024.jpg").default}
                            alt=""
                          />
                        </figure>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
