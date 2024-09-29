// Функция для генерации случайного четырехзначного числа
function generateRandomFourDigitNumber() {
    return Math.floor(1000 + Math.random() * 9000);
}

// Функция для обновления значений на странице
function updateRandomNumbers() {
    // Генерация случайных чисел
    const randomNum1 = generateRandomFourDigitNumber();
    const randomNum2 = generateRandomFourDigitNumber();
    const randomNum3 = generateRandomFourDigitNumber();
    const randomNum4 = generateRandomFourDigitNumber();

    // Обновление элемента с id=random_num
    document.getElementById('random_num').innerText = `${randomNum1} ${randomNum2}`;

    // Обновление элемента с id=electronic_document
    document.getElementById('electronic_document').innerText = `${randomNum3} ${randomNum4}`;
}

// Функция для генерации случайной даты рождения
function generateRandomDateOfBirth() {
    const start = new Date(1990, 0, 1); // 1 января 1990
    const end = new Date(2005, 11, 31); // 31 декабря 2005
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    
    const day = String(randomDate.getDate()).padStart(2, '0');
    const month = String(randomDate.getMonth() + 1).padStart(2, '0'); // Месяцы в JS начинаются с 0
    const year = randomDate.getFullYear();
    
    return `${day}.${month}.${year}`;
}

// Функция для обновления даты рождения на странице
function updateDateOfBirth() {
    const dateOfBirth = generateRandomDateOfBirth();
    document.getElementById('date_of_birth').innerText = dateOfBirth;
}

// Обновление даты на странице
function nowdate() {
  const dateElement = document.getElementById('date');
  const secondDate = document.getElementById("second_date");
  const currentDate = new Date();
  const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  
  const day = currentDate.getDate();
  const month = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  
  dateElement.textContent = `${day} ${month}`
  secondDate.textContent = `${day} ${month} ${year}`;
}

// Пролистывание страницы от кнопок сверху
document.addEventListener("DOMContentLoaded", function() {
    let qrLink = document.getElementById("li_qr");
    let qrSection = document.getElementById("qr_section");
    let actionsLink = document.getElementById("li_actions");

    qrLink.addEventListener("click", function() {
        qrSection.scrollIntoView({ behavior: 'smooth' });
    });

    actionsLink.addEventListener("click", function() {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    })

});

// Вызов функции обновления при загрузке страницы
window.onload = function() {
    updateRandomNumbers();
    updateDateOfBirth();
    nowdate();
};

// Отображение и сокрытие screen
let button_fullscreen = document.getElementById("fullscreen");
let screen = document.querySelector(".screen");
let exit = document.getElementById("exit");

function toggleScreenDisplay() {
    if (screen.style.display === "flex") {
        screen.style.display = "none";
    } else {
        screen.style.display = "flex";
    }
}

button_fullscreen.addEventListener("click", toggleScreenDisplay);
exit.addEventListener("click", toggleScreenDisplay);

document.addEventListener('DOMContentLoaded', function () {
    const imgQr = document.getElementById('img_qr');
    const hoverCircle = document.getElementById('hover-circle');

    imgQr.addEventListener('mousemove', function (e) {
        const rect = imgQr.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        hoverCircle.style.left = `${x - hoverCircle.offsetWidth / 2}px`;
        hoverCircle.style.top = `${y - hoverCircle.offsetHeight / 2}px`;
        hoverCircle.style.display = 'block';
    });

    imgQr.addEventListener('mouseleave', function () {
        hoverCircle.style.display = 'none';
    });
});