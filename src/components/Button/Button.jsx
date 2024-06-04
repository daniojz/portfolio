import PropTypes from 'prop-types'
import style from '@componentsStyles/button.module.scss'

const Button = ({ type, text, styles }) => {
  const typeStyle = () => {
    switch (type) {
      case 'primary':
        return `${style.primary}`
      case 'secondary':
        return `${style.secondary}`
      case 'neutral150':
        return `${style.neutral1}`
      case 'special1':
        return `${style.especial1}`
      default:
        return `${style.neutral1}`
    }
  }

  return (
    <button className={`${style.button} ${typeStyle()} ${styles}`}>
      <span>{text}</span>
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'neutral150', 'special1']),
  text: PropTypes.string,
  styles: PropTypes.string,
}

Button.defaultProps = {
  type: 'primary',
}

export default Button
