const notifications = document.querySelectorAll(".main__notification-div");
const markAllReadBtn = document.querySelector(".header__mark-all-as-read");
const notificationCount = document.querySelector(
  ".header__number-of-notifications"
);

// Function to check and handle the "Mark all as read" functionality
function checkNotification() {
  notifications.forEach((item) => {
    if (item.classList.contains("active")) {
      // Set background color to white
      item.style.backgroundColor = "white";

      // Select the nested '.notification-indicator' element within the same container and hide it
      const indicator = item.querySelector(".notification-indicator");
      if (indicator) {
        indicator.style.display = "none";
      }

      // Remove the 'active' class (as the notification has been "read")
      item.classList.remove("active");

      // Decrease the notification count by 1
      let currentCount = parseInt(notificationCount.textContent);
      notificationCount.textContent = currentCount - 1;
    }
  });
}

// Add event listener to "Mark all as read" button
markAllReadBtn.addEventListener("click", checkNotification);

// Add click event listener to each '.main__notification-div.active' container
notifications.forEach((item) => {
  if (item.classList.contains("active")) {
    // Add click event to remove background and hide the '.notification-indicator' element on click
    item.addEventListener("click", () => {
      // Set background color to white (same as when marked as read)
      item.style.backgroundColor = "white";

      // Select the '.notification-indicator' element and hide it
      const indicator = item.querySelector(".notification-indicator");
      if (indicator) {
        indicator.style.display = "none";
      }

      // Remove the 'active' class from this specific container
      item.classList.remove("active");

      // Decrease the notification count by 1
      let currentCount = parseInt(notificationCount.textContent);
      notificationCount.textContent = currentCount - 1;
    });
  }
});
