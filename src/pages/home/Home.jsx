import style from '@styles/modules/header.module.scss'

const Home = () => {
  return (
    <>
      <header>
        <div className={style.circle}></div>
        <div className={style.content}>
          <div className={style.logo}>
            <img src='/logo.svg'></img>
          </div>
          <div className={style.description}>
            <p>Dani, desarrollador web junior y amante de la creatividad</p>
          </div>
        </div>
      </header>
      <main className={style.main}>
        <div style={{ width: '100%', height: '4000px' }}></div>
      </main>
    </>
  )
}

export default Home
