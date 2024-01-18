import PropTypes from 'prop-types'
import style from '@componentsStyles/pillsContainer.module.scss'
import Pill from '../Pill/Pill'

const PillsContainer = ({ pillsList }) => {
  return (
    <div className={style.pillsContainer}>
      {pillsList.map((value) => (
        <Pill key={value} text={value}></Pill>
      ))}
    </div>
  )
}

PillsContainer.propTypes = {
  pillsList: PropTypes.arrayOf(PropTypes.string),
}

export default PillsContainer
