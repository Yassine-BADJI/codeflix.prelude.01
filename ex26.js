module.exports = function isAlpha(str = ""){
    regex = /^[A-Za-z0-9]+$/;
    if (regex.test(str))
    {return true}
        return false
}
