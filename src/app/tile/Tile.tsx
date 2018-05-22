import React, {Component, Fragment} from "react"

const styles = require("./Tile.sass")

type IProps = ITileIcons | ITileMedia | ITileText

interface ITileIcon {
  alt: string
  label: JSX.Element
  src: string
}

interface ITileIcons {
  icons: ITileIcon[]
  inverted?: true
  title: string
  type: "icons"
}

interface ITileMedia {
  alt?: string
  src: string
  media: "image" | "video"
  type: "media"
}

interface ITileText {
  inverted?: true
  secondary?: true
  title: string
  type?: "text"
}

class TileComponent extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props)
  }

  public render() {
    const {props} = this

    if (props.type === "icons") {
      return this.renderIcons(props as ITileIcons)
    } else if (props.type === "media") {
      return this.renderMedia(props as ITileMedia)
    } else {
      return this.renderText(props as ITileText)
    }
  }

  private renderIcons(props: ITileIcons) {
    const styleTile = props.inverted
      ? styles.tileTextTealInverted
      : styles.tileTextTeal

    const icons = props.icons.map((icon) => (
      <div className={styles.tileIcon}>
        <div className={styles.tileIconImg}>
          <img alt={icon.alt} src={icon.src} />
        </div>
        <div className={styles.tileIconLabel}>
          {icon.label}
        </div>
      </div>
    ))

    return (
      <div className={styleTile}>
        <h2 className={styles.tileTitle}>{props.title}</h2>

        <div className={styles.tileIcons}>
          {icons}
        </div>
      </div>
    )
  }

  private renderMedia(props: ITileMedia) {
    const media = props.media === "image"
      ? <img src={props.src} alt={props.alt || ""} />
      : <iframe width="100%" height="100%" src={props.src} />

    return (
      <Fragment>
        <div className={styles.tileMedia}>
          {media}
        </div>
      </Fragment>
    )
  }

  private renderText(props: ITileText) {
    return (
      <Fragment>
        <div className={styles.tileTextBlue}>
          <h2 className={styles.tileTitle}>{props.title}</h2>
          {this.props.children}
        </div>
      </Fragment>
    )
  }
}

export default TileComponent
