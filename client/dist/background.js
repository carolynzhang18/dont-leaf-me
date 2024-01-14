let blocked;

// Check if current URL is in local storage
const checkUrlAgainstLocalStorage = async (blockedSites, changeInfoUrl) => {
  if (changeInfoUrl != undefined) {
    for (let i = 0; i < blockedSites.length; i++) {
      if (changeInfoUrl.includes(blockedSites[i])) {
        console.log("ALERT");
        chrome.windows.create({
          url: "./js/danger.html", // The URL to open in the new window
          type: "popup", // 'popup' or 'normal'
          width: 800, // Width of the new window
          height: 600, // Height of the new window
          left: 100, // X-coordinate of the new window's top-left corner
          top: 100, // Y-coordinate of the new window's top-left corner
          focused: true, // Whether the new window should be focused
        });
      }
    }
  }
};

//Check if the current url is in the local storage on url change
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  checkUrlAgainstLocalStorage(blocked, changeInfo.url);
});

chrome.runtime.onMessage.addListener(function (info) {
  blocked = info;
  return true;
});
