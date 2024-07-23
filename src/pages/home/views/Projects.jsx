import { useTranslation } from 'react-i18next'
import style from '@sectionsStyles/projects.module.scss'
import CardsSlider from '../../../components/CardsSlider/CardsSlider'

const Projects = () => {
  const [t] = useTranslation('home', { keyPrefix: 'projects' })
  const [globalTitles] = useTranslation('global', { keyPrefix: 'global.titles' })

  return (
    <section id='Projects' className={style.projectsContainer}>
      <div className={style.header}>
        <h2>{globalTitles('projects')}</h2>
      </div>
      <div className={style.content}>
        <CardsSlider cardsList={t('projectsCards')}></CardsSlider>
      </div>
    </section>
  )
}

export default Projects
