import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next'
import Atropos from 'atropos/react'
import style from '@styles/modules/intro.module.scss'
import FollowMe from '@components/FollowMe/FollowMe'
import { Parallax } from 'react-scroll-parallax'

const Intro = () => {
  const [t, i18n] = useTranslation('home')

  return (
    <div className={style.introContainer}>
      <Parallax translateY={[-150, 100]}>
        <div className={style.circle}></div>
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

        <FollowMe styles={style.links}></FollowMe>

        <div className={style.description}>
          <p>{t('intro.introDescription')}</p>
        </div>
      </div>
      <a href='#main' className={style.anchorLink}>
        <Icon icon='akar-icons:chevron-down' width='24' height='24' />
      </a>
    </div>
  )
}

export default Intro
