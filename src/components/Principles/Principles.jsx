import style from '@componentsStyles/principles.module.scss'
import { useTranslation } from 'react-i18next'
import { Parallax } from 'react-scroll-parallax'

const Principles = () => {
  const [t] = useTranslation('home', { keyPrefix: 'skills.principles' })

  return (
    <div className={style.principles}>
      <Parallax
        className={style.principle}
        translateX={['-400px', '500px']}
        translateY={['100px', '-0px']}
        scale={[0.75, 1.6]}
      >
        <p>{t('creativity')}</p>
      </Parallax>
      <Parallax
        className={style.principle}
        translateX={['-400px', '300px']}
        translateY={['100px', '-100px']}
        scale={[0.85, 1.2]}
      >
        <p>{t('humilty')}</p>
      </Parallax>
      <Parallax className={style.principle} translateX={['-400px', '300px']} scale={[0.85, 1.2]}>
        <p>{t('continousLearning')}</p>
      </Parallax>
      <Parallax className={style.principle} translateX={['-400px', '900px']} scale={[0.85, 1.2]}>
        <p>{t('clientOrientation')}</p>
      </Parallax>
    </div>
  )
}

export default Principles
