import PropTypes from 'prop-types'
import style from '@styles/modules/experienceInfo.module.scss'
import Tag from '../Tag/Tag'

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
      <div className={style.tagsContainer}>
        {aptitudes.map((aptitude) => (
          <Tag key={aptitude} text={aptitude}></Tag>
        ))}
      </div>
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
