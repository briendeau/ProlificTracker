chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "notification") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "notify.png", // Replace with your extension's icon
      title: message.title,
      message: message.message,
    });
  }
});
