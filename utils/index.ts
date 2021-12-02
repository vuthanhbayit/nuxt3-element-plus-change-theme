import color from 'css-color-function'
import { tintColor } from '../constants'

export const generateColors = (primary: string): Record<string, string> => {
    let colors = {}
    Object.keys(tintColor).forEach((key) => {
        const value = tintColor[key].replace(/primary/g, primary)
        colors[key] = color.convert(value)
    })
    return colors
}
