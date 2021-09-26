import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";

function Galerie() {
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
            <li className="is-active">
              <Link to="/galerie" aria-current="page">
                Galerie
              </Link>
            </li>
          </ul>
        </nav>
        <p className="title">
          Jour 1 - Néouvielle
          <span className="tag is-small is-rounded is-primary">87</span>
        </p>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/002.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/003.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/004.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-8">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/005_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/006.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/007.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/008.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/009.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/010.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/011.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/012.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/013.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/014.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/015.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/016_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/017.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/018.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/019.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/020.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/021.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/022.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/023.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/024.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/025.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/026.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/027.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/028_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/029_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/030_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/031_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/032.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/033.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/034_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/035.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/036.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/037.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/038.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/039.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/040.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/041.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/042.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/043_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/044_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/045.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/046.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/047.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/048.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/049.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/050.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/051.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/052.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/054.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/055.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-12">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/053.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/056_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/057.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/058_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/059_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/060_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/061.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/062.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/063.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/064.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/065.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-8">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/066_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-6">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/067_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-6">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/068_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-6">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/069_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-6">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/070_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/071.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/072.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/073.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/074.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/075.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/076.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/077.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/078.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/079_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/080_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/081.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/082_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/083.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/084.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/085.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/086.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/087.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/001/088.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <p className="title">
          Jour 2 - Pic de Piau
          <span className="tag is-small is-rounded is-primary">38</span>
        </p>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-8">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/002_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/003.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/004.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/005.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/006_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/007_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/008.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/009_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/010_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/011.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/012_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/013_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/014.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/015.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-12">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/017.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/016.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/018_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/019.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/020.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/021.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/022.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/023_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/024.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/025_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/026.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-8">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/027_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-6">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/028.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-6">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/029.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/030.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/031.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/032.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/033.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/034.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/035.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/036.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/037.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/038.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/002/039.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <p className="title">
          Jour 3 - Col du Portet
          <span className="tag is-small is-rounded is-primary">35</span>
        </p>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-8">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/002_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/003.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/004.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/005.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <video controls muted>
                  <source
                    src={require("../../img/randonnees/003/038.MP4").default}
                    type="video/mp4"
                  />
                </video>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/007.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/008.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/009.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/010.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/011.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <video controls muted>
                  <source
                    src={require("../../img/randonnees/003/012.MP4").default}
                    type="video/mp4"
                  />
                </video>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <video controls muted>
                  <source
                    src={require("../../img/randonnees/003/033.MP4").default}
                    type="video/mp4"
                  />
                </video>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/013.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/014.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/015.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/016.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/017.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/018.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/019.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/020.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/021.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/022.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/023.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/024.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/025.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <video controls muted>
                  <source
                    src={require("../../img/randonnees/003/034.MP4").default}
                    type="video/mp4"
                  />
                </video>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <video controls muted>
                  <source
                    src={require("../../img/randonnees/003/035.MP4").default}
                    type="video/mp4"
                  />
                </video>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <video controls muted>
                  <source
                    src={require("../../img/randonnees/003/036.MP4").default}
                    type="video/mp4"
                  />
                </video>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <video controls muted>
                  <source
                    src={require("../../img/randonnees/003/037.MP4").default}
                    type="video/mp4"
                  />
                </video>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/027.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/028.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/029.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/030.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/031.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/randonnees/003/032.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <p className="title">
          Piau-Engaly{" "}
          <span className="tag is-small is-rounded is-primary">5</span>
        </p>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/logement/002_01.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/logement/003.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/logement/004.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={require("../../img/logement/005.jpg").default}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child card">
              <div className="card-image">
                <video controls muted>
                  <source
                    src={require("../../img/logement/006.MP4").default}
                    type="video/mp4"
                  />
                </video>
              </div>
            </article>
          </div>
        </div>
        {/* <!--  --> */}
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

export default Galerie;
