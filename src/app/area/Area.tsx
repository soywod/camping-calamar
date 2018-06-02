import React, {Component, Fragment} from "react"

import Carousel from "../carousel/Carousel"
import Footer from "../footer/Footer"
import Homing from "../homing/Homing"
import TilePair from "../tile-pair/TilePair"
import Tile from "../tile/Tile"

const styles = require("./Area.sass")
const header = require("../../static/images/area/header.png")
const bar = require("../../static/images/area/bar.png")
const plants = require("../../static/images/area/plants.png")
const scubaDiving = require("../../static/images/area/scuba-diving.png")
const carouselDemo = require("../../static/images/area/carousel-demo.png")

const carouselImages = [
  {alt: "Carousel demo", src: carouselDemo},
  {alt: "Carousel demo", src: carouselDemo},
]

class AreaComponent extends Component<{}, {}> {
  constructor(props: {}) {
    super(props)
  }

  public render() {
    return (
      <Fragment>
        <Homing src={header} title="Alentours" />

        <TilePair>
          <Tile swapOrderOnMobile type="media" media="image" alt="Bar & restaurant" src={bar} />
          <Tile title="Pour les gourmands">
            <ul>
              <li>
                <strong>Pratique</strong><br /><br />
                Un supermarché et une boulangerie à 500m<br />
                Un magasin Bio à 1km
              </li>

              <li>
                <strong>Et pour les gourmands</strong><br /><br />
                Des restaurants aux abords du camping
              </li>
            </ul>
          </Tile>
        </TilePair>

        <TilePair>
          <Tile title={<Fragment>Pour les adeptes de<br/>nature & botanique</Fragment>}>
            <ul>
              <li>Le parc Galéa</li>
              <li>La Ferme Bordeo (Essences Naturelles Corse)</li>
              <li>Un sentier botanique</li>
            </ul>
          </Tile>
          <Tile type="media" media="image" alt="Plants & cactus" src={plants} />
        </TilePair>

        <TilePair>
          <Tile swapOrderOnMobile type="media" media="image" alt="Scuba diving" src={scubaDiving} />
          <Tile title="Pour les sportifs">
            <ul>
              <li>Sentiers de randonnées pédestres (Mare a mare, a Scupiccia ...)</li>
              <li>Sentier botanique</li>
              <li>Randonnées à cheval</li>
              <li>École de plongée, circuit de VTT, site de parapente</li>
              <li>Location de bateaux</li>
              <li>Cascade de l'Ucelluline</li>
              <li>Musée de Cervione et d'Aléria</li>
              <li>
                Et pour la culture musée...<br />
                Chapelles classées, cinéma en plein air
              </li>
            </ul>
          </Tile>
        </TilePair>

        <Carousel images={carouselImages} />

        <Footer />
      </Fragment>
    )
  }
}

export default AreaComponent
