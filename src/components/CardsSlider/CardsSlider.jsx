import PropTypes from 'prop-types'
import style from '@componentsStyles/cardsSlider.module.scss'
import ProjectCard from '../ProjectCard/ProjectCard'
import ArrowButton from '../ArrowButton/ArrowButton'
import { useRef, useState, useEffect } from 'react'
import { isMinMediumScreen } from '../../constants/breakpoints'
import { useMediaQuery } from 'react-responsive'

const CardsSlider = ({ cardsList }) => {
  const isMinMediumScreenQuery = useMediaQuery({ query: isMinMediumScreen })

  const cardsSlider = useRef()
  const [focusedCard, setFocusedCard] = useState(isMinMediumScreen ? 2 : 1)

  useEffect(() => {
    const slider = cardsSlider.current
    const cardElement = slider.querySelector(`#card-${focusedCard}`)
    if (cardElement) {
      if (isMinMediumScreen) {
        const cardWidth = cardElement.offsetWidth
        const cardLeft = cardElement.offsetLeft
        const sliderCenter = slider.clientWidth / 2
        const scrollLeft = cardLeft - sliderCenter + cardWidth / 2
        slider.scrollTo({ left: scrollLeft, behavior: 'smooth' })
      }
    }
  }, [focusedCard])

  const onClickHandleRight = (e) => {
    e.preventDefault()
    setFocusedCard(focusedCard + 1)
  }

  const onClickHandleLeft = (e) => {
    e.preventDefault()
    setFocusedCard(focusedCard - 1)
  }

  return (
    <div className={style.cardSliderContainer}>
      {cardsList.length > 3 && focusedCard !== 2 && isMinMediumScreenQuery ? (
        <ArrowButton
          className={style.buttonLeft}
          onClick={onClickHandleLeft}
          direction={'left'}
        ></ArrowButton>
      ) : (
        ''
      )}

      {cardsList.length > 3 && focusedCard < cardsList.length - 1 && isMinMediumScreenQuery ? (
        <ArrowButton
          className={style.buttonRight}
          onClick={onClickHandleRight}
          direction={'right'}
        ></ArrowButton>
      ) : (
        ''
      )}
      <div className={style.cardsSlider} ref={cardsSlider}>
        {cardsList.map((card) => (
          <ProjectCard key={card.id} id={`card-${card.id}`} projectCard={card}></ProjectCard>
        ))}
      </div>
    </div>
  )
}

CardsSlider.propTypes = {
  cardsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      link: PropTypes.string,
      aptitudes: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
}

export default CardsSlider
