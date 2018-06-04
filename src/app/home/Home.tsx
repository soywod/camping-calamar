import React, {Component} from "react"

declare function init(): any
declare var createjs: any

const styles = require("./Home.sass")
const player = require("../../static/images/player.png")
const home = require("../../static/videos/home.mp4")

interface IProps {
  loaded: boolean
}

interface IState {
  canPlayVideo: boolean
}

class HomeComponent extends Component<IProps, IState> {
  private $video: HTMLVideoElement | null
  private $player: HTMLDivElement | null

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
        <div ref={(ref) => this.$player = ref} className={styles.player} onClick={this.playVideo}>
          <img src={player} alt="Play the video" />
        </div>
      </div>
    )
  }

  public componentDidMount() {
    if (this.$video) {
      this.$video.addEventListener("loadeddata", this.videoReady)
    }
  }

  public componentWillUnmount() {
    if (this.$video) {
      this.$video.removeEventListener("loadeddata", this.videoReady)
    }
  }

  private playVideo = () => {
    if (this.$player) {
      this.$player.style.display = "none"
    }

    if (this.$video) {
      this.$video.play()
    }
  }

  private videoReady = () => {
    this.setState({canPlayVideo: true})
  }
}

export default HomeComponent
