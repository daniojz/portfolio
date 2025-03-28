import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next'
import Atropos from 'atropos/react'
import style from '@sectionsStyles/intro.module.scss'
import FollowMe from '@components/FollowMe/FollowMe'
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
        <Atropos
          activeOffset={0}
          shadow={false}
          shadowScale={0}
          alwaysActive={true}
          highlight={false}
        >
          <div className={style.logo}>
            <img src='/logo.svg'></img>
          </div>
        </Atropos>

        <div className={style.subContent}>
          <FollowMe styles={style.links}></FollowMe>

          <div className={style.description}>
            <p>{t('introDescription')}</p>
          </div>
        </div>

        <a href='#Experience' className={style.anchorLink}>
          <Icon icon='akar-icons:chevron-down' width='24' height='24' />
        </a>
      </div>
    </div>
  )
}

export default Intro
