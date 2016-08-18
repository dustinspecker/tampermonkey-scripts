// ==UserScript==
// @name         Invoke SDI with nothing
// @version      0.1
// @description  Invoke SDI right away
// @author       You
// @match        http://localhost:4201/
// @updateURL    https://raw.githubusercontent.com/dustinspecker/tampermonkey-scripts/master/InvokeSDIWithNothing.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.postMessage(JSON.stringify({ type: 'INIT', data: { initializationData: {} }}), window.location.origin);
})();
