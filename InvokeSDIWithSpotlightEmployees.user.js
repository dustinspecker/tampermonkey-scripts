// ==UserScript==
// @name         Invoke SDI with spotlight employees
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http*://localhost:4201/
// @updateURL    https://raw.githubusercontent.com/dustinspecker/tampermonkey-scripts/master/InvokeSDIWithSpotlightEmployees.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

     window.postMessage(JSON.stringify({ type: 'INIT', data: { initializationData: { applicationName: 'SDI', authorEmpId: 100, spotlightEmpIds: [100, 5425, 8], spotlightLabelText: 'Participants' } }}), window.location.origin);
})();
