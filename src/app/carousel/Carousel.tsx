import React, {Component, ReactNode} from "react"
import Carousel from "react-slick"

const styles = require("./Carousel.sass")
const left = require("../../static/images/presentation/arrow-left.png")
const right = require("../../static/images/presentation/arrow-right.png")

const settings = {
  dots: true,
  nextArrow: <img src={right} alt="Next slide" />,
  prevArrow: <img src={left} alt="Previous slide" />,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 200,
}

interface IImage {
  alt: string
  src: string
}

interface IProps {
  images: IImage[]
}

class CarouselComponent extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props)
  }

  public render() {
    return (
      <div className={styles.carousel}>
        <Carousel {...settings}>
          {this.props.images.map((image) => <img alt={image.alt} src={image.src} />)}
        </Carousel>
      </div>
    )
  }
}

export default CarouselComponent
