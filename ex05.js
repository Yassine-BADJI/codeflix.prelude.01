module.exports = function decapitalize (str = "") {
    return str.charAt(0).toLowerCase() + str.substring(1);
}