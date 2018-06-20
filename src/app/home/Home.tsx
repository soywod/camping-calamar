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

    const canvas = this.state.isFullWidth
      ? styles.canvasFullWidth
      : styles.canvasFullHeight

    return (
      <div ref={(ref) => this.$canvas = ref} id="animation_container" className={styles.container} >
        <canvas id="canvas" className={canvas}></canvas>
        <div id="dom_overlay_container" className={styles.overlay} />
      </div>
    )
  }

  public componentDidMount() {
    init() // From animation script provided by Adobe
    window.addEventListener("resize", this.onWindowResize)

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
