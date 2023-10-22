import PropTypes from 'prop-types'
import style from '@componentsStyles/experienceInfo.module.scss'
import TagsContainer from '../TagsContainer/TagsContainer'

const ExperienceInfo = ({
  jobTitle,
  startDate,
  finishDate,
  actualWork,
  description,
  aptitudes,
}) => {
  return (
    <div className={style.experienceInfo}>
      <div className={style.header}>
        <span className={style.jobTitle}>{jobTitle}</span>
        <span className={style.date}>
          {startDate} - {finishDate}
        </span>
        <span className={style.actualWork}>{actualWork ? 'actually working here' : ''}</span>
      </div>
      <div className={style.description}>
        <p>{description}</p>
      </div>
      <TagsContainer aptitudes={aptitudes}></TagsContainer>
    </div>
  )
}

ExperienceInfo.propTypes = {
  jobTitle: PropTypes.string,
  startDate: PropTypes.string,
  finishDate: PropTypes.string,
  actualWork: PropTypes.bool,
  description: PropTypes.string,
  aptitudes: PropTypes.arrayOf(PropTypes.string),
}

export default ExperienceInfo
