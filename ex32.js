module.exports = function isUpperCase(str = "") {
    if (str == str.toUpperCase() && isLetter(str)) {
        return true
    }
    return false;
}

function isLetter(str = "") {
    if (str.match(/^[A-Za-z]+$/)) {
        return true
    }
    return false
}