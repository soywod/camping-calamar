import React, {Component} from "react"

declare function init(): any
declare var createjs: any

const styles = require("./Home.sass")

interface IProps {
  loaded: boolean
}

interface IState {
  isFullWidth: boolean
}

class HomeComponent extends Component<IProps, IState> {
  private $canvas: HTMLDivElement | null
  private background: string

  constructor(props: IProps) {
    super(props)

    this.state = {
      isFullWidth: false,
    }
  }

  public render() {
    if (! this.props.loaded) {
      return null
    }

    const style = {
      background: `url(${this.background}) no-repeat center center`,
      backgroundSize: "cover",
    }

    const canvas = this.state.isFullWidth
      ? styles.canvasFullWidth
      : styles.canvasFullHeight

    return (
      <div ref={(ref) => this.$canvas = ref} id="animation_container" className={styles.container} style={style}>
        <canvas id="canvas" className={canvas}></canvas>
        <div id="dom_overlay_container" className={styles.overlay} />
      </div>
    )
  }

  public componentDidMount() {
    init() // From animation script provided by Adobe
    window.addEventListener("resize", this.onWindowResize)

    this.background = require
      .context("../../static/images/home", true)
      .keys()
      .map((path) => require(`../../static/images/home/${path.substring(2)}`))
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1])[0]

    if (this.props.loaded) {
      this.onWindowResize()
    }
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize)
    createjs.Ticker.reset()
  }

  private onWindowResize = () => {
    const width = this.$canvas && (this.$canvas.offsetWidth) || 0
    const height = window.innerHeight
    const isFullWidth = (width / height > 1.5)

    this.setState({isFullWidth})
  }
}

export default HomeComponent
