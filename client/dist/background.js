let blocked;
let prev = "";

// Check if current URL is in local storage
const checkUrlAgainstLocalStorage = async (blockedSites, changeInfoUrl) => {
  var created = false;
  if (changeInfoUrl != undefined) {
    for (let i = 0; i < blockedSites.length; i++) {
      if (!created && await changeInfoUrl.includes(blockedSites[i])) {
        created = true;
        await chrome.windows.create({
          url: "./js/danger.html", // The URL to open in the new window
          type: "normal", // 'popup' or 'normal'
          width: 800, // Width of the new window
          height: 600, // Height of the new window
          left: 100, // X-coordinate of the new window's top-left corner
          top: 100, // Y-coordinate of the new window's top-left corner
          focused: true, // Whether the new window should be focused
        });
        break;
      }
    }
  }
};

//Check if the current url is in the local storage on url change
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.url === prev) return;
  prev = changeInfo.url;
  setTimeout(await checkUrlAgainstLocalStorage(blocked, changeInfo.url), 2000);
});

chrome.runtime.onMessage.addListener(function (info) {
  blocked = info;
  return true;
});
