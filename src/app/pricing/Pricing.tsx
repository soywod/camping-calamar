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
const animals = require("../../static/images/pricing/animals.png")
const tax = require("../../static/images/pricing/tax.png")
const fridge = require("../../static/images/pricing/fridge.png")
const bungalow = require("../../static/images/pricing/bungalow.png")
const wifi = require("../../static/images/pricing/wifi.png")

class PricingComponent extends Component<{}, {}> {
  constructor(props: {}) {
    super(props)
  }

  public render() {
    return (
      <div className={styles.pricing}>
        <div className={styles.table}>
          <div>
            <div className={styles.title}>
              <h2>Tarifs haute Saison</h2>
              <div>Du 15 mai au 10 septembre</div>
            </div>

            <div className={styles.gridColumnLeft}>
              <div className={styles.gridRowTeal}>
                <span className={styles.icon}><img src={adult} alt="Adult pricing" /></span>
                <span className={styles.itemTeal}>Adulte</span>
                <span className={styles.item}>6,70 €/nuitée</span>
              </div>

              <div className={styles.gridRowTeal}>
                <span className={styles.icon}><img src={child} alt="Child pricing" /></span>
                <span className={styles.itemTeal}>Enfant de 2 à 12 ans</span>
                <span className={styles.item}>5,10 €/nuitée</span>
              </div>

              <div className={styles.gridRowTeal}>
                <span className={styles.icon}><img src={baby} alt="Baby pricing" /></span>
                <span className={styles.itemTeal}>Enfant de - de 2 ans</span>
                <span className={styles.item}>gratuit</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={car} alt="Car pricing" /></span>
                <span className={styles.itemTeal}>Voiture</span>
                <span className={styles.item}>2,20 €/nuitée</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={moto} alt="Moto pricing" /></span>
                <span className={styles.itemTeal}>Moto</span>
                <span className={styles.item}>1,80 €/nuitée</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={caravane} alt="Caravane pricing" /></span>
                <span className={styles.itemTeal}>Caravane</span>
                <span className={styles.item}>3 €/nuitée</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={miniBus} alt="Mini-bus pricing" /></span>
                <span className={styles.itemTeal}>Mini Bus</span>
                <span className={styles.item}>3 €/nuitée</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={campingCar} alt="Camping car pricing" /></span>
                <span className={styles.itemTeal}>Camping car</span>
                <span className={styles.item}>5,50 €/nuitée</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={trailer} alt="Trailer pricing" /></span>
                <span className={styles.itemTeal}>Remorque</span>
                <span className={styles.item}>1,50 €/nuitée</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={electric} alt="Electric pricing" /></span>
                <span className={styles.itemTeal}>Branchement électrique</span>
                <span className={styles.item}>3 €/nuitée</span>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.title}>
              <h2>Tarifs basse Saison</h2>
              <div>Du 16 avril au 14 mai/du 11 septembre au 21 octobre</div>
            </div>

            <div className={styles.gridColumnRight}>
              <div className={styles.gridRowTeal}>
                <span className={styles.icon}><img src={adult} alt="Adult pricing" /></span>
                <span className={styles.itemTeal}>Adulte</span>
                <span className={styles.item}>5,80 €/nuitée</span>
              </div>

              <div className={styles.gridRowTeal}>
                <span className={styles.icon}><img src={child} alt="Child pricing" /></span>
                <span className={styles.itemTeal}>Enfant de 2 à 12 ans</span>
                <span className={styles.item}>4,10 €/nuitée</span>
              </div>

              <div className={styles.gridRowTeal}>
                <span className={styles.icon}><img src={baby} alt="Baby pricing" /></span>
                <span className={styles.itemTeal}>Enfant de - de 2 ans</span>
                <span className={styles.item}>gratuit</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={car} alt="Car pricing" /></span>
                <span className={styles.itemTeal}>Voiture</span>
                <span className={styles.item}>2 €/nuitée</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={moto} alt="Moto pricing" /></span>
                <span className={styles.itemTeal}>Moto</span>
                <span className={styles.item}>1,50 €/nuitée</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={caravane} alt="Caravane pricing" /></span>
                <span className={styles.itemTeal}>Caravane</span>
                <span className={styles.item}>2,50 €/nuitée</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={miniBus} alt="Mini-bus pricing" /></span>
                <span className={styles.itemTeal}>Mini Bus</span>
                <span className={styles.item}>2,50 €/nuitée</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={campingCar} alt="Camping car pricing" /></span>
                <span className={styles.itemTeal}>Camping car</span>
                <span className={styles.item}>4 €/nuitée</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={trailer} alt="Trailer pricing" /></span>
                <span className={styles.itemTeal}>Remorque</span>
                <span className={styles.item}>1,30 €/nuitée</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={electric} alt="Electric pricing" /></span>
                <span className={styles.itemTeal}>Branchement électrique</span>
                <span className={styles.item}>3 €/nuitée</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.table}>
          <div className={styles.gridTeal}>
            <div className={styles.columnLeft}>
              <div className={styles.row}>
                <span className={styles.icon}><img src={tent} alt="Tent pricing" /></span>
                <span className={styles.item}>L'emplacement et la tente sont gratuits</span>
              </div>

              <div className={styles.row}>
                <span className={styles.icon}><img src={tax} alt="Tax pricing" /></span>
                <span className={styles.item}>Taxe de séjour inclue</span>
              </div>

              <div className={styles.row}>
                <span className={styles.icon}><img src={animals} alt="Animals pricing" /></span>
                <span className={styles.item}>Les animaux sont acceptés, leur séjour est gratuit</span>
              </div>
            </div>

            <div className={styles.columnRight}>
              <div className={styles.row}>
                <span className={styles.icon}><img src={fridge} alt="Fridge pricing" /></span>
                <span className={styles.item}>Location de frigos : 3 €/nuitée</span>
              </div>

              <div className={styles.row}>
                <span className={styles.icon}><img src={wifi} alt="WiFi pricing" /></span>
                <span className={styles.itemWifi}>WiFi :</span>
                <span className={styles.itemWifiInfo}>
                  <span>1 Jour</span>
                  <span>3 Jours</span>
                  <span>7 Jours</span>
                </span>
                <span className={styles.itemWifiInfo}>
                  <span>-></span>
                  <span>-></span>
                  <span>-></span>
                </span>
                <span className={styles.itemWifiInfo}>
                  <span>2€</span>
                  <span>5€</span>
                  <span>10€</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.table}>
          <div className={styles.gridTeal}>
            <div className={styles.column}>
              <div className={styles.row}>
                <span className={styles.iconBungalow}><img src={bungalow} alt="Bungalow pricing" /></span>
                <span className={styles.itemBungalow}>Location de bungalows :</span>
                <span className={styles.item}>
                  <span>Du 01 avril au 26 mai et du 22 septembre au 26 octobre : 280€/semaine</span>
                  <span>Du 26 mai au 07 juillet et du 25 août au 22 septembre : 400€/semaine</span>
                  <span>Du 07 juillet au 25 août : 600€/semaine</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PricingComponent
