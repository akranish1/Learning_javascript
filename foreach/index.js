const a = [1, 2, 3, 3, 5, 6, 6, 6, 7, 0];
const na = a.filter((val, i, a) => {
    return a.indexOf(val) === i;
});
console.log(na)