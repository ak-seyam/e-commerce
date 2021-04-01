import tinyColor from "tinycolor2"
/**
 * 
 * @param color 
 * @returns true if dark
 */
export default function isDark(color: string) {
    const tc = tinyColor(color)
    return tc.getLuminance() < 0.5
}
