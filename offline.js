if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function(registration) {
        console.log('Service Worker зарегистрирован:', registration);
      })
      .catch(function(error) {
        console.log('Ошибка при регистрации Service Worker:', error);
      });
  });
}
