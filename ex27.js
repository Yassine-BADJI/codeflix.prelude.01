module.exports = function isAlphaDigit (str = ""){
    regex = /^[a-z0-9]+$/i;
    if (regex.test(str))
    {return true}
    return false
}