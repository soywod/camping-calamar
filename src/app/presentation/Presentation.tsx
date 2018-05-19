import React, {Component, Fragment} from "react"

const styles = require("./Presentation.sass")
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

class PresentationComponent extends Component<{}, {}> {
  constructor(props: {}) {
    super(props)
  }

  public render() {
    return (
      <Fragment>
        <div className={styles.plan}></div>
        <div className={styles.tileContainer}>
          <div className={styles.tileMedia}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/mZC7QVxoRgA" />
          </div>
          <div className={styles.tileTextBlue}>
            <h2 className={styles.tileTitle}>Le Camping en vidéo</h2>

            <p>"Emplacement 17" est un clip crée par l'un de nos fidèles campeurs en hommage au camping Calamar.</p>

            <p>
              Tous les campeurs présents cet été là se sont prêtés au jeu de la figuration
              pour donner vie à cette formidable "comédie musicale".
            </p>

            <p>Un très bon moyen de saisir l'ambiance sous les Oliviers...</p>
          </div>
        </div>
        <div className={styles.tileContainer}>
          <div className={styles.tileTextBlue}>
            <h2 className={styles.tileTitle}>Le camping en 3 mots...</h2>

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
          </div>
          <div className={styles.tileMedia}>
            <img src={sunset} alt="Drawing camping" />
          </div>
        </div>
        <div className={styles.tileContainer}>
          <div className={styles.tileTextTealInverted}>
            <h2 className={styles.tileTitle}>Loisirs</h2>

            <div className={styles.tileIcons}>
              <div className={styles.tileIcon}>
                <img src={beach} alt="Beach icon" />
              </div>
              <div className={styles.tileIcon}>
                <img src={volley} alt="Volley icon" />
              </div>
              <div className={styles.tileIcon}>
                <img src={snack} alt="Snack icon" />
              </div>
            </div>

            <div className={styles.tileLabels}>
              <div className={styles.tileIcon}>
                <span>Les pieds<br />dans l'eau</span>
              </div>
              <div className={styles.tileIcon}>
                <span>Beach<br />Volley</span>
              </div>
              <div className={styles.tileIcon}>
                <span>Snack<br />bar</span>
              </div>
            </div>

            <div className={styles.tileIcons}>
              <div className={styles.tileIcon}>
                <img src={babyFoot} alt="Baby-foot icon" />
              </div>
              <div className={styles.tileIcon}>
                <img src={reading} alt="Reading icon" />
              </div>
              <div className={styles.tileIcon}>
                <img src={pingPong} alt="Ping pong icon" />
              </div>
            </div>

            <div className={styles.tileLabels}>
              <div className={styles.tileIcon}>
                <span>Baby<br />foot</span>
              </div>
              <div className={styles.tileIcon}>
                <span>Livres<br />et BD</span>
              </div>
              <div className={styles.tileIcon}>
                <span>Tennis<br />de table</span>
              </div>
            </div>
          </div>
          <div className={styles.tileTextTeal}>
            <h2 className={styles.tileTitle}>Commodités</h2>

            <div className={styles.tileIcons}>
              <div className={styles.tileIcon}>
                <img src={area} alt="Area icon" />
              </div>
              <div className={styles.tileIcon}>
                <img src={fridge} alt="Fridge icon" />
              </div>
              <div className={styles.tileIcon}>
                <img src={bakery} alt="Bakery icon" />
              </div>
            </div>

            <div className={styles.tileLabels}>
              <div className={styles.tileIcon}>
                <span>Emplacement sous Oliviers<br />& Eucalyptus</span>
              </div>
              <div className={styles.tileIcon}>
                <span>Location<br />de frigos</span>
              </div>
              <div className={styles.tileIcon}>
                <span>Boulanger<br />tous les matins</span>
              </div>
            </div>

            <div className={styles.tileIcons}>
              <div className={styles.tileIcon}>
                <img src={shower} alt="Shower icon" />
              </div>
              <div className={styles.tileIcon}>
                <img src={grill} alt="Grill icon" />
              </div>
              <div className={styles.tileIcon}>
                <img src={washMachine} alt="Wash machine icon" />
              </div>
            </div>

            <div className={styles.tileLabels}>
              <div className={styles.tileIcon}>
                <span>Douches<br />& Sanitaires</span>
              </div>
              <div className={styles.tileIcon}>
                <span>Barbecue<br />en pierre</span>
              </div>
              <div className={styles.tileIcon}>
                <span>Machines<br />à laver</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.diapo}></div>
      </Fragment>
    )
  }
}

export default PresentationComponent
