// ==UserScript==
// @name         Invoke SDI with multiple employee
// @version      0.1
// @description  Invoke SDI with multiple employee
// @author       You
// @match        http://localhost:4201/
// @updateURL    https://raw.githubusercontent.com/dustinspecker/tampermonkey-scripts/master/InvokeSDIWithMultipleEmployees.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.postMessage(JSON.stringify({ type: 'INIT', data: { initializationData: { subjectEmpId: [100, 8, 5425] } }}), window.location.origin);
})();
