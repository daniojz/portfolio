import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'
import style from '@styles/modules/techSkills.module.scss'

const TechSkills = () => {
  return (
    <div className={style.techSkillsContainer}>
      <div className={`${style.layer0} ${style.layer}`}>
        <Icon icon='logos:html-5' width='64' height='64' />
        <Icon icon='logos:css-3' width='64' height='64' />
        <Icon icon='logos:javascript' width='64' height='64' />
        <Icon icon='logos:react' width='64' height='64' />
        <Icon icon='logos:redux' width='64' height='64' />
        <Icon icon='logos:java' width='64' height='64' />
        <Icon icon='logos:spring-icon' width='64' height='64' />
      </div>
      <div className={`${style.layer1} ${style.layer}`}>
        <Icon icon='logos:redux-saga' width='64' height='64' />
        <Icon icon='devicon:androidstudio' width='64' height='64' />
        <Icon icon='logos:kotlin-icon' width='64' height='64' />
        <Icon icon='logos:firebase' width='64' height='64' />
        <Icon icon='logos:bootstrap' width='64' height='64' />
        <Icon icon='logos:figma' width='64' height='64' />
        <Icon icon='devicon:jquery-wordmark' width='64' height='64' />
      </div>
      <div className={`${style.layer2} ${style.layer}`}>
        <Icon icon='logos:c-sharp' width='64' height='64' />
        <Icon icon='logos:php' width='64' height='64' />
        <Icon icon='logos:linux-tux' width='64' height='64' />
        <Icon icon='logos:sqlite' width='64' height='64' />
        <Icon icon='logos:typescript-icon' width='64' height='64' />
        <Icon icon='logos:mysql' width='64' height='64' />
        <Icon icon='logos:notion-icon' width='64' height='64' />
      </div>
    </div>
  )
}

export default TechSkills
