<!-- 
# Cookies Assignment – Web Development Project

## Overview
This project demonstrates the use of **cookies** to store user information such as browser type, operating system, and screen dimensions. The application interacts with the user through **modals/dialogs**, allowing them to accept all cookies or customize their cookie preferences. Cookies are temporary and last 15–20 seconds for testing purposes.

---

## Features
- Detects whether cookies are enabled in the browser.
- Checks for existing cookies on page load.
- **First dialog:** informs the user about cookie usage and provides options:
  - Accept All  
  - Settings (choose specific cookies to store)
- **Second dialog:** allows users to select which information to store:
  - Browser
  - Operating System
  - Screen Width
  - Screen Height
- Cookies are automatically created based on the user’s choice.
- All cookies expire after 20 seconds, allowing testing and resetting of dialogs.

---

## Technologies Used
- HTML5 for structure
- CSS3 for styling, including toggle switches and dialog animations
- JavaScript for:
  - Cookie management (`setCookie`, `getCookie`)
  - Browser and OS detection (`navigator.userAgent`)
  - Screen dimensions (`screen.width` / `screen.height`)
  - Modal interactions and user preferences

---

## How to Use
1. Open `index.html` in a modern web browser.
2. If no cookies exist, the first dialog appears after a short delay.
3. Choose **Accept All** to store all cookies or **Settings** to select individual options.
4. Observe the cookies in the browser’s developer tools (Application → Cookies).
5. Reload the page after 15–20 seconds to see the dialogs appear again for testing.

---

## File Structure
```
/project-folder
│── index.html
│── /assets
│   ├── style
│   │   └── index.css
│   └── script
│       └── app.js
```

---

## Notes
- The project demonstrates **temporary cookie storage** to allow testing.
- All modals are fully interactive and reset automatically based on cookie expiration.
- Designed for learning and testing **cookie handling, user preferences, and DOM manipulation**. -->


{"id":"81753","variant":"standard"}
# My Cookies Assignment

## Overview
This is a small web project where I use **cookies** to save some info about the user’s device, browser, and screen size. It shows dialogs to let the user accept all cookies or pick which ones to save. Cookies last about 15–20 seconds so that it can be easily tested.

---

## What It Does
1. Checks if cookies are enabled and if any cookies already exist.
2. Shows a first dialog telling the user about cookies with 2 buttons:
  - **Accept All** → saves all cookies
  - **Settings** → lets the user choose what info to save
3. Shows a second dialog with toggle switches for:
  - Browser
  - Operating System
  - Screen Width
  - Screen Height
- Saves cookies depending on what the user picks.
- Cookies disappear after 15–20 seconds so the dialogs show again when you reload.

---

## How It was Made
- **HTML** – for the page structure and dialogs
- **CSS** – for the look, toggle switches, and animations
- **JavaScript** – to check cookies, get browser/OS info, screen size, and handle dialogs

---

## How to Use
1. Open `index.html` in a browser.
2. If there are no cookies, the first dialog pops up after a short wait.
3. Click **Accept All** to save all cookies, or **Settings** to pick which ones.
4. Check your browser dev tools to see the cookies.
5. Wait 15–20 seconds and reload to see dialogs appear again.




