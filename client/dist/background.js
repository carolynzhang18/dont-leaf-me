let blocked;

// Check if current URL is in local storage
const checkUrlAgainstLocalStorage = async (blockedSites, changeInfoUrl) => {
  if (changeInfoUrl != undefined) {
    for (let i = 0; i < blockedSites.length; i++) {
      if (changeInfoUrl.includes(blockedSites[i])) {
        await console.log("ALERT");
        await window.alert("ALERT");
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
