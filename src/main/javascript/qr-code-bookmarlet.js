"use strict";
(function () {
    var window = window,
        url = window.prompt("Enter URL to encode", window.location),
        encodedUrl = encodeURIComponent(url),
        chartUrl = "http://chart.apis.google.com/chart?cht=qr&chs=400x400&chl=" + encodedUrl,
        popUpName = "Qr code",
        popUpFeatures = "top=100,left=200,width=450,height=450";
    window.open(chartUrl, popUpName, popUpFeatures);
}());