'use strict';

function createHtmlStartDirective(path, timeoutInSeconds = 480) {
    const startDirective = {
        type: "Alexa.Presentation.HTML.Start",
        configuration: {
            timeoutInSeconds
        }
    };

    let url = getAbsoluteUrl(path);
    Object.assign(startDirective, {
        sessionToken: "MyToken",
        url: url,
    });

    return startDirective;
}

function getAbsoluteUrl(relativePath) {
    return `${litexa.assetsRoot}${litexa.language}/html/${relativePath}`;
}
