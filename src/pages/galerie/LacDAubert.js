import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";

function GalerieLacDAubert() {
  // Affichage DOM
  return (
    <div className="template-galerie">
      <ProgressBar />
      <section className="section container is-gallery-container">
        <nav className="breadcrumb is-small" aria-label="breadcrumbs">
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/galerie">Galerie</Link>
            </li>
            <li className="is-active">
              <Link to="/galerie/lac-d-aubert" aria-current="page">
                Lac d'Aubert
              </Link>
            </li>
          </ul>
        </nav>
        <p className="title">Page en construction</p>
      </section>

      <Link className="hero is-medium is-primary" to="/randonnee-1">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">Jour 1 - Néouvielle</p>
            <p className="subtitle">Découvre notre première aventure</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default GalerieLacDAubert;
