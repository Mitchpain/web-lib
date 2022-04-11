import { getNavigator } from '../helper/navigator'

export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    getNavigator().userAgent
  )
}
