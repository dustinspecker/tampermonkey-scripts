// ==UserScript==
// @name         Invoke SDI with 1 employee
// @version      0.1
// @description  Invoke SDI with 1 employee
// @author       You
// @match        http://localhost:4201/
// @updateURL    https://raw.githubusercontent.com/dustinspecker/tampermonkey-scripts/master/InvokeSDIWith1Employee.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.postMessage(JSON.stringify({ type: 'INIT', data: { initializationData: { subjectEmpId: [100] } }}), window.location.origin);
})();
