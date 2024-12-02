// Initial title to compare against
let previousTitle = document.title;

// Function to play a beep sound
function playBeep() {
  const beep = new Audio(
    "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
  ); // Online beep sound
  beep.play().catch((error) => console.error("Audio playback failed:", error));
}

// Function to send a notification
function sendNotification() {
  chrome.runtime.sendMessage({
    type: "notification",
    title: "Prolific Alert",
    message: "A new study is available!",
  });
}

// Monitor changes to the document title
setInterval(() => {
  if (document.title !== previousTitle && document.title.includes("(1)")) {
    playBeep(); // Play the beep
    sendNotification(); // Show notification
    previousTitle = document.title; // Update the stored title
  }
}, 1000); // Check every second
