module.exports = function(str='', end, positionopt = str.length){
    return str.endsWith(end, positionopt)
}