import React, {Component} from "react"

import Carousel from "../carousel/Carousel"
import Footer from "../footer/Footer"
import Homing from "../homing/Homing"
import TilePair from "../tile-pair/TilePair"
import Tile from "../tile/Tile"

const styles = require("./Presentation.sass")
const header = require("../../static/images/presentation/header.png")
const sunset = require("../../static/images/presentation/sunset.png")
const beach = require("../../static/images/presentation/beach.png")
const pingPong = require("../../static/images/presentation/ping-pong.png")
const volley = require("../../static/images/presentation/volley.png")
const snack = require("../../static/images/presentation/snack.png")
const reading = require("../../static/images/presentation/reading.png")
const babyFoot = require("../../static/images/presentation/baby-foot.png")
const washMachine = require("../../static/images/presentation/wash-machine.png")
const bakery = require("../../static/images/presentation/bakery.png")
const fridge = require("../../static/images/presentation/fridge.png")
const shower = require("../../static/images/presentation/shower.png")
const grill = require("../../static/images/presentation/grill.png")
const area = require("../../static/images/presentation/area.png")
const carouselDemo = require("../../static/images/presentation/carousel-demo.png")

const tileLeftIcons = [
  {alt: "Beach", label: <span>Les pieds<br/>dans l'eau</span>, src: beach},
  {alt: "Volley", label: <span>Beach<br/>Volley</span>, src: volley},
  {alt: "Snack", label: <span>Snack<br/>Bar</span>, src: snack},
  {alt: "Baby foot", label: <span>Baby<br/>foot</span>, src: babyFoot},
  {alt: "Reading", label: <span>Livres<br/>et BD</span>, src: reading},
  {alt: "Ping pong", label: <span>Tennis<br/>de table</span>, src: pingPong},
]

const tileRightIcons = [
  {alt: "Area", label: <span>Emplacement sous Oliviers<br />& Eucalyptus</span>, src: area},
  {alt: "Fridge", label: <span>Location<br />de frigos</span>, src: fridge},
  {alt: "Bakery", label: <span>Boulanger<br />tous les matins</span>, src: bakery},
  {alt: "Shower", label: <span>Douches<br />& Sanitaires</span>, src: shower},
  {alt: "Grill", label: <span>Barbecue<br />en pierre</span>, src: grill},
  {alt: "Wash machine", label: <span>Machines<br />à laver</span>, src: washMachine},
]

const carouselImages = [
  {alt: "Carousel demo", src: carouselDemo},
  {alt: "Carousel demo", src: carouselDemo},
]

class PresentationComponent extends Component<{}, {}> {
  constructor(props: {}) {
    super(props)
  }

  public render() {
    return (
      <>
        <Homing src={header} title="Présentation" />

        <div id="content" />

        <TilePair>
          <Tile swapOrderOnMobile type="media" media="video" src="https://www.youtube.com/embed/mZC7QVxoRgA" />
          <Tile title="Le Camping en vidéo">
            <p>"Emplacement 17" est un clip crée par l'un de nos fidèles campeurs en hommage au camping Calamar.</p>
            <p>
              Tous les campeurs présents cet été là se sont prêtés au jeu de la figuration
              pour donner vie à cette formidable "comédie musicale".
            </p>
            <p>Un très bon moyen de saisir l'ambiance sous les Oliviers...</p>
          </Tile>
        </TilePair>

        <TilePair>
          <Tile title="Le camping en 3 mots...">
            <p>
              Situé sur la côte orientale de la Corse à 50 km au sud de Bastia, au coeur de la Costa Verde,
              le camping Calamar vous accueille dans une ambiance familiale.
            </p>
            <p>Sa situation en fait un point de départ idéal pour des excursions à la journée dans toute la Corse.</p>
            <p>
              Idéalement placé, "les pieds dans l'eau", au bord d'une plage de sable,
              dans un cadre verdoyant et ombragé. vous aurez la possibilité de choisir votre emplacement
              sous des oliviers ou des eucalyptus. Un barbecue vous permettra de
            </p>
          </Tile>
          <Tile type="media" media="image" alt="Camping sunset" src={sunset} />
        </TilePair>

        <TilePair>
          <Tile swapOrderOnMobile inverted type="icons" title="Loisirs" icons={tileLeftIcons} />
          <Tile type="icons" title="Commodités" icons={tileRightIcons} />
        </TilePair>

        <Carousel images={carouselImages} />

        <Footer />
      </>
    )
  }
}

export default PresentationComponent
