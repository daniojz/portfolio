import { Icon } from '@iconify/react'
import style from '@componentsStyles/themeButton.module.scss'
import { useEffect, useState } from 'react'

const ThemeButton = () => {
  const [theme, setTheme] = useState(
    window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light',
  )
  useEffect(() => {
    document.getElementsByTagName('html')[0].setAttribute('data-theme', theme)
  })

  const onClickHandler = () => {
    if (theme === 'light') {
      setTheme('dark')
      document.getElementsByTagName('html')[0].setAttribute('data-theme', 'dark')
    } else {
      setTheme('light')
      document.getElementsByTagName('html')[0].setAttribute('data-theme', 'light')
    }
  }

  return (
    <button title='themeButton' onClick={onClickHandler} className={style.themeButton}>
      <Icon icon={theme === 'light' ? 'akar-icons:moon-fill' : 'akar-icons:sun-fill'} />
    </button>
  )
}
export default ThemeButton
