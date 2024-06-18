import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'
import style from '@componentsStyles/followMe.module.scss'

const FollowMe = ({ styles, iconSize, color }) => {
  const colorClass = () => {
    switch (color) {
      case 'neutral50':
        return `${style.neutral50}`
      case 'neutral400':
        return `${style.neutral400}`
      case 'neutral500':
        return `${style.neutral500}`
      default:
        return `${style.neutral50}`
    }
  }

  return (
    <div className={styles}>
      <div className={`${style.container} ${colorClass()}`}>
        <span>
          <a href=''>
            <Icon icon='akar-icons:github-fill' width={iconSize} height={iconSize} />
          </a>
        </span>
        <span>
          <a href=''>
            <Icon icon='akar-icons:linkedin-fill' width={iconSize} height={iconSize} />
          </a>
        </span>
        <span>
          <a href=''>
            <Icon icon='akar-icons:figma-fill' width={iconSize} height={iconSize} />
          </a>
        </span>
      </div>
    </div>
  )
}

FollowMe.propTypes = {
  styles: PropTypes.string,
  iconSize: PropTypes.number,
  color: PropTypes.oneOf(['neutral50', 'neutral400', 'neutral500']),
}

FollowMe.defaultProps = {
  iconSize: 32,
  color: 'neutral50',
}

export default FollowMe
