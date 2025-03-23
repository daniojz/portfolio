import { useMediaQuery } from 'react-responsive'
import PropTypes from 'prop-types'

export const BigScreen = ({ children }) => {
  const isBigScreen = useMediaQuery({ minWidth: 1200 })
  return isBigScreen ? children : null
}
export const MediumScreen = ({ children }) => {
  const isMediumScreen = useMediaQuery({ minWidth: 992, maxWidth: 1200 })
  return isMediumScreen ? children : null
}
export const SmallScreen = ({ children }) => {
  const isSmallScreen = useMediaQuery({ minWidth: 768, maxWidth: 992 })
  return isSmallScreen ? children : null
}
export const SuperSmallScreen = ({ children }) => {
  const isSuperSmallScreen = useMediaQuery({ minWidth: 576, maxWidth: 768 })
  return isSuperSmallScreen ? children : null
}

BigScreen.propTypes = {
  children: PropTypes.element,
}
MediumScreen.propTypes = {
  children: PropTypes.element,
}
SmallScreen.propTypes = {
  children: PropTypes.element,
}
SuperSmallScreen.propTypes = {
  children: PropTypes.element,
}
