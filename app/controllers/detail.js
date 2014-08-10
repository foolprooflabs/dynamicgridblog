var args = arguments[0] || {};
var data = args.data;

//convert "&#[number]"
function parseHtmlEntities(str) {
    return str.replace(/&#([0-9]{1,4});/gi, function(match, numStr) {
        var num = parseInt(numStr, 10); // read num as normal number
        return String.fromCharCode(num);
    });
}

$.img.image = data.image;
$.title.text = parseHtmlEntities(data.title).trim();