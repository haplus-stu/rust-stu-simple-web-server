// ==UserScript==
// @name         Youtube subscription foloder
// @namespace    http://youtube.com/*
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.tampermonkey.net/index.php?version=4.10&ext=dhdg&updated=true
// @grant        none
// @include      https://www.youtube.com/*
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    alert('You are youtube.com here');
    let div = document.querySelecter('.style-scope ytd-guide-section-renderer');
    let p = document.createElement('p');
    p.textContent = 'You are youtube.com here';
    div.appendChild(p);
})();