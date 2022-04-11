import { getNavigator } from '../helper/navigator'
import { asMock } from '../helper/test-utils'
import { isMobile } from './isMobile'

jest.mock('../helper/navigator')

describe('isMobile', () => {
  const mobileUserAgents = [
    'Android',
    'webOs',
    'iPhone',
    'iPad',
    'iPod',
    'BlackBerry',
    'IEMobile',
    'Opera Mini',
  ]

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe.each(mobileUserAgents)(
    `when the userAgent is a mobile type`,
    userAgent => {
      beforeEach(() => {
        asMock(getNavigator).mockReturnValue({
          userAgent,
        } as Navigator)
      })

      it(`${userAgent} should be true`, () => {
        expect(isMobile()).toBeTruthy()
      })
    }
  )

  describe('when the userAgent is not a mobile type', () => {
    beforeEach(() => {
      asMock(getNavigator).mockReturnValue({
        userAgent: 'no mobile',
      } as Navigator)
    })

    it(`should be false`, () => {
      expect(isMobile()).toBeFalsy()
    })
  })
})
