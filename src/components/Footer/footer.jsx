import { useTranslation } from 'react-i18next'
import style from '@componentsStyles/footer.module.scss'
import FollowMe from '@components/FollowMe/FollowMe'

const Footer = () => {
  const [globalFooter] = useTranslation('global', { keyPrefix: 'footer' })

  return (
    <section id='Footer' className={style.footerContainer}>
      <div className={style.foot}>
        <FollowMe styles={style.links} color={'neutral300'} iconSize={24}></FollowMe>
        <p>{globalFooter('copyright')}</p>
      </div>
    </section>
  )
}

export default Footer