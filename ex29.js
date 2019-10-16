module.exports = function isDigit(str = "") {
    if (str.match(/^-{0,1}\d+$/)) {
        return true
    }
    return false
}