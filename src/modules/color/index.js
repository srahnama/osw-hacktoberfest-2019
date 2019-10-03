import { get } from 'axios'

class ColorHelper {
  async getRGBAverageFromHex (colorList) {
    const rgbRequests = colorList.map(c => this.getJsonColor(c, 'hex'))
    const responses = await Promise.all(rgbRequests)
    const rgbColors = responses.map(x => x.rgb)

    const { r, g, b } = rgbColors.reduce((previous, current) => {
      const { r, g, b } = current
      const nr = previous.r + r
      const ng = previous.g + g
      const nb = previous.b + b

      return { r: nr, g: ng, b: nb }
    }, { r: 0, g: 0, b: 0 })

    const count = rgbColors.length
    const avg = val => (val / count).toFixed()

    return `${avg(r)},${avg(g)},${avg(b)}`
  }

  async getJsonColor (code, format) {
    const url = `https://www.thecolorapi.com/id?format=json&${format}=${code}`
    return get(url).then(r => r.data)
  }
}

export const colorHelper = new ColorHelper()
