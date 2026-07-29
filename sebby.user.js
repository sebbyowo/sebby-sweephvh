// ==UserScript==
// @name         sebby Button
// @description  Script that adds a button that redirects to sebby profile
// @version      1.0
// @author       sebbyyyowo
// @match        https://sweephvh.com/*
// @icon         https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://sweephvh.com&size=64
// ==/UserScript==

(function () {
    'use strict';

    function addProfileButton() {
        if (document.getElementById("tm-profile-btn")) return;

        const pmBtn = [...document.querySelectorAll("a")].find(a =>
            a.textContent.trim().toLowerCase() === "pm"
        );

        if (!pmBtn) return;

        const profileBtn = pmBtn.cloneNode(true);

        profileBtn.id = "tm-profile-btn";
        profileBtn.textContent = "sebby";
        profileBtn.href = "https://sweephvh.com/users/sebby.4";

        pmBtn.parentNode.insertBefore(profileBtn, pmBtn.nextSibling);
    }

    addProfileButton();

    const observer = new MutationObserver(addProfileButton);
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();