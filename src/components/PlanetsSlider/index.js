import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const displayPlanets = planetsList.map(each => (
    <PlanetItem each={each} key={each.id} />
  ))

  return (
    <div className="bg-container">
      <Slider {...settings}>
        <div data-testid="planets">{displayPlanets[0]}</div>
        <div data-testid="planets">{displayPlanets[1]}</div>
        <div data-testid="planets">{displayPlanets[2]}</div>
        <div data-testid="planets">{displayPlanets[3]}</div>
        <div data-testid="planets">{displayPlanets[4]}</div>
        <div data-testid="planets">{displayPlanets[5]}</div>
        <div data-testid="planets">{displayPlanets[6]}</div>
        <div data-testid="planets">{displayPlanets[7]}</div>
      </Slider>
    </div>
  )
}

export default PlanetsSlider
