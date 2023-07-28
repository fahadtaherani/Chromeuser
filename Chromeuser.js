// ==UserScript==
// @name         Desktop User Agent
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Changes user agent to desktop
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    Object.defineProperty(navigator, 'userAgent', {
        get: function () { return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'; }
    });
})();
