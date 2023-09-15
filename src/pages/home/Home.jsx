import style from '@styles/modules/header.module.scss'
import { Parallax } from 'react-scroll-parallax'

const Home = () => {
  return (
    <div>
      <header>
        <div className={style.content}>
          <div className={style.circle}></div>
          <Parallax translateY={[-40, 20]}>
            <div className={style.logo}>
              <img src='/logo.svg'></img>
            </div>
          </Parallax>
          <div className={style.description}>
            <p>Dani, desarrollador web junior y amante de la creatividad</p>
          </div>
        </div>
      </header>
      <main>
        <div style={{ width: '100vw', height: '4000px' }}></div>
      </main>
    </div>
  )
}

export default Home
