module.exports = function(str='', toInsertopt='', positionopt = 0){
    return str.substring(0, positionopt) + toInsertopt + str.substring(positionopt, this.length);
}
