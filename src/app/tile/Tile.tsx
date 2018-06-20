import React, {Component, Fragment} from "react"

const styles = require("./Tile.sass")

type IProps = ITile & (ITileIcons | ITileMedia | ITileText)

interface ITile {
  swapOrderOnMobile?: boolean
}

interface IState {
  startVideo: boolean
}

interface ITileIcon {
  alt: string
  label: JSX.Element
  src: string
}

interface ITileIcons {
  icons: ITileIcon[]
  inverted?: true
  title: string | JSX.Element
  type: "icons"
}

interface ITileMedia {
  alt?: string
  src: string
  preview?: string
  media: "image" | "video"
  type: "media"
}

interface ITileText {
  inverted?: true
  secondary?: true
  title: string | JSX.Element
  type?: "text"
}

class TileComponent extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      startVideo: false,
    }
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

    const icons = props.icons.map((icon, key) => (
      <div key={key} className={styles.tileIcon}>
        <div className={styles.tileIconImg}>
          <img alt={icon.alt} src={icon.src} />
        </div>
        <div className={styles.tileIconLabel}>
          {icon.label}
        </div>
      </div>
    ))

    return (
      <div className={styleTile} data-order={this.props.swapOrderOnMobile}>
        <h2 className={styles.tileTitle}>{props.title}</h2>

        <div className={styles.tileIcons}>
          {icons}
        </div>
      </div>
    )
  }

  private renderImage(props: ITileMedia) {
    const style = {
      background: `url(${props.src}) center center`,
      backgroundSize: "cover",
    }

    return (
      <div className={styles.tileMedia} style={style} data-order={this.props.swapOrderOnMobile} />
    )
  }

  private renderMedia(props: ITileMedia) {
    if (props.media === "video") {
      return this.renderVideo(props)
    }

    return this.renderImage(props)
  }

  private renderVideo(props: ITileMedia) {
    const {startVideo} = this.state
    const style = props.preview ? {
      background: startVideo ? "#000000" : `url(${props.preview}) center center`,
      backgroundSize: "cover",
      cursor: "pointer",
    } : {}

    return (
      <div
        className={styles.tileMedia}
        data-order={this.props.swapOrderOnMobile}
        style={style}
        onClick={() => this.setState({startVideo: true})}>
        {startVideo && <iframe width="100%" height="100%" src={props.src} />}
      </div>
    )
  }

  private renderText(props: ITileText) {
    return (
      <div className={styles.tileTextBlue} data-order={this.props.swapOrderOnMobile}>
        <h2 className={styles.tileTitle}>{props.title}</h2>
        {this.props.children}
      </div>
    )
  }
}

export default TileComponent
