import React, {Component, Fragment} from "react"

const styles = require("./Footer.sass")

class FooterComponent extends Component<{}, {}> {
  constructor(props: {}) {
    super(props)
  }

  public render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <article className={styles.footerInfo}>
            <div className={styles.footerTitle}>camping calamar</div>
            <div>Prunete, 20221 Cervione</div>
            <div>CORSE, FRANCE</div>
            <div>
              Tél (saison) : <span className={styles.footerTel}>(+33) 4 95 38 03 54</span>
            </div>
            <div>
              Tél (hors saison) : <span className={styles.footerTel}>(+33) 4 95 34 08 44</span>
            </div>
            <div>
              Mail : <a href="mailto:reservation@campingcalamar.eu" className={styles.footerUrl}>
                reservation@campingcalamar.eu
              </a>
            </div>
          </article>

          <article className={styles.footerNav}>
            <a href="#">Présentation</a>-
            <a href="">Infos & tarifs</a>-
            <a href="">Réservation</a>-
            <a href="">Alentours</a>-
            <a href="">Contact</a>
          </article>
        </div>

        <div className={styles.footerBottom}>
          Design & anim : Olivier DIAMANT www.dogms.com / Développement : Clément DOUIN
        </div>
      </footer>
    )
  }
}

export default FooterComponent
