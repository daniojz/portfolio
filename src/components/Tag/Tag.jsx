import PropTypes from 'prop-types'
import style from '@componentsStyles/tag.module.scss'

const Tag = ({ text, type, clickable }) => {
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
    <div className={`${style.tag} ${typeStyle()}`}>
      <span>{text}</span>
    </div>
  )
}

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  clickable: PropTypes.bool,
}

Tag.defaultProps = {
  type: 'neutral1',
  clickable: false,
}

export default Tag
