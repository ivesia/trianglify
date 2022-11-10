export interface Pattern {
    toCanvas: () => HTMLCanvasElement;
}

export interface Options {
    /** Width of pattern */
    width?: number;
    /** Height of pattern */
    height?: number;
    /** Size of the cells used to generate a randomized grid */
    cellSize?: number;
    /** how much to randomize the grid */
    variance?: number;
    /** Seed for the RNG */
    seed?: number | string | null;
    /** X color stops */
    xColors?: false | string | Array<string>;
    /** Y color stops */
    yColors?: false | string | Array<string>;
    /** Color space used for gradient construction & interpolation */
    colorSpace?: string;
    /** Color function f(x, y) that returns a color specification that is consumable by chroma-js */
    colorFunction?: ((x: number, y: number) => string) | null;
    /** Width of stroke. Defaults to 1.51 to fix an issue with canvas antialiasing. */
    strokeWidth?: number;
    /** An array of [x,y] coordinates to trianglulate. Defaults to undefined, and points are generated. */
    points?: Array<number>;
}

export default function trianglify(opts?: Options): Pattern;
