'use strict';
// Pseudo Code:Make an if statement so that when there are cookies stored, dialog pops out, else dialog doesnt pop out.

// Make your cookies ‘live’ for 15-20 seconds so you can ‘reset’ your application and see the dialogs again
const date = new Date();
date.setSeconds(date.getSeconds() + 18); // 18 seconds in the future
let utcDate = date.toUTCString();

setTimeout(() => {
    console.log(`Cookies after 18 seconds: ${document.cookie}`);
}, 18000);

document.cookie = `Name=Emmanuel; path=/; expires=${utcDate}, SameSite=Lax`;
// • Use the setCookie() and getCookie() functions.
function setCookie(name, value, maxAge) {
    const options = {
        path: '/',
        SameSite: 'Lax'
    };

    if (maxAge) {
        options.maxAge = maxAge; // Add maxAge only if needed
    }

    // construct the cookie string
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    // let cookies=String = `${encodeURICOmponent(name)}=${encodeURICOmponent(value)}`;
    for (let option in options) {
        cookieString += `; ${option}=${options[option]}`;
    }

    // sets the cookie
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

// Make your cookies ‘live’ for 15-20 seconds so you can ‘reset’ your application and see the dialogs again
// const date = new Date();
// date.setSeconds(date.getSeconds() + 18);  18 seconds in the future
// let utcDate = date.toUTCString();

// document.cookie = `City=Winnipeg; path=/; expires=${utcDate}`;
// console.log(`Initially set cookie: ${document.cookie}`);

// setTimeout(() => {
//     document.cookie = `City=Winnipeg; path=/; expires=Thu, 01 Jan 2020 00:00:00 UTC`;
//     console.log(`Cookies after 12 seconds: ${document.cookie}`);
// }, 18000);
// • Use the navigator and screen objects to obtain information about the browser, operating system, and device's screen dimensions. Create functions to get browser name and OS name.


    // screen: return `Screen height:${screen.height} and Screen width:${screen.width}`,
function getBrowser() {
    const ua = navigator.userAgent;
    let browserName = "Unknown";
    let fullVersion = "Unknown";

    // Chrome (exclude Edge)
    if (/Chrome\/(\S+)/.test(ua) && !/Edg\/(\S+)/.test(ua)) {
        browserName = "Chrome";
        fullVersion = ua.match(/Chrome\/(\S+)/)[1];

    // Edge
    } else if (/Edg\/(\S+)/.test(ua)) {
        browserName = "Edge";
        fullVersion = ua.match(/Edg\/(\S+)/)[1];

    // Firefox
    } else if (/Firefox\/(\S+)/.test(ua)) {
        browserName = "Firefox";
        fullVersion = ua.match(/Firefox\/(\S+)/)[1];

    // Opera
    } else if (/OPR\/(\S+)/.test(ua)) {
        browserName = "Opera";
        fullVersion = ua.match(/OPR\/(\S+)/)[1];

    // Safari
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

console.log(setCookie())
console.log(getCookie())
console.log(getBrowser());
console.log(getOS());
console.log(getScreenDimensions());


// console.log("Operating System:", getOS());

    //     return `browserName: ${navigator.userAgent}`},
    // operatingSystem() {return `operatingSystem`}

// const screen = {deviceDimension: 'cage'};

// when the user opens the page, your code checks if cookies are enabled and if there are any cookies stored.
if (navigator.cookieEnabled) { 
    console.log("Cookies are enabled."); 
    // Check if there are any cookies stored 
    if (document.cookie) { console.log("There are cookies stored:", document.cookie); } else { console.log("No cookies are stored."); } 
} else { console.log("Cookies are not enabled in this browser."); }

const browserInfo = navigator.userAgent;
console.log("Browser Info:", browserInfo);

/* addEventListener {
    Here I would make a function or do somethin function related that would make it be that if navigator.cookieEnabled, then you should add an event listener that would make one of the modal pop ups that is in the HTML file to display depending on the kind of file that is placed.          
    
}*/
// if (!navigator.cookieEnabled || !document.cookie) {
//     setTimeout(() => {
//         showFirstModal();
//     }, 500); 
// }

