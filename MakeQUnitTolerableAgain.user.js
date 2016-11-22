// ==UserScript==
// @name         MakeQUnitTolerableAgain.user.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @match        http*://localhost:420*/tests*
// @updateURL    https://raw.githubusercontent.com/dustinspecker/tampermonkey-scripts/master/MakeQUnitTolerableAgain.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const makeGreatAgainify = () => {
        const container = document.getElementById("qunit-modulefilter-dropdown-list");

        // Gather all the LI's from the container
        const contents = container.querySelectorAll("li");

        // The querySelector doesn't return a traditional array
        // that we can sort, so we'll need to convert the contents
        // to a normal array.
        let list = [];
        for(let i=0; i<contents.length; i++){
            list.push(contents[i]);
        }

        // Sort based on innerHTML (sorts "in place")
        list.sort((a, b) => {
            const aa = a.textContent;
            const bb = b.textContent;
            return aa > bb ? -1 : (aa < bb ? 1 : 0);
        });

        list = list.filter(li => !li.textContent.startsWith('JSHint'));
        const jsHintNum = contents.length - list.length;

        // Shuffle the order based on the order of our list array.
        for(let i=0; i<list.length; i++){
            container.insertBefore(list[i], container.firstChild);
        }

        // Remove JSHint items because they're useless
        for (let i = contents.length - 1; i > contents.length - jsHintNum - 1; i--) {
            container.removeChild(container.childNodes[i]);
        }
    };
    waitForKeyElements ("#qunit-modulefilter-dropdown-list", makeGreatAgainify);
})();
