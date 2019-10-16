module.exports = function isLowerCase(str = "") {
    if (str == str.toLowerCase() && isLetter(str)) {
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