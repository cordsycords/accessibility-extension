# accessibility-extension


## Coding Help
The Google Chrome Extension API can be found [here](https://developer.chrome.com/extensions "Google Extension API").

Read the [Getting Started Tutorial](https://developer.chrome.com/extensions/getstarted) to figure out how to load the extension in developer mode.

Here are some [Debugging Tricks](https://developer.chrome.com/extensions/tut_debugging)

## Files
Short description for files are found below. If you add a file, please add a descriptor as well.

### manifest.json
The manifest file stores all of our extension's settings used by the Chrome browser. Permissions are given here.

### background.js 
This is where we put event listeners, which we can use to inject content scripts into the webpage. Content Scripts are where we will be putting most of our code. [Here's](https://developer.chrome.com/extensions/content_scripts) a tutorial on content scripts.

### menu.html 
This is the html for our pop-up menu that goes into the Chrome bar. It is currently setup to be a selector for the different accessibility needs. The UI will change in the future.

### menu.js 
This is the JS file for the pop-up. The JS file should read and write settings into the Chrome Storage API found [here](https://developer.chrome.com/extensions/storage).