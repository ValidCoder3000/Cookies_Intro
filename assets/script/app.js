'use strict';

const date = new Date();
date.setSeconds(date.getSeconds() + 18);
let utcDate = date.toUTCString();

setTimeout(() => {
    console.log(`Cookies after 18 seconds: ${document.cookie}`);
}, 18000);

function setCookie(name, value) {

    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    document.cookie = cookieString;
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for(let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=').map(c => c.trim());

        if(decodeURIComponent(cookieName === name)) return decodeURIComponent(cookieValue);
    }
    return null;
}

function getBrowser() {
    const ua = navigator.userAgent;
    let browserName = "Unknown";
    let fullVersion = "Unknown";

    if (/Chrome\/(\S+)/.test(ua) && !/Edg\/(\S+)/.test(ua)) {
        browserName = "Chrome";
        fullVersion = ua.match(/Chrome\/(\S+)/)[1];

    } else if (/Edg\/(\S+)/.test(ua)) {
        browserName = "Edge";
        fullVersion = ua.match(/Edg\/(\S+)/)[1];

    } else if (/Firefox\/(\S+)/.test(ua)) {
        browserName = "Firefox";
        fullVersion = ua.match(/Firefox\/(\S+)/)[1];

    } else if (/OPR\/(\S+)/.test(ua)) {
        browserName = "Opera";
        fullVersion = ua.match(/OPR\/(\S+)/)[1];

    } else if (/Safari\/(\S+)/.test(ua) && /Version\/(\S+)/.test(ua)) {
        browserName = "Safari";
        fullVersion = ua.match(/Version\/(\S+)/)[1];
    }

    return { browserName, fullVersion };
}

function getOS() { 
    const ua = navigator.userAgent;

    if (ua.includes("Windows")) return "Windows";
    if (ua.includes("Mac OS")) return "Mac OS";
    if (ua.includes("Linux")) return "Linux";
    if (ua.includes("Android")) return "Android";
    if (ua.includes("iPhone") || ua.includes("iPad")) return "iOS";

    return "Unknown OS";
}



function getScreenDimensions(){
    return `width:${screen.width}, height: ${screen.height}` ;
}

if (navigator.cookieEnabled) { 
    console.log("Cookies are enabled.");  
    if (document.cookie) { console.log("There are cookies stored:", document.cookie); } else { console.log("No cookies are stored."); } 
} else { console.log("Cookies are not enabled in this browser."); }

const browserInfo = navigator.userAgent;
console.log("Browser Info:", browserInfo);


console.log(setCookie("Job", "Mathematician"))
console.log(getCookie())
console.log(getBrowser());
console.log(getOS());
console.log(getScreenDimensions());