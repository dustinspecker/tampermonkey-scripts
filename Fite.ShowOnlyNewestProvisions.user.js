// ==UserScript==
// @name         Show Only Newest Provisions
// @version      0.2
// @description  Show Only Newest Provision of each application on fite pages
// @author       You
// @match        http*://www.fite.lan/
// @updateURL    https://raw.githubusercontent.com/dustinspecker/tampermonkey-scripts/master/Fite.ShowOnlyNewestProvisions.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let previousNumberOfProvisionRows = 0;

    setInterval( checkForProvisionChanges, 300 );
    let elements;
    let provisionedAppDiv;

    function checkForProvisionChanges() {
        elements = document.getElementsByClassName('durandal-wrapper');
        provisionedAppDiv = Array.from(elements).find(item => item.attributes['data-view'].value.includes('provision'));
        if(provisionedAppDiv) {
            let numberOfProvisionRows = Array.from(provisionedAppDiv.getElementsByTagName('tr')).length;
            if(numberOfProvisionRows !== previousNumberOfProvisionRows) {
                previousNumberOfProvisionRows = numberOfProvisionRows;
                showNewestAppProvisions();
            }
        }
        else {
            previousNumberOfProvisionRows = 0;
        }
    }

    function getRowAppName(row) {
        let tds = Array.from(row.getElementsByTagName('td'));
        if(!tds[0]) {
            return '';
        }
        return tds[0].textContent;
    }

    function showNewestAppProvisions() {
        console.log('TamperMonkey - Filtering provisioned apps to only the newest.');
        if(provisionedAppDiv) {
            let appRows = provisionedAppDiv.getElementsByTagName('tr');
            let appRowsNewestToOldest = Array.from(appRows).reverse();
            let newestProvisionRowsOnly = {};

            appRowsNewestToOldest.forEach(row => {
                let appName = getRowAppName(row);
                let dictMatch = newestProvisionRowsOnly[appName];
                if(!dictMatch) {
                    newestProvisionRowsOnly[appName] = row;
                }
                else {
                    row.style.display = 'none';
                }
            });
        }
    }
})();
