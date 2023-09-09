// function anagram(firstword, secondword) {
//     const isEqual = JSON.stringify([...secondword].sort()) === JSON.stringify([...firstword].sort());
//     return isEqual;
// }
// console.log(
//     anagram(`listen`, `silent`),
//     anagram(`binary`, `brainy`),
//     anagram(`paris`, `pairs`),
//     anagram('vicc', 'cvvi')
// );

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sym = {0: '', 1: '-', 2: '+'};
const target = 200;
const count = Math.pow(3, numbers.length - 1);
const solutions = [];

for (let i = 0; i <= count; i++) {
    const p = ('00000000' + i.toString(3))
        .slice(-8)
        .split('')
        .map((v) => parseInt(v));
    const num = `1${sym[p[0]]}2${sym[p[1]]}3${sym[p[2]]}4${sym[p[3]]}5${
        sym[p[4]]
    }6${sym[p[5]]}7${sym[p[6]]}8${sym[p[7]]}9`;
    if (eval(num) === 100) {
        solutions.push(num);
    }
}
console.log(solutions);
