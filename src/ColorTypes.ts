/**
 * Represents a color in the rgb(a) format.
 *
 *
 * Range `[0 - 1]`
 */
export class RGBColor {
  /**
   * Range [0-1]
   */
  r: number;
  /**
   * Range [0-1]
   */
  g: number;
  /**
   * Range [0-1]
   */
  b: number;
  /**
   * Range [0-1]
   */
  a: number;
  constructor(r: number, g: number, b: number, a?: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a !== undefined ? a : 1;
  }
}
/**
 * Represents a color in the hsv(a) format.
 *
 *
 * Range `[h 0 - 360, v/s/a 0 - 1]`
 */
export class HSVColor {
  /**
   * Range [0-360]
   */
  h: number;
  /**
   * Range [0-1]
   */
  s: number;
  /**
   * Range [0-1]
   */
  v: number;
  /**
   * Range [0-1]
   */
  a: number;
  constructor(h: number, s: number, v: number, a?: number) {
    this.h = h;
    this.s = s;
    this.v = v;
    this.a = a !== undefined ? a : 1;
  }
}