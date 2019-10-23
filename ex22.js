module.exports = function(str='', start, deleteCountopt = str.length - start, toAddopt=''){
    start = 0
    return str.substring(0, start) + toAddopt + str.substring(start, this.length);
}
// return str.slice(start, deleteCountopt)