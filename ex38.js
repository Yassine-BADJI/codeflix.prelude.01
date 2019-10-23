module.exports = function(str='', patternopt, flagsopt=''){
    patternopt = /[A-Z]/g
    var matches = str.match(patternopt)
    var b = matches.split(flagsopt)
    return matches
}