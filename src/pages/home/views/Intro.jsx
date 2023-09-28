import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next'
import Atropos from 'atropos/react'
import style from '@styles/modules/intro.module.scss'
import FollowMe from '@components/FollowMe/FollowMe'

const Intro = () => {
  const [t, i18n] = useTranslation('home')

  return (
    <section className={style.introSection}>
      <div className={style.circle}></div>
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
    </section>
  )
}

export default Intro
