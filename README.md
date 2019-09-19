# accessibility-extension

## Coding Help
The Google Chrome Extension API can be found [here](https://developer.chrome.com/extensions "Google Extension API").

**background.js** This is where we put event listeners, which we can use to inject content scripts into the webpage. Content Scripts are where we will be putting most of our code. [Here's](https://developer.chrome.com/extensions/content_scripts) a tutorial on content scripts.


**menu.html** This is the html for our pop-up menu that goes into the Chrome bar.
**menu.js** This is the JS file for the pop-up. The JS file should read and write settings into the Chrome Storage API found [here](https://developer.chrome.com/extensions/storage).