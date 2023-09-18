function reddirect() {
    var savedValue = localStorage.getItem("myValue");
    if (savedValue) {
        document.getElementById("inputValue").value = savedValue;

        var value = localStorage.getItem("myValue");
        userId = value; // Присваиваем значение переменной userId
        const fakeParam = Date.now();
        const themeurl = 'https://api.puzzlebot.top/api?token=2s1OVLz5iHnPeU7dp8ZGAUrFww8cQ4p9&method=getVariableValue&variable=custom_variable_TXYR7BA0XLI7SQY0&user_id=';
        const proxyUrl = 'http://31.129.33.76:8080/';
        const themefullUrl = (themeurl + userId);
        const numberurl = 'https://api.puzzlebot.top/api?token=2s1OVLz5iHnPeU7dp8ZGAUrFww8cQ4p9&method=getVariableValue&variable=number&user_id=';
        const numberfullUrl = (numberurl + userId);
        var ups = document.querySelector(".ups");
        let firstFetchValue = 0;
        let secondFetchValue = 0;
        
        var fetch1 = fetch(proxyUrl + themefullUrl + '?fakeParam=' + fakeParam)
        .then(response => response.json())
        .then(data => {
            firstFetchValue = data.data;
            handleFetchResponse(data.data);
            console.log('Первый fetch:', data.data);
        })
        .catch(error => console.error(error));

        var fetch2 = fetch(proxyUrl + numberfullUrl + '?fakeParam=' + fakeParam)
        .then(response => response.json())
        .then(data => {
            secondFetchValue = data.data;
            handleFetchResponse(data.data);
            console.log('Второй fetch:', data.data);
        })
        .catch(error => console.error(error));
        
        function handleFetchResponse(data) {
            let numericValue = parseInt(secondFetchValue.startsWith("TRA") || secondFetchValue.startsWith("TWN") ? secondFetchValue.substring(3) : secondFetchValue);

            if (firstFetchValue == 0 && numericValue >= 1 && numericValue <= 100) {
                window.location.href = `https://neviie.github.io/WEB/Light/${secondFetchValue}.html`;
            } else if (firstFetchValue == 1 && numericValue >= 1 && numericValue <= 100) {
                window.location.href = `https://neviie.github.io/WEB/Night/N${secondFetchValue}.html`;
            } else {
                ups.style.display = 'block';
            }
        // Другие условия, если необходимо
    }} 
    
    else {
        // Если значение не сохранено в Local Storage, скрываем элементы
        const container = document.querySelector('.container');
        const fon = document.querySelector('.fon');

        container.classList.replace('hidden', 'block');
        fon.classList.replace('hidden', 'block');
    }
    };
 
   function saveData() {
     var value = document.getElementById("inputValue").value;
     localStorage.setItem("myValue", value);
   }
   
   function hideContainer() {
    const container = document.querySelector('.container');
    const fon = document.querySelector('.fon');
    
    container.classList.replace('block', 'hidden');
    fon.classList.replace('block', 'hidden');
}

document.addEventListener("DOMContentLoaded", function() {
    reddirect();
});