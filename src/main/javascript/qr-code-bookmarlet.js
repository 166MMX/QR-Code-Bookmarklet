/*jslint white: true, browser: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: true */
(function (document) {
    //noinspection BadExpressionStatementJS
    "use strict";
    var window = document.defaultView || document.parentWindow,
        url = window.prompt("Enter URL to encode", window.location),
        encodedUrl = encodeURIComponent(url),
        chartUrl = "http://chart.apis.google.com/chart?cht=qr&chs=400x400&chl=" + encodedUrl,
        popUpName = "QR Code",
        popUpFeatures = "top=100,left=200,width=450,height=450";
    if (null === url)
    {
        return;
    }
    window.open(chartUrl, popUpName, popUpFeatures);
}(document));