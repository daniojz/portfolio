import { useTranslation } from 'react-i18next'
import style from '@sectionsStyles/contact.module.scss'

const Contact = () => {
  const [t] = useTranslation('home', { keyPrefix: 'Contact' })
  const [global] = useTranslation('global', { keyPrefix: 'global.titles' })

  return (
    <section id='Contact'>
      <div className={style.contactContainer}>
        <div className={style.downloadCV}></div>
        <div className={style.contactFormContainer}></div>
      </div>
    </section>
  )
}

export default Contact
