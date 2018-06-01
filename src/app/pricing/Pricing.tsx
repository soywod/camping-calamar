import React, {Component} from "react"

const styles = require("./Pricing.sass")
const adult = require("../../static/images/pricing/adult.png")
const child = require("../../static/images/pricing/child.png")
const baby = require("../../static/images/pricing/baby.png")
const car = require("../../static/images/pricing/car.png")
const moto = require("../../static/images/pricing/moto.png")
const caravane = require("../../static/images/pricing/caravane.png")
const miniBus = require("../../static/images/pricing/mini-bus.png")
const campingCar = require("../../static/images/pricing/camping-car.png")
const trailer = require("../../static/images/pricing/trailer.png")
const electric = require("../../static/images/pricing/electric.png")
const tent = require("../../static/images/pricing/tent.png")
const shower = require("../../static/images/pricing/shower.png")
const animals = require("../../static/images/pricing/animals.png")
const coin = require("../../static/images/pricing/coin.png")
const wifi = require("../../static/images/pricing/wifi.png")

class PricingComponent extends Component<{}, {}> {
  constructor(props: {}) {
    super(props)
  }

  public render() {
    return (
      <div className={styles.pricing}>
        <div className={styles.pricingColumn}>
          <div className={styles.pricingRow}>
            <div className={styles.pricingTitle}>
              <h2>Tarifs haute Saison</h2>
              <div>Du 15 mai au 10 septembre</div>
            </div>

            <div className={styles.pricingGridLeft}>
              <div className={styles.pricingGridRowTeal}>
                <span className={styles.pricingGridIcon}><img src={adult} alt="Adult pricing" /></span>
                <span className={styles.pricingGridTitle}>Adulte</span>
                <span className={styles.pricingGridPrice}>6,10 €/nuitée incl. 0,22 € Taxe de séjour</span>
              </div>
              <div className={styles.pricingGridRowTeal}>
                <span className={styles.pricingGridIcon}><img src={child} alt="Child pricing" /></span>
                <span className={styles.pricingGridTitle}>Enfant de 2 à 12 ans</span>
                <span className={styles.pricingGridPrice}>4,50 €/nuitée</span>
              </div>
              <div className={styles.pricingGridRowTeal}>
                <span className={styles.pricingGridIcon}><img src={baby} alt="Baby pricing" /></span>
                <span className={styles.pricingGridTitle}>Enfant de - de 2 ans</span>
                <span className={styles.pricingGridPrice}>gratuit</span>
              </div>
              <div className={styles.pricingGridRow}>
                <span className={styles.pricingGridIcon}><img src={car} alt="Car pricing" /></span>
                <span className={styles.pricingGridTitle}>Voiture</span>
                <span className={styles.pricingGridPrice}>2,20 €/nuitée</span>
              </div>
              <div className={styles.pricingGridRow}>
                <span className={styles.pricingGridIcon}><img src={moto} alt="Moto pricing" /></span>
                <span className={styles.pricingGridTitle}>Moto</span>
                <span className={styles.pricingGridPrice}>1,80 €/nuitée</span>
              </div>
              <div className={styles.pricingGridRow}>
                <span className={styles.pricingGridIcon}><img src={caravane} alt="Caravane pricing" /></span>
                <span className={styles.pricingGridTitle}>Caravane</span>
                <span className={styles.pricingGridPrice}>3 €/nuitée</span>
              </div>
              <div className={styles.pricingGridRow}>
                <span className={styles.pricingGridIcon}><img src={miniBus} alt="Mini-bus pricing" /></span>
                <span className={styles.pricingGridTitle}>Mini Bus</span>
                <span className={styles.pricingGridPrice}>3 €/nuitée</span>
              </div>
              <div className={styles.pricingGridRow}>
                <span className={styles.pricingGridIcon}><img src={campingCar} alt="Camping car pricing" /></span>
                <span className={styles.pricingGridTitle}>Camping car</span>
                <span className={styles.pricingGridPrice}>5 €/nuitée</span>
              </div>
              <div className={styles.pricingGridRow}>
                <span className={styles.pricingGridIcon}><img src={trailer} alt="Trailer pricing" /></span>
                <span className={styles.pricingGridTitle}>Remorque</span>
                <span className={styles.pricingGridPrice}>1,50 €/nuitée</span>
              </div>
              <div className={styles.pricingGridRow}>
                <span className={styles.pricingGridIcon}><img src={electric} alt="Electric pricing" /></span>
                <span className={styles.pricingGridTitle}>Branchement électrique</span>
                <span className={styles.pricingGridPrice}>3 €/nuitée</span>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.pricingTitle}>
              <h2>Tarifs basse Saison</h2>
              <div>Du 16 avril au 14 mai/du 11 septembre au 21 octobre</div>
            </div>

            <div className={styles.pricingGridRight}>
              <div className={styles.pricingGridRowTeal}>
                <span className={styles.pricingGridIcon}><img src={adult} alt="Adult pricing" /></span>
                <span className={styles.pricingGridTitle}>Adulte</span>
                <span className={styles.pricingGridPrice}>5,80 €/nuitée incl. 0,22 € Taxe de séjour</span>
              </div>
              <div className={styles.pricingGridRowTeal}>
                <span className={styles.pricingGridIcon}><img src={child} alt="Child pricing" /></span>
                <span className={styles.pricingGridTitle}>Enfant de 2 à 12 ans</span>
                <span className={styles.pricingGridPrice}>4,10 €/nuitée</span>
              </div>
              <div className={styles.pricingGridRowTeal}>
                <span className={styles.pricingGridIcon}><img src={baby} alt="Baby pricing" /></span>
                <span className={styles.pricingGridTitle}>Enfant de - de 2 ans</span>
                <span className={styles.pricingGridPrice}>gratuit</span>
              </div>
              <div className={styles.pricingGridRow}>
                <span className={styles.pricingGridIcon}><img src={car} alt="Car pricing" /></span>
                <span className={styles.pricingGridTitle}>Voiture</span>
                <span className={styles.pricingGridPrice}>2 €/nuitée</span>
              </div>
              <div className={styles.pricingGridRow}>
                <span className={styles.pricingGridIcon}><img src={moto} alt="Moto pricing" /></span>
                <span className={styles.pricingGridTitle}>Moto</span>
                <span className={styles.pricingGridPrice}>1,50 €/nuitée</span>
              </div>
              <div className={styles.pricingGridRow}>
                <span className={styles.pricingGridIcon}><img src={caravane} alt="Caravane pricing" /></span>
                <span className={styles.pricingGridTitle}>Caravane</span>
                <span className={styles.pricingGridPrice}>2,50 €/nuitée</span>
              </div>
              <div className={styles.pricingGridRow}>
                <span className={styles.pricingGridIcon}><img src={miniBus} alt="Mini-bus pricing" /></span>
                <span className={styles.pricingGridTitle}>Mini Bus</span>
                <span className={styles.pricingGridPrice}>2,50 €/nuitée</span>
              </div>
              <div className={styles.pricingGridRow}>
                <span className={styles.pricingGridIcon}><img src={campingCar} alt="Camping car pricing" /></span>
                <span className={styles.pricingGridTitle}>Camping car</span>
                <span className={styles.pricingGridPrice}>4 €/nuitée</span>
              </div>
              <div className={styles.pricingGridRow}>
                <span className={styles.pricingGridIcon}><img src={trailer} alt="Trailer pricing" /></span>
                <span className={styles.pricingGridTitle}>Remorque</span>
                <span className={styles.pricingGridPrice}>1,30 €/nuitée</span>
              </div>
              <div className={styles.pricingGridRow}>
                <span className={styles.pricingGridIcon}><img src={electric} alt="Electric pricing" /></span>
                <span className={styles.pricingGridTitle}>Branchement électrique</span>
                <span className={styles.pricingGridPrice}>3 €/nuitée</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <span className={styles.pricingGridIcon}><img src={tent} alt="Tent pricing" /></span>
            <span className={styles.pricingGridTitle}>L'emplacement et la tente sont gratuits</span>
          </div>

          <div>
            <span className={styles.pricingGridIcon}><img src={shower} alt="Shower pricing" /></span>
            <span className={styles.pricingGridTitle}>Les douches chaudes sont gratuites</span>
          </div>

          <div>
            <span className={styles.pricingGridIcon}><img src={animals} alt="Animals pricing" /></span>
            <span className={styles.pricingGridTitle}>Les animaux sont acceptés, leur séjour est gratuit</span>
          </div>

          <div>
            <span className={styles.pricingGridIcon}><img src={coin} alt="Wash machine coins pricing" /></span>
            <span className={styles.pricingGridTitle}>Jeton de machine à laver : 5 € (lessive fournie)</span>
          </div>
        </div>
      </div>
    )
  }
}

export default PricingComponent
