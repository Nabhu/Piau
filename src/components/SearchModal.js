import React from "react";
import { Link } from "react-router-dom";

import { closeModal } from "../functions/front";

function SearchModal(props) {
  const setFilter = (e, filter = false) => {
    if (filter) {
      console.log(filter);
      document
        .querySelectorAll(`#is-search-modal .panel-block:not(.is-${filter})`)
        .forEach((old_filter) => old_filter.classList.remove("is-visible"));
      document
        .querySelectorAll(`#is-search-modal .panel-block.is-${filter}`)
        .forEach((new_filter) => new_filter.classList.add("is-visible"));
    } else {
      document
        .querySelectorAll(`#is-search-modal .panel-block`)
        .forEach((new_filter) => new_filter.classList.add("is-visible"));
    }
    document
      .querySelector(".panel-tabs .is-active")
      .classList.remove("is-active");

    e.target.classList.add("is-active");
  };
  return (
    <div className="modal" id="is-search-modal">
      <div className="modal-background" onClick={(e) => closeModal(e)}></div>
      <div className="modal-content">
        <article className="panel is-primary">
          <p className="panel-heading">Votre recherche</p>
          <div className="panel-tabs">
            <div className="buttons are-small">
              <button
                className="is-active button is-rounded"
                onClick={(e) => setFilter(e)}
              >
                Tous
              </button>
              <button
                className="button is-rounded"
                onClick={(e) => setFilter(e, "place")}
              >
                Lieux
              </button>
              <button
                className="button is-rounded"
                onClick={(e) => setFilter(e, "person")}
              >
                Personnes
              </button>
              <button
                className="button is-rounded"
                onClick={(e) => setFilter(e, "tag")}
              >
                Mot clé
              </button>
            </div>
          </div>
          <Link
            className="panel-block is-place is-visible"
            to="/galerie/col-du-portet"
          >
            <span className="panel-icon">
              <ion-icon name="earth-outline"></ion-icon>
            </span>
            Col du Portet
          </Link>
          <Link
            className="panel-block is-place is-visible"
            to="/galerie/lac-d-aubert"
          >
            <span className="panel-icon">
              <ion-icon name="earth-outline"></ion-icon>
            </span>
            Lac d'Aubert
          </Link>
          <Link
            className="panel-block is-place is-visible"
            to="/galerie/lac-d-aumar"
          >
            <span className="panel-icon">
              <ion-icon name="earth-outline"></ion-icon>
            </span>
            Lac d'Aumar
          </Link>
          <Link
            className="panel-block is-place is-visible"
            to="/galerie/lac-d-oredon"
          >
            <span className="panel-icon">
              <ion-icon name="earth-outline"></ion-icon>
            </span>
            Lac d'Orédon
          </Link>
          <Link
            className="panel-block is-place is-visible"
            to="/galerie/lac-de-loule"
          >
            <span className="panel-icon">
              <ion-icon name="earth-outline"></ion-icon>
            </span>
            Lac de Loule
          </Link>
          <Link className="panel-block is-place is-visible" to="/galerie/piau">
            <span className="panel-icon">
              <ion-icon name="earth-outline"></ion-icon>
            </span>
            Piau
          </Link>
          <Link
            className="panel-block is-person is-visible"
            to="/galerie/aurelien"
          >
            <span className="panel-icon">
              <ion-icon name="person-outline"></ion-icon>
            </span>
            Aurélien
          </Link>
          <Link
            className="panel-block is-person is-visible"
            to="/galerie/guillaume"
          >
            <span className="panel-icon">
              <ion-icon name="person-outline"></ion-icon>
            </span>
            Guillaume
          </Link>
          <Link
            className="panel-block is-person is-visible"
            to="/galerie/karyl"
          >
            <span className="panel-icon">
              <ion-icon name="person-outline"></ion-icon>
            </span>
            Karyl
          </Link>
          <Link
            className="panel-block is-person is-visible"
            to="/galerie/thomas"
          >
            <span className="panel-icon">
              <ion-icon name="person-outline"></ion-icon>
            </span>
            Thomas
          </Link>
          <Link className="panel-block is-tag is-visible" to="/galerie/apero">
            <span className="panel-icon">
              <ion-icon name="pricetag-outline"></ion-icon>
            </span>
            Apéro
          </Link>
          <Link className="panel-block is-tag is-visible" to="/galerie/lac">
            <span className="panel-icon">
              <ion-icon name="pricetag-outline"></ion-icon>
            </span>
            Lac
          </Link>
          <Link
            className="panel-block is-tag is-visible"
            to="/galerie/mer-de-nuages"
          >
            <span className="panel-icon">
              <ion-icon name="pricetag-outline"></ion-icon>
            </span>
            Mer de nuages
          </Link>
          <Link
            className="panel-block is-tag is-visible"
            to="/galerie/timelapse"
          >
            <span className="panel-icon">
              <ion-icon name="pricetag-outline"></ion-icon>
            </span>
            Timelapse
          </Link>
        </article>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={(e) => closeModal(e)}
      ></button>
    </div>
  );
}

export default SearchModal;
