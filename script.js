const url = 'https://cp.puzzlebot.top/api?token=2s1OVLz5iHnPeU7dp8ZGAUrFww8cQ4p9&method=getVariableValue&variable=custom_variable_JHCW5J5N0KX6CBUG&user_id=487518336';
const proxyUrl = 'https://api.allorigins.win/raw?url=';

fetch(proxyUrl + encodeURIComponent(url))
  .then(response => response.text())
  .then(data => {
    // Обновляем содержимое элемента с идентификатором "result"
    document.getElementById('result').innerHTML = data;
  })
  .catch(error => console.error(error));
	  
document.querySelector('h1').addEventListener('click', function() {
  location.reload(true);
});
