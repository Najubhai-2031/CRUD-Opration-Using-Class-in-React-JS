const obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0};

const toNumericPairs = input => {
    const entries = Object.entries(input);
    return entries.map(entry => Object.assign(entry, { 0: +entry[0] }));
}

console.log(toNumericPairs(obj));