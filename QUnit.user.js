// ==UserScript==
// @name         Make QUnit tolerable again
// @version      0.1
// @description  Make QUnit tolerable again
// @author       You
// @match        http*://localhost:4201/
// @updateURL    https://raw.githubusercontent.com/dustinspecker/tampermonkey-scripts/master/QUnit.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    $(document).ready(function () {
        $('#qunit-modulefilter label:contains(JSHint)').parent().hide();
    });
})();
