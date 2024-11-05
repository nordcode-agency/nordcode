export const toFixed = (num: number, precision: number): number => {
    const pow = 10 ** precision;
    return Math.round(num * pow) / pow;
};
