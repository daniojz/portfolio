import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next'
import style from '@sectionsStyles/intro.module.scss'
import { Parallax } from 'react-scroll-parallax'

const Intro = () => {
  const [t] = useTranslation('home', { keyPrefix: 'intro' })

  return (
    <div className={style.introContainer}>
      <Parallax translateY={[-150, 100]}>
        <div className={style.circle}></div>
        {/* <img src='/figures/circle-figure-header-light.svg'></img> */}
      </Parallax>

      <div className={style.content}>
        <p className={style.description1}>web developer</p>
        <div className={style.titleContainer}>
          <div className={style.title}>
            <h1>DANI</h1>
          </div>
          <div className={style.title}>
            <p>DANI</p>
          </div>
        </div>
        <div className={style.descriptionContainer2}>
          <div className={style.description2}>DESARROLLADOR, DISEÑAODR WEB Y APASIONADO DE LA CREATIVIDAD</div>
          <div className={style.description2}>DESARROLLADOR, DISEÑAODR WEB Y APASIONADO DE LA CREATIVIDAD</div>
        </div>
        <div className={style.description}>
          <p>{t('introDescription')}</p>
        </div>
        <a href='#Experience' className={style.anchorLink}>
          <Icon icon='akar-icons:chevron-down' width='24' height='24' />
        </a>
      </div>
    </div>
  )
}

export default Intro
