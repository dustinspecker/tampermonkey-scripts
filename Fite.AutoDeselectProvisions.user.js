// ==UserScript==
// @name         Auto Deselect Provisions
// @version      0.3
// @description  Automatically deselect provisions
// @author       You
// @match        http*://www.fite.lan/
// @updateURL    https://raw.githubusercontent.com/dustinspecker/tampermonkey-scripts/master/Fite.AutoDeselectProvisions.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const handler = () => {
        const btns = document.querySelectorAll('.btn-group button');
        const deselectBtn = Array.from(btns).find(btn => btn.innerHTML.toLowerCase() === 'deselect all');

        if(deselectBtn) {
            deselectBtn.click();
        }

        Array.from(document.querySelectorAll('input[type=checkbox]')).forEach(input => input.checked = false);
    };

    if (window.location.hash.endsWith('provision')) {
        window.addEventListener('scroll', handler);
    }
})();

