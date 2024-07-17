declare global {
    interface Array<T> {
        interpolate(value:  (index: string) => T): Array<T>;
    }
}

Array.prototype.interpolate = function<T>(this: T[], value: (index: string) => T): T[] {
    if (this.length < 2) {
        return this;
    }
    const result: T[] = [this[0]];
    for (let i = 1; i < this.length; i++) {
        result.push(value(i+"b"));
        result.push(this[i]);
    }
    return result;
};

export {};
