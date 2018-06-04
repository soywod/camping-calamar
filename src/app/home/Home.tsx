import React, {Component} from "react"

declare function init(): any
declare var createjs: any

const styles = require("./Home.sass")
const home = require("../../static/videos/home.mp4")

interface IProps {
  loaded: boolean
}

interface IState {
  canPlayVideo: boolean
}

class HomeComponent extends Component<IProps, IState> {
  private $video: HTMLMediaElement | null

  constructor(props: IProps) {
    super(props)

    this.state = {
      canPlayVideo: false,
    }
  }

  public render() {
    if (! this.props.loaded) {
      return null
    }

    return (
      <div className={styles.container}>
        <video ref={(ref) => this.$video = ref} autoPlay loop preload="true">
          <source src={home} type="video/mp4" />
        </video>

        <div className={styles.fade} data-hide={this.state.canPlayVideo}></div>
      </div>
    )
  }

  public componentDidMount() {
    if (this.$video) {
      this.$video.addEventListener("canplay", this.videoReady)
    }
  }

  public componentWillUnmount() {
    if (this.$video) {
      this.$video.removeEventListener("canplay", this.videoReady)
    }
  }

  private videoReady = () => {
    this.setState(
      {canPlayVideo: true},
      () => this.$video && this.$video.play(),
    )
  }
}

export default HomeComponent
