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

interface Bungalows {
  period1: string
  period2: string
  period3: string
}

interface Season {
  adult: string
  campingCar: string
  car: string
  caravane: string
  child1: string
  child2: string
  electric: string
  miniBus: string
  moto: string
  trailer: string
}

interface Prices {
  bungalows: Bungalows
  frigo: string
  highSeason: Season
  lowSeason: Season
  wifi1d: string
  wifi3d: string
  wifi7d: string
}

interface State {
  prices: Prices
}

class PricingComponent extends Component<{}, State> {
  constructor(props: {}) {
    super(props)

    this.state = {
      prices: {
        bungalows: {
          period1: "",
          period2: "",
          period3: "",
        },
        frigo: "",
        highSeason: {
          adult: "",
          campingCar: "",
          car: "",
          caravane: "",
          child1: "",
          child2: "",
          electric: "",
          miniBus: "",
          moto: "",
          trailer: "",
        },
        lowSeason: {
          adult: "",
          campingCar: "",
          car: "",
          caravane: "",
          child1: "",
          child2: "",
          electric: "",
          miniBus: "",
          moto: "",
          trailer: "",
        },
        wifi1d: "",
        wifi3d: "",
        wifi7d: "",
      },
    }
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
                <span className={styles.item}>{this.state.prices.highSeason.adult}/nuitée</span>
              </div>

              <div className={styles.gridRowTeal}>
                <span className={styles.icon}><img src={child} alt="Child pricing" /></span>
                <span className={styles.itemTeal}>Enfant de 2 à 12 ans</span>
                <span className={styles.item}>{this.state.prices.highSeason.child2}/nuitée</span>
              </div>

              <div className={styles.gridRowTeal}>
                <span className={styles.icon}><img src={baby} alt="Baby pricing" /></span>
                <span className={styles.itemTeal}>Enfant de - de 2 ans</span>
                <span className={styles.item}>gratuit</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={car} alt="Car pricing" /></span>
                <span className={styles.itemTeal}>Voiture</span>
                <span className={styles.item}>{this.state.prices.highSeason.car}/nuitée</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={moto} alt="Moto pricing" /></span>
                <span className={styles.itemTeal}>Moto</span>
                <span className={styles.item}>{this.state.prices.highSeason.moto}/nuitée</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={caravane} alt="Caravane pricing" /></span>
                <span className={styles.itemTeal}>Caravane</span>
                <span className={styles.item}>{this.state.prices.highSeason.caravane}/nuitée</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={miniBus} alt="Mini-bus pricing" /></span>
                <span className={styles.itemTeal}>Mini Bus</span>
                <span className={styles.item}>{this.state.prices.highSeason.miniBus}/nuitée</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={campingCar} alt="Camping car pricing" /></span>
                <span className={styles.itemTeal}>Camping car</span>
                <span className={styles.item}>{this.state.prices.highSeason.campingCar}/nuitée</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={trailer} alt="Trailer pricing" /></span>
                <span className={styles.itemTeal}>Remorque</span>
                <span className={styles.item}>{this.state.prices.highSeason.trailer}/nuitée</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={electric} alt="Electric pricing" /></span>
                <span className={styles.itemTeal}>Branchement électrique</span>
                <span className={styles.item}>{this.state.prices.highSeason.electric}/nuitée</span>
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
                <span className={styles.item}>{this.state.prices.lowSeason.adult}/nuitée</span>
              </div>

              <div className={styles.gridRowTeal}>
                <span className={styles.icon}><img src={child} alt="Child pricing" /></span>
                <span className={styles.itemTeal}>Enfant de 2 à 12 ans</span>
                <span className={styles.item}>{this.state.prices.lowSeason.child2}/nuitée</span>
              </div>

              <div className={styles.gridRowTeal}>
                <span className={styles.icon}><img src={baby} alt="Baby pricing" /></span>
                <span className={styles.itemTeal}>Enfant de - de 2 ans</span>
                <span className={styles.item}>gratuit</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={car} alt="Car pricing" /></span>
                <span className={styles.itemTeal}>Voiture</span>
                <span className={styles.item}>{this.state.prices.lowSeason.car}/nuitée</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={moto} alt="Moto pricing" /></span>
                <span className={styles.itemTeal}>Moto</span>
                <span className={styles.item}>{this.state.prices.lowSeason.moto}/nuitée</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={caravane} alt="Caravane pricing" /></span>
                <span className={styles.itemTeal}>Caravane</span>
                <span className={styles.item}>{this.state.prices.lowSeason.caravane}/nuitée</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={miniBus} alt="Mini-bus pricing" /></span>
                <span className={styles.itemTeal}>Mini Bus</span>
                <span className={styles.item}>{this.state.prices.lowSeason.miniBus}/nuitée</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={campingCar} alt="Camping car pricing" /></span>
                <span className={styles.itemTeal}>Camping car</span>
                <span className={styles.item}>{this.state.prices.lowSeason.campingCar}/nuitée</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={trailer} alt="Trailer pricing" /></span>
                <span className={styles.itemTeal}>Remorque</span>
                <span className={styles.item}>{this.state.prices.lowSeason.trailer}/nuitée</span>
              </div>

              <div className={styles.gridRow}>
                <span className={styles.icon}><img src={electric} alt="Electric pricing" /></span>
                <span className={styles.itemTeal}>Branchement électrique</span>
                <span className={styles.item}>{this.state.prices.lowSeason.electric}/nuitée</span>
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
                <span className={styles.item}>Location de frigos : {this.state.prices.frigo}/nuitée</span>
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
                  <span>{this.state.prices.wifi1d}</span>
                  <span>{this.state.prices.wifi3d}</span>
                  <span>{this.state.prices.wifi7d}</span>
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
                  <span>
                    Du 01 avril au 26 mai et du 22 septembre au 26 octobre :{" "}
                    {this.state.prices.bungalows.period1}/semaine
                  </span>
                  <span>
                    Du 26 mai au 07 juillet et du 25 août au 22 septembre :{" "}
                    {this.state.prices.bungalows.period2}/semaine
                  </span>
                  <span>
                    Du 07 juillet au 25 août :{" "}
                    {this.state.prices.bungalows.period3}/semaine
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  public componentDidMount() {
    const baseurl = "https://sheets.googleapis.com/v4/spreadsheets"
    const id = "1RHZ_mxpW_BP3VecSY7LVFXs1FoF0WSubSJJd74xl8hs"
    const key = "AIzaSyD-dnGTMFh321hPWU9j2Nsq8JjS-OBwP4E"

    fetch(`${baseurl}/${id}/values/B2:C20?key=${key}&majorDimension=COLUMNS`)
      .then((data: any) => data.json())
      .then((data: any) => data.values)
      .then((data: any) => this.setState({
        prices: {
          bungalows: {
            period1: data[0][16],
            period2: data[0][17],
            period3: data[0][18],
          },
          frigo: data[0][10],
          highSeason: {
            adult: data[0][0],
            campingCar: data[0][7],
            car: data[0][3],
            caravane: data[0][5],
            child1: data[0][2],
            child2: data[0][1],
            electric: data[0][9],
            miniBus: data[0][6],
            moto: data[0][4],
            trailer: data[0][8],
          },
          lowSeason: {
            adult: data[1][0],
            campingCar: data[1][7],
            car: data[1][3],
            caravane: data[1][5],
            child1: data[1][2],
            child2: data[1][1],
            electric: data[1][9],
            miniBus: data[1][6],
            moto: data[1][4],
            trailer: data[1][8],
          },
          wifi1d: data[0][11],
          wifi3d: data[0][12],
          wifi7d: data[0][13],
        },
      }))
  }
}

export default PricingComponent
