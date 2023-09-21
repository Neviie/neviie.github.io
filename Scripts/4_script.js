window.onload= reddirect;

const container = document.querySelector('.container');
const fon = document.querySelector('.fon');
var ups = document.querySelector(".ups");

function reddirect() {
    var savedValue = localStorage.getItem("myValue");
    if (savedValue) {
        
        document.getElementById("inputValue").value = savedValue;
        var value = localStorage.getItem("myValue");
        userId = value; // Присваиваем значение переменной userId
        const fakeParam = Date.now();
        const index = 'https://api.puzzlebot.top/api?token=2s1OVLz5iHnPeU7dp8ZGAUrFww8cQ4p9&method=getVariableValue&variable=index&user_id=';
        const proxyUrl = 'https://avt59.ru.:8443/';
        const indexfull = (index + userId);
        let theme = 0;
        let BusNumber = 0;

        fetch(proxyUrl + indexfull + '?fakeParam=' + fakeParam)
        .then(response => {
            if (!response.ok) {
                ups.style.display = 'block';
            }
            return response.json();
        })
        .then(data => {
            if (data && data.data) {
                const variables = data.data.split(' ; ');
                theme = variables[0];
                BusNumber = variables[1];

                handleFetchResponse(data.data);
                console.log("theme: " + theme + ", BusNumber: " + BusNumber);
            } else {

                container.classList.replace('hidden', 'block');
                fon.classList.replace('hidden', 'block');

                savedValue = "Неверный ID";
                document.getElementById("inputValue").value = savedValue;
            }
        })
        .catch(error => {
            console.error(error);
            document.getElementById("inputValue").value = "неверный id";
        });

    function handleFetchResponse(data) {
        let numericValue = parseInt(BusNumber.startsWith("TRA") || BusNumber.startsWith("TWN") ? BusNumber.substring(3) : BusNumber);

        if (theme == 0 && numericValue >= 1 && numericValue <= 100) {
            window.location.href = `/WEB/Light/${BusNumber}.html`;
        } else if (theme == 1 && numericValue >= 1 && numericValue <= 100) {
            window.location.href = `/WEB/Night/N${BusNumber}.html`;
        } else {
            ups.style.display = 'block';
        }
    }
    }
    else {
        // Если значение не сохранено в Local Storage, скрываем элементы

        container.classList.replace('hidden', 'block');
        fon.classList.replace('hidden', 'block');
    }

    };
 
   function saveData() {
     var value = document.getElementById("inputValue").value;
     localStorage.setItem("myValue", value);
   }
   
   function hideContainer() {   
    container.classList.replace('block', 'hidden');
    fon.classList.replace('block', 'hidden');
}