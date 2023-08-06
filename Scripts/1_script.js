	    // Обновляем число при загрузке страницы
   // Массив с путями к картинкам
   var images = [
    "control_banana_1.png",
    "contol_cat_2.png",
    "control_cherry_3.png",
    "control_duck_4.png",
    "control_flower_5.png",
    "control_house_6.png",
    "control_plane_7.png",
    "control_rocket_8.png",
    "control_tea_9.png",
    "conrol_tram_10.png",
    // Добавьте пути к другим картинкам
  ];
  // Переменные для хранения текущих индексов картинок
  var leftImageIndex;
  var rightImageIndex;
  var userId;


function getRandomNumber() {
    var numbers = [0, 35, 70];
    var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    return randomNumber;
  }
  
  // Функция для обновления числа
  function update1Number() {
    var numberElement = document.getElementById('number');
    var numberElement2 = document.getElementById('number2');
   var numberElement3 = getRandomNumber();
    numberElement.textContent = numberElement3;
    numberElement2.textContent = numberElement3;
  }
  
  window.onload = function() {
       update1Number();
  
    var leftImageElement = document.getElementById('left-image');
    var rightImageElement = document.getElementById('right-image');
      
    // Генерируем случайные начальные значения для индексов
    leftImageIndex = Math.floor(Math.random() * images.length);
    rightImageIndex = leftImageIndex;
    while (rightImageIndex === leftImageIndex) {
      rightImageIndex = Math.floor(Math.random() * images.length);
    }

    // Устанавливаем начальные значения индексов и отображаем картинки
    leftImageElement.src = images[leftImageIndex];
    rightImageElement.src = images[rightImageIndex];

    // Вызываем функцию displayValue()
    displayValue();
  };

  // Функция для обновления числа при нажатии
  function update2Number() {
    var numberElement = document.getElementById('number');
    var numberElement2 = document.getElementById('number2');
    var currentNumber = parseInt(numberElement.textContent);
    var numbers = [0, 35, 70];

    // Находим следующее число в порядке возрастания
    var nextNumberIndex = numbers.indexOf(currentNumber) + 1;
    if (nextNumberIndex >= numbers.length) {
      nextNumberIndex = 0;
    }

    // Обновляем текст на странице
    numberElement.textContent = numbers[nextNumberIndex];
    numberElement2.textContent = numbers[nextNumberIndex];
  }

  // Функция для обновления левой картинки при нажатии
  function updateLeftImage() {
    var leftImageElement = document.getElementById('left-image');

    // Обновляем индекс левой картинки
    leftImageIndex++;
    if (leftImageIndex >= images.length) {
      leftImageIndex = 0;
    }

    // Обновляем отображаемую картинку
    leftImageElement.src = images[leftImageIndex];
  }

  // Функция для обновления правой картинки при нажатии
  function updateRightImage() {
    var rightImageElement = document.getElementById('right-image');

    // Обновляем индекс правой картинки
    rightImageIndex++;
    if (rightImageIndex >= images.length) {
      rightImageIndex = 0;
    }

    // Обновляем отображаемую картинку
    rightImageElement.src = images[rightImageIndex];
  }

  // Функция для получения значения из localStorage
  function displayValue() {
    var value = localStorage.getItem("myValue");
    userId = value; // Присваиваем значение переменной userId
    console.log(userId); // Выводим значение в консоль (для демонстрации)
    // Дальше можно использовать значение переменной userId по вашему усмотрению
    
    
  
  
  const url = 'https://api.puzzlebot.top/api?token=2s1OVLz5iHnPeU7dp8ZGAUrFww8cQ4p9&method=getVariableValue&variable=custom_variable_JHCW5J5N0KX6CBUG&user_id=';
  const proxyUrl = 'https://api.codetabs.com/v1/proxy?quest=';
  const fullUrl = (url + userId);
  const UstUrl = 'https://api.puzzlebot.top/api?token=2s1OVLz5iHnPeU7dp8ZGAUrFww8cQ4p9&method=getVariableValue&variable=custom_variable_IY2WMO6EZ6G64HDH&user_id=';
  const fullUstUrl = (UstUrl + userId);
  const passenUrl = 'https://api.puzzlebot.top/api?token=2s1OVLz5iHnPeU7dp8ZGAUrFww8cQ4p9&method=getVariableValue&variable=passengers&user_id=';
  const fullpassenUrl = (passenUrl + userId);
  const fakeParam = Date.now(); // создание фиктивного параметра с текущим временем в миллисекундах
  const emailurl = 'https://api.puzzlebot.top/api?token=2s1OVLz5iHnPeU7dp8ZGAUrFww8cQ4p9&method=getVariableValue&variable=FIRST_NAME_TEXT&user_id=';
  const fullemailUrl = (emailurl + userId);
  
  fetch(`${proxyUrl}${encodeURIComponent(fullemailUrl)}&fake_param=${fakeParam}`)
    .then(response => response.json())
    .then(data => {
      // Обновляем содержимое элемента с идентификатором "result"
      document.getElementById('emailid').innerHTML = data.data;
    })
    .catch(error => console.error(error));
    
  fetch(`${proxyUrl}${encodeURIComponent(fullUrl)}&fake_param=${fakeParam}`)
    .then(response => response.json())
    .then(data => {
      // Обновляем содержимое элемента с идентификатором "result"
      document.getElementById('result').innerHTML = data.data;
      document.getElementById('result2').innerHTML = data.data;
    })
    .catch(error => console.error(error));
    
    fetch(`${proxyUrl}${encodeURIComponent(fullUstUrl)}&fake_param=${fakeParam}`)
    .then(response => response.json())
    .then(data => {
      // Обновляем содержимое элемента с идентификатором "result"
      document.getElementById('ustr').innerHTML = data.data;
    })
    .catch(error => console.error(error));
    
    fetch(`${proxyUrl}${encodeURIComponent(fullpassenUrl)}&fake_param=${fakeParam}`)
    .then(response => response.json())
    .then(data => {
      // Обновляем содержимое элемента с идентификатором "result"
      document.getElementById('passen').innerHTML = data.data;
    })

      const timeurl = 'https://api.puzzlebot.top/api?token=2s1OVLz5iHnPeU7dp8ZGAUrFww8cQ4p9&method=getVariableValue&variable=custom_variable_EQUMN64C802ABNQD&user_id=';
      const timefullUrl = (timeurl + userId);
      
      fetch(`${proxyUrl}${encodeURIComponent(timefullUrl)}&fake_param=${fakeParam}`)
        .then(response => response.json())
        .then(data => {
          // Обновляем содержимое элемента с идентификатором "result"
          document.getElementById('current_date_time_block').innerHTML = data.data;
        
                // Получаем строку времени в формате "21:22:22"
          var timeString = data.data;
          
          // Разделяем строку времени на компоненты (часы, минуты и секунды)
          var timeComponents = timeString.split(':');
          
          // Получаем часы и минуты
          var hours = timeComponents[0];
          var minutes = timeComponents[1];
          
          // Формируем новую строку времени без секунд
          var formattedTime = hours + ':' + minutes;
          
          // Вставляем отформатированное время в элемент с идентификатором "date_time"
          document.getElementById('date_time').textContent = formattedTime;
        })
        .catch(error => console.error(error));
        
      
      fetch(`${proxyUrl}${encodeURIComponent(timefullUrl)}&fake_param=${fakeParam}`)
        .then(response => response.json())
        .then(data => {
          // Получаем текущую дату
          const currentDate = new Date();
          // Форматируем дату в строку в нужном формате
          const formattedDay = currentDate.getDate().toString().padStart(2, '0');
          const formattedMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
          const formattedYear = currentDate.getFullYear().toString();
          const formattedDate = `${formattedDay}.${formattedMonth}.${formattedYear} `;
          // Обновляем содержимое элемента с идентификатором "current_date_time_block"
          document.getElementById('x').innerHTML = `${formattedDate} ${data.data}`;
        })
        
        .catch(error => console.error(error));
        
        var timerElement = document.getElementById("timer");
var startDate;

// Получаем дату из API при загрузке страницы
function fetchStartDate() {

const timerurl = 'https://api.puzzlebot.top/api?token=2s1OVLz5iHnPeU7dp8ZGAUrFww8cQ4p9&method=getVariableValue&variable=custom_variable_4BR7NHAOB92588S5&user_id=';
const proxyUrl = 'https://api.codetabs.com/v1/proxy?quest=';
const fulltimerUrl = (timerurl + userId);
const fakeParam = Date.now(); // создание фиктивного параметра с текущим временем в миллисекундах

fetch(`${proxyUrl}${encodeURIComponent(fulltimerUrl)}&fake_param=${fakeParam}`)
  .then(response => response.json())
  .then(data => {
    // Создаем объект Date из полученного значения
    startDate = new Date(data.data * 1000);
    
    // Обновляем таймер сразу после получения даты
    updateTimer();
    
    // Обновляем таймер каждую секунду после получения даты
    setInterval(updateTimer, 1000);
  })
  .catch(error => console.log(error));
}

// Функция для обновления секундомера
function updateTimer() {
// Вычисляем разницу между текущей датой и начальной датой
var diff = new Date() - startDate;

// Преобразуем разницу в формат "чч:мм:сс"
var hours = Math.floor(diff / 3600000);
var minutes = Math.floor((diff - hours * 3600000) / 60000);
var seconds = Math.floor((diff - hours * 3600000 - minutes * 60000) / 1000);
var formattedTime = 
  minutes.toString().padStart(2, '0') + ':' +
  seconds.toString().padStart(2, '0');

// Отображаем секундомер на странице
timerElement.innerText = formattedTime;
}

fetchStartDate();

        }