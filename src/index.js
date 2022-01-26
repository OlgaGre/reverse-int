module.exports = function reverse(n) {
    let num = String(n).split('').reverse().join('')
    if (n >= 0) {
        return num
    } else {
        return num.slice(0, num.length - 1)
    }
}