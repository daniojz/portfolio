import PropTypes from 'prop-types'
import style from '@componentsStyles/tagsContainer.module.scss'
import Tag from '../Tag/Tag'

const ExperienceInfo = ({ aptitudes }) => {
  return (
    <div className={style.tagsContainer}>
      {aptitudes.map((aptitude) => (
        <Tag key={aptitude} text={aptitude}></Tag>
      ))}
    </div>
  )
}

ExperienceInfo.propTypes = {
  aptitudes: PropTypes.arrayOf(PropTypes.string),
}

export default ExperienceInfo
