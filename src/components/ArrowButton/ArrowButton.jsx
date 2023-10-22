import style from '@componentsStyles/arrowButton.module.scss'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

const ArrowButton = ({ className, onClick }) => {
  return (
    <button className={`${style.arrowButton} ${className}`} onClick={() => onClick}>
      <Icon icon='ci:chevron-right-md' width={32} height={32} />
    </button>
  )
}

ArrowButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default ArrowButton
