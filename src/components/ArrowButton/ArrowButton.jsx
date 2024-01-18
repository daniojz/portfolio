import style from '@componentsStyles/arrowButton.module.scss'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

const ArrowButton = ({ className, onClick, direction }) => {
  return (
    <button className={`${style.arrowButton} ${className}`} onClick={onClick}>
      <Icon icon={`ci:chevron-${direction}-md`} width={32} height={32} />
    </button>
  )
}

ArrowButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  direction: PropTypes.string,
}

ArrowButton.defaultProps = {
  direction: 'right',
}

export default ArrowButton
