module.exports = function isString(str = "") {
    if (typeof str === 'string') {
        return true
    }
    return false
}