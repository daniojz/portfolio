import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'
import style from '@componentsStyles/followMe.module.scss'

const FollowMe = ({ styles, iconSize }) => {
  return (
    <div className={`${styles} ${style.container}`}>
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
  )
}

FollowMe.propTypes = {
  styles: PropTypes.string,
  iconSize: PropTypes.number,
}

FollowMe.defaultProps = {
  iconSize: 32,
}

export default FollowMe
