let blocked;

// Check if current URL is in local storage
const checkUrlAgainstLocalStorage = async (blockedSites, changeInfoUrl) => {
    console.log(changeInfoUrl);
    console.log(blockedSites);
  if (changeInfoUrl != undefined) {
    for (let i = 0; i < blockedSites.length; i++) {
      console.log(blockedSites[i]);
      if (changeInfoUrl.includes(blockedSites[i])) {
        console.log("BADDD");
        break;
      }
    }
  }
};

//Check if the current url is in the local storage on url change
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  checkUrlAgainstLocalStorage(blocked, changeInfo.url);
});

chrome.runtime.onMessage.addListener(function(info) {
  blocked = info;
  return true;
});
