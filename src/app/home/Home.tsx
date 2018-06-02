import React, {Component} from "react"

declare function init(): any
declare var createjs: any

const styles = require("./Home.sass")
const loader = require("../../static/images/logo-area-off.png")

interface IProps {
  loaded: boolean
}

interface IState {
  isFullWidth: boolean
}

class HomeComponent extends Component<IProps, IState> {
  private animation: HTMLDivElement | null

  constructor(props: IProps) {
    super(props)
    this.state = {isFullWidth: false}
  }

  public render() {
    const canvas = this.state.isFullWidth
      ? styles.canvasFullWidth
      : styles.canvasFullHeight

    return (
      <>
        <div ref={(ref) => this.animation = ref} id="animation_container" className={styles.animation} >
          <canvas id="canvas" className={canvas}></canvas>
          <div id="dom_overlay_container" className={styles.overlay} />
        </div>

        <div id="_preload_div_" className={styles.overlay}>
          <span />
          <img src={loader} />
        </div>
      </>
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
    /* console.log('unmount') */
  }

  private onWindowResize = () => {
    const width = this.animation && (this.animation.offsetWidth) || 0
    const height = window.innerHeight
    const isFullWidth = (width / height > 1.5)

    this.setState({isFullWidth})
  }
}

export default HomeComponent
