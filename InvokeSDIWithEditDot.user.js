// ==UserScript==
// @name         Invoke SDI with a dot id to edit
// @version      0.4
// @description  Invoke SDI with a dot id to edit
// @author       You
// @match        http*://localhost:4201/
// @updateURL    https://raw.githubusercontent.com/dustinspecker/tampermonkey-scripts/master/InvokeSDIWithEditDot.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.postMessage(JSON.stringify({ type: 'INIT', data: { initializationData: { applicationName: 'SDI', authorEmpId: 100, editDotId: 2 } }}), window.location.origin);
})();
