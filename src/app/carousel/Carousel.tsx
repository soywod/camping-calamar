import React, {Component} from "react"
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

class CarouselComponent extends Component<{}, {}> {
  constructor(props: {}) {
    super(props)
  }

  public render() {
    return (
      <div className={styles.carousel}>
        <Carousel {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </Carousel>
      </div>
    )
  }
}

export default CarouselComponent
