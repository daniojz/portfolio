import { useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import style from '@componentsStyles/techSkills.module.scss'

const TechSkills = () => {
  const skillsContainer = useRef()

  const changePosition = (icon) => {
    const limit = 35

    const randomX = Math.random() * 2 * limit - limit
    const randomY = Math.random() * 2 * limit - limit

    icon.style.transform = `translate(${randomX}px, ${randomY}px)`
  }

  useEffect(() => {
    //requestAnimationFrame asegura que la funcion que se le pasa se ejecuta una vez se
    //se ha renderizado/cargado los elementos del DOM, ya que esta funcionalidad sirve para
    //sincronizar la ejecución con la tasa de refresco de repintado de la pantalla.
    //De esta manera nos aseguramos de poder acceder a los <icon> una vez se han renderizados,
    //ya que, por lo contrario, querySelectorAll('svg') nos devolveria nada.
    const frameId = requestAnimationFrame(() => { 
      const icons = skillsContainer.current?.querySelectorAll('svg');
      if (icons.length > 0) {
        console.log(icons); // Aquí también deberían estar los íconos
        icons.forEach((icon) => {
          changePosition(icon)
          icon.addEventListener('transitionend', () => changePosition(icon));
        });
      }
    });
  
    return () => cancelAnimationFrame(frameId); // Limpiamos el frameId si el componente se desmonta
  }, []);

  return (
    <div className={style.techSkillsContainer} ref={skillsContainer}>
      <div className={`${style.layer0} ${style.layer}`}>
        <Icon id='html' icon='logos:html-5' width='64' height='64' />
        <Icon id='css' icon='logos:css-3' width='64' height='64' />
        <Icon id='javascript' icon='logos:javascript' width='64' height='64' />
        <Icon id='react' icon='logos:react' width='64' height='64' />
        <Icon id='redux' icon='logos:redux' width='64' height='64' />
        <Icon id='java' icon='logos:java' width='64' height='64' />
        <Icon id='spring' icon='logos:spring-icon' width='64' height='64' />
      </div>
      <div className={`${style.layer1} ${style.layer}`}>
        <Icon id='redux-saga' icon='logos:redux-saga' width='64' height='64' />
        <Icon id='androidstudio' icon='devicon:androidstudio' width='64' height='64' />
        <Icon id='kotlin' icon='logos:kotlin-icon' width='64' height='64' />
        <Icon id='firebase' icon='logos:firebase' width='64' height='64' />
        <Icon id='bootstrap' icon='logos:bootstrap' width='64' height='64' />
        <Icon id='figma' icon='logos:figma' width='64' height='64' />
        <Icon id='jquery' icon='devicon:jquery-wordmark' width='64' height='64' />
      </div>
      <div className={`${style.layer2} ${style.layer}`}>
        <Icon id='c-sharp' icon='logos:c-sharp' width='64' height='64' />
        <Icon id='php' icon='logos:php' width='64' height='64' />
        <Icon id='linux' icon='logos:linux-tux' width='64' height='64' />
        <Icon id='sqlite' icon='logos:sqlite' width='64' height='64' />
        <Icon id='typescript' icon='logos:typescript-icon' width='64' height='64' />
        <Icon id='mysql' icon='logos:mysql' width='64' height='64' />
        <Icon id='notion' icon='logos:notion-icon' width='64' height='64' />
      </div>
    </div>
  )
}

export default TechSkills
