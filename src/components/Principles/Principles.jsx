import style from '@componentsStyles/principles.module.scss'
import { Parallax } from 'react-scroll-parallax'

const Principles = () => {
  return (
    <div className={style.principles}>
      <Parallax className={style.principle} translateX={['-400px', '500px']} scale={[0.75, 1.6]}>
        <p>Creativity</p>
      </Parallax>
      <Parallax className={style.principle} translateX={['-400px', '300px']} scale={[0.85, 1.2]}>
        <p>Humilty</p>
      </Parallax>
      <Parallax className={style.principle} translateX={['-400px', '300px']} scale={[0.85, 1.2]}>
        <p>Continous improvement and learning</p>
      </Parallax>
      <Parallax className={style.principle} translateX={['-400px', '900px']} scale={[0.85, 1.2]}>
        <p>Client orientation</p>
      </Parallax>
    </div>
  )
}

export default Principles
