// factorial

function factorial(n) {
    if ((n < 0 || n > 12)) {
        return rangeerror
    }
    if (n === 0) {
        return 1
    }
    let facto = 1
    for (let i = 1; i <= n; i++) {
        facto = facto * (i)
    }
    return facto
}

const get = factorial(8)
console.log(get)