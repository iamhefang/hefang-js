export function range(min: number, max: number, step: number = 1) {
    const arr = [];
    step = step || 1;
    for (let i = min; i <= max; i += step) {
        arr.push(i);
    }
    return arr;
}
