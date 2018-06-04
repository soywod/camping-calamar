import React, {Component} from "react"

declare function init(): any
declare var createjs: any

const styles = require("./Home.sass")
const loader = require("../../static/images/logo-area-off.png")
const home = require("../../static/videos/home.mp4")

interface IProps {
  loaded: boolean
}

interface IState {
  isFullWidth: boolean
}

class HomeComponent extends Component<IProps, IState> {
  private $video: HTMLVideoElement | null

  constructor(props: IProps) {
    super(props)
    this.state = {isFullWidth: false}
  }

  public render() {
    const video = this.state.isFullWidth
      ? styles.videoFullWidth
      : styles.videoFullHeight

    return (
      <div className={styles.container}>
        <div className={styles.fade} data-visible={! this.props.loaded}></div>
        <video ref={(ref) => this.$video = ref} className={video} autoPlay loop preload="true">
          <source src={home} type="video/mp4" />
        </video>
      </div>
    )
  }

  public componentDidMount() {
    if (this.$video) {
      this.$video.addEventListener("loadstart", this.onWindowResize)
    }

    window.addEventListener("resize", this.onWindowResize)

    if (this.props.loaded) {
      this.onWindowResize()
    }
  }

  public componentWillUnmount() {
    if (this.$video) {
      this.$video.removeEventListener("loadeddata", this.onWindowResize)
    }

    window.removeEventListener("resize", this.onWindowResize)
  }

  private onWindowResize = () => {
    const width = this.$video && (this.$video.offsetWidth) || 0
    const height = window.innerHeight
    const isFullWidth = (width / height > 1.5)

    this.setState({isFullWidth})
  }
}

export default HomeComponent
