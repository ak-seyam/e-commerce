import tinyColor from "tinycolor2"
/**
 * 
 * @param color 
 * @returns true if dark
 */
export function isDark(color: string) {
    const tc = tinyColor(color)
    return tc.getLuminance() < 0.5
}

export function lighen(color: string) {
    return tinyColor(color).lighten(20).toString()
}
