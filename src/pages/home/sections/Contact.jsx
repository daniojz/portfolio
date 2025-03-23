import { useTranslation } from 'react-i18next'
import style from '@sectionsStyles/contact.module.scss'
import FollowMe from '@components/FollowMe/FollowMe'
import Button from '../../../components/Button/Button'

const Contact = () => {
  const [t] = useTranslation('contact', { keyPrefix: 'Contact' })
  const [globalTitles] = useTranslation('global', { keyPrefix: 'global.titles' })

  return (
    <section id='Contact'>
      <div className={style.contactContainer}>
        <div className={style.downloadCvContainer}>
          <Button text={'prueba boton'} type={'primary'}></Button>
          <FollowMe iconSize={24}></FollowMe>
        </div>
        <div className={style.contactFormContainer}>
          <h2>{globalTitles('contact')}</h2>
        </div>
      </div>
    </section>
  )
}

export default Contact
