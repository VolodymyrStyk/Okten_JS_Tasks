//5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC)
// и диаметром основания 4м (dC), результат поместите в переменную v.

let heightC = 10;
let dC = 4;

let v = Math.PI * (Math.pow(dC / 2, 2)) * heightC;

console.log(v);