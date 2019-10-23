module.exports = function(str='', search, fromIndexopt = str.length - 1){
    var index = str.lastIndexOf(search, fromIndexopt) ;
    return index;
}
