// ==UserScript==
// @name         Invoke SDI with a delegate
// @version      0.3
// @description  Invoke SDI with a delegate
// @author       You
// @match        http://localhost:4201/
// @updateURL    https://raw.githubusercontent.com/dustinspecker/tampermonkey-scripts/master/InvokeSDIWithDelegate.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.postMessage(JSON.stringify({ type: 'INIT', data: { initializationData: { applicationName: 'SDI', authorEmpId: 100, subjectEmpId: [100], delegateEmpId: 5425 } }}), window.location.origin);
})();
