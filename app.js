if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() => console.log("Service Worker kayıt edildi!"))
      .catch((err) => console.log("Service Worker kaydedilemedi!", err));
  });
}

document.getElementById("openYouTube").addEventListener("click", function () {
  window.open("https://www.youtube.com", "_blank");
});
