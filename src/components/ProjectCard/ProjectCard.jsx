import style from '@componentsStyles/projectCard.module.scss'
import PropTypes from 'prop-types'
import PillsContainer from '../PillsContainer/PillsContainer'
import { useEffect, useRef } from 'react'

const ProjectCard = ({ projectCard, id }) => {
  const imageContainer = useRef(null)

  useEffect(() => {
    if (imageContainer != null) {
      imageContainer.current.style.backgroundImage = `url('${projectCard.image}')`
    }
  }, [])
  return (
    // <a href={projectCard.link}>
    <div className={style.projectCard} id={id}>
      <div className={style.image} ref={imageContainer}></div>
      <div className={style.content}>
        <h1 className={style.title}>{projectCard.title}</h1>
        <h2 className={style.description}>{projectCard.description}</h2>
        <PillsContainer pillsList={projectCard.aptitudes}></PillsContainer>
      </div>
    </div>
    // </a>
  )
}

ProjectCard.propTypes = {
  id: PropTypes.string,
  projectCard: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
    aptitudes: PropTypes.arrayOf(PropTypes.string),
  }),
}
export default ProjectCard
