module.exports = function isDigit(str = "") {
    if (str === null || str.match(/^ *$/) !== null) {
        return true
    }
    return false
}