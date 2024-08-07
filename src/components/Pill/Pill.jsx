import PropTypes from 'prop-types'
import style from '@componentsStyles/pill.module.scss'

const Pill = ({ text, type, clickable }) => {
  const typeStyle = () => {
    switch (type) {
      case 'primary':
        return `${style.primary} ${clickable ? style.primaryClick : ''}`
      case 'secondary':
        return `${style.secondary} ${clickable ? style.secondaryClick : ''}`
      case 'neutral1':
        return `${style.neutral1} ${clickable ? style.neutral1Click : ''}`
      case 'neutral2':
        return `${style.neutral2} ${clickable ? style.neutral2Click : ''}`
      default:
        return `${style.neutral1} ${clickable ? style.neutral1Click : ''}`
    }
  }
  return (
    <div className={`${style.pill} ${typeStyle()}`}>
      <span>{text}</span>
    </div>
  )
}

Pill.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  clickable: PropTypes.bool,
}

Pill.defaultProps = {
  type: 'neutral1',
  clickable: false,
}

export default Pill
