module.exports = function(str='', patternopt){
    patternopt = /[A-Z]/g
    var matches = str.match(patternopt) ;
    return  matches.length;
}
