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




