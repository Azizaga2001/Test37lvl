function afterNYears(obj, year) {
    for (let a in obj) {
        a += year
    }
}

console.log(afterNYears({
    "joel": 32,
    "Fred": 44
}, 1));