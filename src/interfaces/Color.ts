export class Color {
    constructor();
    constructor(hexcolor: string);
    constructor(r: number, g: number, b: number, a?: number);
    constructor(x1?: number | string, x2?: number, x3?: number, x4?: number) {
        if (typeof x1 === "string") {
            this.parseHexString(x1);
        } else if (typeof x1 === "number") {
            this._r = x1;
            this._g = x2;
            this._b = x3;
            this._a = x4 === undefined ? 1 : x4;
        }
    }

    get red(): number {
        return this._r;
    }
    get green(): number {
        return this._g;
    }
    get blue(): number {
        return this._b;
    }
    get alpha(): number {
        return this._a;
    }
    set red(val: number) {
        this._r = Math.min(Math.max(val, 0), 255);
    }
    set green(val: number) {
        this._g = Math.min(Math.max(val, 0), 255);
    }
    set blue(val: number) {
        this._b = Math.min(Math.max(val, 0), 255);
    }
    set alpha(val: number) {
        this._a = Math.min(Math.max(val, 0), 255);
    }

    toHexString(): string {
        return (
            "#" +
            this.toHexByte(this._r) +
            this.toHexByte(this._g) +
            this.toHexByte(this._b) +
            this.toHexByte(this._a)
        );
    }

    clone(): Color {
        return new Color(this._r, this._g, this._b, this._a);
    }

    private _r: number = 0;
    private _g: number = 0;
    private _b: number = 0;
    private _a: number = 255;

    private parseHexString(str: string) {
        const regex = /^#[0-9a-fA-F]*$/;
        if (regex.test(str)) {
            if (str.length === 4) {
                // #RGB
                this._r = parseInt(str.slice(1, 2), 16);
                this._g = parseInt(str.slice(2, 3), 16);
                this._b = parseInt(str.slice(3, 4), 16);
                this._a = 255;
            } else if (str.length === 5) {
                // #RGBA
                this._r = parseInt(str.slice(1, 2), 16);
                this._g = parseInt(str.slice(2, 3), 16);
                this._b = parseInt(str.slice(3, 4), 16);
                this._a = parseInt(str.slice(4, 5), 16);
            }
            if (str.length === 7) {
                // #RRGGBB
                this._r = parseInt(str.slice(1, 3), 16);
                this._g = parseInt(str.slice(3, 5), 16);
                this._b = parseInt(str.slice(5, 7), 16);
                this._a = 255;
                return;
            } else if (str.length === 9) {
                // #RRGGBBAA
                this._r = parseInt(str.slice(1, 3), 16);
                this._g = parseInt(str.slice(3, 5), 16);
                this._b = parseInt(str.slice(5, 7), 16);
                this._a = parseInt(str.slice(7, 9), 16);
                return;
            }
        }
        throw Error("Invalid hexadecimal color string");
    }

    private toHexByte(val: number): string {
        const res = Math.min(Math.max(Math.round(val), 0), 255).toString(16);
        if (res.length == 1) return "0" + res;
        return res;
    }
}
