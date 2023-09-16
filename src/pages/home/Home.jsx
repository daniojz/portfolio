import { Icon } from '@iconify/react'
import Atropos from 'atropos/react'
import style from '@styles/modules/header.module.scss'
import FollowMe from '@components/FollowMe/FollowMe'

const Home = () => {
  return (
    <>
      <header>
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
            <p>Dani, desarrollador web junior y amante de la creatividad</p>
          </div>
        </div>
        <a href='#main' className={style.anchorLink}>
          <Icon icon='akar-icons:chevron-down' width='32' height='32' />
        </a>
      </header>
      <main id='main' className={style.main}>
        <div style={{ width: '100%', height: '4000px' }}></div>
      </main>
    </>
  )
}

export default Home
