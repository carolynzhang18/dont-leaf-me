let blocked;
// Check if current URL is in local storage
const checkUrlAgainstLocalStorage = async (blocked, changeInfo) => {
    console.log(blocked);
    console.log(changeInfo);

    // Get the current tab
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    const currentTab = tabs[0];
    console.log(currentTab.url);
    
    if (!currentTab.url) return;
  
    // Retrieve your list of URLs from local storage
    chrome.storage.local.get(['urls'], function(result) {
      const urlList = result.urls || undefined;
      
      // Check if the current tab's URL is in the list
      if (urlList.includes(currentTab.url)) {
        console.log('URL is in the list!');
        // Do something if the URL is in the list
      } else {
        console.log('URL is not in the list.');
        // Do something else if the URL is not in the list
      }
    });
};



//Check if the current url is in the local storage on url change
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  checkUrlAgainstLocalStorage(blocked, changeInfo.url);
});

chrome.runtime.onMessage.addListener(function(info) {
  blocked = info;
  return true;
});
