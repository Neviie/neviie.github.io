// Кабинет
    function handleClick() {
      var profileNewElement = document.querySelector('.profile_new');
      profileNewElement.style.display = 'block';
	  
	  var profileNewElement = document.querySelector('.profile_new2');
      profileNewElement.style.display = 'block';
      
      var elementsToHide = document.querySelectorAll('.marshrut, .time_pos, .timer, .qr, .ost, .control_box, .mini_line, .mini_line2, mini_line3, .null_shap, zo, .schedule_new, .proezdnoy_new, .button, .new_control');
      elementsToHide.forEach(function(element) {
        element.style.display = 'none';
		
	var imgElement = document.querySelector('.img_fig_3');
      imgElement.src = 'cabinet_active_N.png';
      
      var fontElement = document.querySelector('.font_fig_3');
      fontElement.style.color = 'rgb(38,99,175)';
	  
	 var zoElement = document.querySelector('.shap_cen');
      zoElement.style.marginLeft = '12vw';
	  
	  var opElement = document.querySelector('op');
	  opElement.textContent = 'Кабинет';
	  
	  var backbusimgElement = document.querySelector('.img_fig_4');
     backbusimgElement.src = 'schedule_noactive_N.png';
	  
      
      var backbusfontElement = document.querySelector('.font_fig_4');
      backbusfontElement.style.color = 'rgb(110, 110, 110)';
	  
	  var backproezdnoyimgElement = document.querySelector('.img_fig_2');
     backproezdnoyimgElement.src = 'proezdnoy_noactive_N.png';
	  
      
      var backproezdnoyfontElement = document.querySelector('.font_fig_2');
      backproezdnoyfontElement.style.color = 'rgb(110, 110, 110)';
	  
	  var backticketfontElement = document.querySelector('.font_fig_1');
      backticketfontElement.style.color = 'rgb(110, 110, 110)';
	  
	  var backticketimgElement = document.querySelector('.img_fig_1');
     backticketimgElement.src = 'bilet_noacrive_N.png';
      });
    }
	// Расписание
	function handleClick2() {
      var profileNewElement = document.querySelector('.schedule_new');
      profileNewElement.style.display = 'block';
      
      var elementsToHide = document.querySelectorAll('.marshrut, .time_pos, .timer, .qr, .ost, .control_box, .mini_line, .mini_line2, mini_line3, .null_shap, zo, .profile_new, .proezdnoy_new, .profile_new2, .button, .new_control');
      elementsToHide.forEach(function(element) {
        element.style.display = 'none';
		
	var imgElement = document.querySelector('.img_fig_4');
      imgElement.src = 'schedule_active_N.png';
	  
	  var backprofileimgElement = document.querySelector('.img_fig_3');
      backprofileimgElement.src = 'cabinet_noactive_N.png';
      
      var fontElement = document.querySelector('.font_fig_4');
      fontElement.style.color = 'rgb(38,99,175)';
	  
	  var backprofilefontElement = document.querySelector('.font_fig_3');
      backprofilefontElement.style.color = 'rgb(110, 110, 110)';
	  
	 var zoElement = document.querySelector('.shap_cen');
      zoElement.style.marginLeft = '15vw';
	  
	  var opElement = document.querySelector('op');
	  opElement.textContent = 'Расписание';
	  
	  var backproezdnoyimgElement = document.querySelector('.img_fig_2');
     backproezdnoyimgElement.src = 'proezdnoy_noactive_N.png';
	  
      
      var backproezdnoyfontElement = document.querySelector('.font_fig_2');
      backproezdnoyfontElement.style.color = 'rgb(110, 110, 110)';
	  
	  var backticketfontElement = document.querySelector('.font_fig_1');
      backticketfontElement.style.color = 'rgb(110, 110, 110)';
	  
	  var backticketimgElement = document.querySelector('.img_fig_1');
     backticketimgElement.src = 'bilet_noacrive_N.png';
      });
    }
	// Проездной
	function handleClick3() {
      var profileNewElement = document.querySelector('.proezdnoy_new');
      profileNewElement.style.display = 'block';
      
      var elementsToHide = document.querySelectorAll('.marshrut, .time_pos, .timer, .qr, .ost, .control_box, .mini_line, .mini_line2, mini_line3, .null_shap, zo, .profile_new, .schedule_new, .profile_new2, .button, .new_control');
      elementsToHide.forEach(function(element) {
        element.style.display = 'none';
		
	var imgElement = document.querySelector('.img_fig_2');
      imgElement.src = 'proezdnoy_active_N.png';
	  
	  var backprofileimgElement = document.querySelector('.img_fig_3');
      backprofileimgElement.src = 'cabinet_noactive_N.png';
      
      var fontElement = document.querySelector('.font_fig_2');
      fontElement.style.color = 'rgb(38,99,175)';
	  
	  var backprofilefontElement = document.querySelector('.font_fig_3');
      backprofilefontElement.style.color = 'rgb(110, 110, 110)';
	  
	 var zoElement = document.querySelector('.shap_cen');
      zoElement.style.marginLeft = '20vw';
	  
	  var opElement = document.querySelector('op');
	  opElement.textContent = 'Добавить карту';
	  
	  var backbusimgElement = document.querySelector('.img_fig_4');
     backbusimgElement.src = 'schedule_noactive_N.png';
      
      var backbusfontElement = document.querySelector('.font_fig_4');
      backbusfontElement.style.color = 'rgb(110, 110, 110)';
	  
	  var backticketfontElement = document.querySelector('.font_fig_1');
      backticketfontElement.style.color = 'rgb(110, 110, 110)';
	  
	  var backticketimgElement = document.querySelector('.img_fig_1');
     backticketimgElement.src = 'bilet_noacrive_N.png';
      });
    }
	// Билеты
	function handleClick4() {
		var zooElement = document.querySelector('zo');
		zooElement.textContent = 'Заказ оплачен';
	  
		var profileNewElement = document.querySelector('.new_control');
      profileNewElement.style.display = 'block';
	  
      var profileNewElement = document.querySelector('.profile_new');
      profileNewElement.style.display = 'none';
	  
	  var profileNewElement = document.querySelector('.profile_new2');
      profileNewElement.style.display = 'none';
	  
	  var profileNewElement = document.querySelector('.proezdnoy_new');
      profileNewElement.style.display = 'none';
	  
	  var profileNewElement = document.querySelector('.schedule_new');
      profileNewElement.style.display = 'none';
	  
      var elementsToHide = document.querySelectorAll('.marshrut, .time_pos, .timer, .qr, .ost, .control_box, .mini_line, .mini_line2, mini_line3, .null_shap, zo');
      elementsToHide.forEach(function(element) {
        element.style.display = 'block';
		
	var imgElement = document.querySelector('.img_fig_2');
      imgElement.src = 'proezdnoy_noactive_N.jpg';
	  
	  var backprofileimgElement = document.querySelector('.img_fig_3');
      backprofileimgElement.src = 'cabinet_noactive_N.png';
      
	  	var imgElement = document.querySelector('.img_fig_1');
      imgElement.src = 'bilet_acrive_N.png';
	  
      var fontElement = document.querySelector('.font_fig_1');
      fontElement.style.color = 'rgb(38,99,175)';
	  
	  var backprofilefontElement = document.querySelector('.font_fig_3');
      backprofilefontElement.style.color = 'rgb(110, 110, 110)';
	  
	 var zoElement = document.querySelector('.shap_cen');
      zoElement.style.marginLeft = 'calc(12vw + 10vh)';
	  
	  var opElement = document.querySelector('op');
	  opElement.textContent = 'Оплата проезда';
	  
	  var backbusimgElement = document.querySelector('.img_fig_4');
     backbusimgElement.src = 'schedule_noactive_N.png';
	  
      
      var backbusfontElement = document.querySelector('.font_fig_4');
      backbusfontElement.style.color = 'rgb(110, 110, 110)';
	  
	  var backproezdnoyimgElement = document.querySelector('.img_fig_2');
     backproezdnoyimgElement.src = 'proezdnoy_noactive_N.png';
	  
      
      var backproezdnoyfontElement = document.querySelector('.font_fig_2');
      backproezdnoyfontElement.style.color = 'rgb(110, 110, 110)';
	  
	  
	  
      });
    }
	
	 function showNewControl() {
      var buttonElement = document.getElementById('button');
      var newControlElement = document.querySelector('.new_control');

      buttonElement.style.display = 'none';
      newControlElement.style.display = 'block';
    }
	
	const leftMenu = document.getElementById('left_menu');
    const miniLineBox = document.getElementById('mini_line_box');
	var exit = document.querySelectorAll('.arrow_img, .left_menu_exit, .fig_2, .fig_3, .fig_4')
	 const miniLines = document.querySelectorAll('.mini_line, .mini_line2');
	const shadow = document.getElementById('shadow')
	
     miniLineBox.addEventListener('click', () => {
      leftMenu.style.left = '0%';
	  shadow.classList.toggle('transparent');
	
		
      miniLines.forEach((miniLine) => {
        miniLine.classList.toggle('transparent');
		 
      });
    
	setTimeout(() => {
      miniLines.forEach((miniLine) => {
        miniLine.classList.toggle('transparent');
      });
    }, 1000);
  });
	
	
	exit.forEach((exitButton) => {
	  exitButton.addEventListener('click', () => {
		leftMenu.style.left = '-100%';
		shadow.classList.remove('transparent');
	  });
	});
	
	

		var poriadok_oplati = document.getElementById('poriadok_oplati');
		const poriadok_oplati_text = document.getElementById('poriadok_oplati_text');
		const poriadok_oplati_text2 = document.getElementById('poriadok_oplati_text2');
		var oppElement = document.querySelector('op');
		var zooElement = document.querySelector('zo');
		var shap_cenElement = document.querySelector('.shap_cen');
		var arrow_img = document.getElementById('arrow_img');
		var scan_QR = document.getElementById('scan_QR');
		var all_hide = document.querySelectorAll('.marshrut, .time_pos, .timer, .qr, .new_control, .ost, .control_box, .button, .scan_QR_fon, .num_QR_box, .card_box, .copy_img, .right_up_img, .history_box');
		var now_order = document.querySelectorAll('.marshrut, .time_pos, .timer, .qr, .new_control, .ost, .control_box');
		var Active_menunow_img = document.getElementById('https://neviie.github.io/Assets/Active_menunow.png');
		var Menu_now = document.getElementById('menunow_left');
		var scan_QR_img = document.getElementById('scan_QR_img')
		var bottom_button =  document.querySelectorAll('.fig_2, .fig_3, .fig_4')
	
	// Функция деактивации всех кнопок
	
	function noactive() {
		
		var all_leftmenu_buttons = document.querySelectorAll('.left_menu_point');
		var scanQR_img = document.getElementById('scan_QR_img');
		var numQR_img = document.getElementById('num_QR_img');
		var now_img = document.getElementById('https://neviie.github.io/Assets/Active_menunow.png');
		var history_img = document.getElementById('history_img');
		var card_img = document.getElementById('menu_card_img');
		
		all_leftmenu_buttons.forEach((button) => {

			
			button.style.color = 'white';
			button.style.fontWeight = 'normal';
			button.style.backgroundColor = 'rgb(18,18,18)';
			scanQR_img.src = 'https://neviie.github.io/Assets/Noactive_menuQR.png';
			numQR_img.src = 'https://neviie.github.io/Assets/Noactive_menuQR.png';
			history_img.src = 'https://neviie.github.io/Assets/Noactive_menuhistory.png';
			card_img.src = 'https://neviie.github.io/Assets/Noactive_menucard.png';
			now_img.src = 'https://neviie.github.io/Assets/Noactive_menunow.png';
		});	
	
	}
	
	// Функция для убирания всего
	
	function hideall() {
	all_hide.forEach((element) => {
				  element.style.display = 'none';
				});
				var videoElement = document.getElementById('videoElement');
  if (videoElement) {
    var stream = videoElement.srcObject;
    var tracks = stream.getTracks();
    tracks.forEach(function(track) {
      track.stop();
    });

    videoElement.parentNode.removeChild(videoElement);
  }
  
	}
				
	bottom_button.forEach((bottombutton) => {
		bottombutton.addEventListener('click', () => {
		hideall();
		})
		})
		
	// Порядок оплаты
	  
 poriadok_oplati.addEventListener('click', () => {
	  hideall();
	  poriadok_oplati_text.style.display = 'block';
	  poriadok_oplati_text2.style.display = 'block';
	  leftMenu.style.left = '-100%';
	  shadow.classList.toggle('transparent');
	   oppElement.textContent = 'Информация';
	   zooElement.style.display = 'none';
		shap_cenElement.style.marginLeft = '30vw';
		miniLineBox.style.display = 'none';
		arrow_img.style.display = 'block';

		var videoElement = document.getElementById('videoElement');
  if (videoElement) {
    var stream = videoElement.srcObject;
    var tracks = stream.getTracks();
    tracks.forEach(function(track) {
      track.stop();
    });

    videoElement.parentNode.removeChild(videoElement);
  }
  
    });
	
		exit.forEach((exitButton) => {
		exitButton.addEventListener('click', () => {
		poriadok_oplati_text.style.display = 'none';
		poriadok_oplati_text2.style.display = 'none'; 
		arrow_img.style.display = 'none';
		miniLineBox.style.display = 'block';
	  });
	});
	
		arrow_img.addEventListener('click', () => {
		noactive();
  hideall();

  menunow_left.style.color = 'rgb(39,122,243)';
  menunow_left.style.fontWeight = '600';
  menunow_left.style.backgroundColor = 'rgb(19,32,47)';
  now_img.src = 'https://neviie.github.io/Assets/Active_menunow.png';
	handleClick4()
				
	});
	// Сканировать QR
	
	scan_QR.addEventListener('click', () => {
	
	noactive();
	hideall();
	
	scan_QR.style.color = 'rgb(39,122,243)';
	scan_QR.style.fontWeight = '600';
	scan_QR.style.backgroundColor = 'rgb(19,32,47)';
	scan_QR_img.src = 'https://neviie.github.io/Assets/Active_menuQR.png';
	
	  leftMenu.style.left = '-100%';
	  shadow.classList.toggle('transparent');
	  zooElement.textContent = 'Сканировать QR';
		scan_QR_elements.style.display = 'flex';
	oppElement.textContent = 'Оплата проезда';
		shap_cenElement.style.marginLeft = 'calc(12vw + 10vh)';
				
	navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
    .then((stream) => {
      const videoElement = document.createElement('video');
      videoElement.srcObject = stream;
      videoElement.autoplay = true;
		videoElement.id = 'videoElement';
	  videoElement.style.height = '100%';
	  videoElement.style.position = 'absolute';


      scan_QR_elements.appendChild(videoElement);
    })
    .catch((error) => {
      console.error('Ошибка при получении доступа к камере:', error);
    });
	
    });
 
	// Ввести гос. номер ТС
	
	var num_QR = document.getElementById('num_QR');
	var num_QR_box = document.getElementById('num_QR_box');
	num_QR.addEventListener('click', () => {
  
  noactive();
  hideall();
	oppElement.textContent = 'Оплата проезда';
  num_QR.style.color = 'rgb(39,122,243)';
  num_QR.style.fontWeight = '600';
  num_QR.style.backgroundColor = 'rgb(19,32,47)';
  num_QR_img.src = 'https://neviie.github.io/Assets/Active_menuQR.png';

  leftMenu.style.left = '-100%';
  shadow.classList.toggle('transparent');
  zooElement.textContent = 'Ввести гос. номер ТС';
	
	num_QR_box.style.display = 'block';
  shap_cenElement.style.marginLeft = 'calc(15vw + 10vh)';
});

	// Текуший заказ
	
	var menunow_left = document.getElementById('menunow_left');
	var now_img = document.getElementById('https://neviie.github.io/Assets/Active_menunow.png');
	var bills = document.querySelector('.fig_1');
	
	

	bills.addEventListener('click', menunowleft);
	
	function menunowleft() {
  
  noactive();
  hideall();

  menunow_left.style.color = 'rgb(39,122,243)';
  menunow_left.style.fontWeight = '600';
  menunow_left.style.backgroundColor = 'rgb(19,32,47)';
  now_img.src = 'https://neviie.github.io/Assets/Active_menunow.png';
	handleClick4()
};
	
	menunow_left.addEventListener('click', () => {
  menunowleft()
  shadow.classList.toggle('transparent');
  leftMenu.style.left = '-100%';
});

	var menucard = document.getElementById('menucard');
	var card_box = document.getElementById('card_box');
	var randomNumber16 = '9' + Math.floor(Math.random() * 9 + 1) + Math.floor(Math.random() * 10 ** 17);
	var right_up_img = document.querySelector('.right_up_img');
	var copy_img = document.querySelector('.copy_img');
	
	menucard.addEventListener('click', () => {
  
  noactive();
  hideall();

  menucard.style.color = 'rgb(39,122,243)';
  menucard.style.fontWeight = '600';
  menucard.style.backgroundColor = 'rgb(19,32,47)';
  menu_card_img.src = 'https://neviie.github.io/Assets/Active_menucard.png';

  leftMenu.style.left = '-100%';
  shadow.classList.toggle('transparent');
  zooElement.textContent = 'Цифровая карта';
	oppElement.textContent = randomNumber16; // случайное 19 значное число
	card_box.style.display = 'block';
  shap_cenElement.style.marginLeft = 'calc(15vw + 12vh)';
 right_up_img.style.display='block';
 copy_img.style.display='block';
});
	// История заказов
	
	var historyleft = document.getElementById('history_left');
	var history_img = document.getElementById('history_img');
	var history_box = document.querySelector('.history_box');
	
	
	historyleft.addEventListener('click', () => {
	
	noactive();
  hideall();

  historyleft.style.color = 'rgb(39,122,243)';
  historyleft.style.fontWeight = '600';
  historyleft.style.backgroundColor = 'rgb(19,32,47)';
  history_img.src = 'https://neviie.github.io/Assets/Active_menuhistory.png';

  leftMenu.style.left = '-100%';
  shadow.classList.toggle('transparent');
  oppElement.textContent = 'История заказов';
  zooElement.textContent = ' ';
  shap_cenElement.style.marginLeft = 'calc(10vw + 12vh)';
  history_box.style.display = 'block';
  
  function getRandomNumber(min, max, excludedNumbers) {
  var randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (excludedNumbers.includes(randomNumber));
  return randomNumber;
}

function getRandomDate() {
  var startDate = new Date('2023-07-01T00:00:00');
  var endDate = new Date('2023-07-10T23:59:59');
  var randomTimestamp = Math.floor(Math.random() * (endDate.getTime() - startDate.getTime() + 1)) + startDate.getTime();
  var randomDate = new Date(randomTimestamp);
  var formattedDate = randomDate.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
  var formattedTime = randomDate.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  return formattedDate + ' ' + formattedTime;
}

var historyBox = document.querySelector('.history_box');

var numDivs = Math.floor(Math.random() * 15) + 1;

for (var i = 0; i < numDivs; i++) {
  var div = document.createElement('div');
  div.className = 'history_line';

  var greenbusBox = document.createElement('div');
  greenbusBox.className = 'greenbus_box';

  var greenBoxBus = document.createElement('img');
  greenBoxBus.className = 'green_box_bus';
  greenBoxBus.src = 'https://neviie.github.io/Assets/Green_Bus.png';

  var greenbusBoxNum = document.createElement('span');
  greenbusBoxNum.className = 'greenbus_box_num';
  greenbusBoxNum.textContent = getRandomNumber(1, 80, [2, 31, 42, 43, 66, 72, 76, 78, 79]);

  greenbusBox.appendChild(greenBoxBus);
  greenbusBox.appendChild(greenbusBoxNum);

  var randomDate = document.createElement('span');
  randomDate.className = 'random_date';
  randomDate.textContent = getRandomDate();

  var greenn = document.createElement('greenn');
  greenn.textContent = '35 руб';

  div.appendChild(greenbusBox);
  div.appendChild(randomDate);
  div.appendChild(greenn);

  historyBox.appendChild(div);
}

var marshrut = document.getElementById('marshrutt');
var marshrut_duble = document.getElementById('duble_marsh');

marshrut_duble.textContent = marshrut.textContent;

  });

  document.addEventListener("DOMContentLoaded", function () {
    function cloneControlElements() {
      var passenValue = parseInt(document.getElementById("passen").innerText);
      var controlDiv = document.getElementById("control");
  
      if (!isNaN(passenValue) && passenValue >= 2) {
        // Удаляем уже существующие клонированные элементы
        var existingClones = document.querySelectorAll(".cloned-control");
        for (let i = 0; i < existingClones.length; i++) {
          existingClones[i].remove();
        }
  
        // Клонируем и добавляем необходимое количество раз
        for (let i = 1; i < passenValue; i++) {
          const clone = controlDiv.cloneNode(true);
          clone.classList.add("cloned-control");
          controlDiv.parentElement.insertBefore(clone, controlDiv.nextElementSibling);
  
          // Генерируем случайное число для каждого клона
          const randomNumber = Math.floor(Math.random() * (9000000000 - 5000000000)) + 5000000000;
          clone.querySelector('#e').innerText = randomNumber;
        }
      }

      var oplataElement = document.getElementById("oplata");
    var bagsValue = parseInt(document.getElementById("bags").innerText);
    var result = (passenValue + bagsValue) * 35;
    var greenspan = document.getElementById("greenpass");
    oplataElement.textContent = result;
    greenspan.textContent = result;
    }
  
    // Инициализация клонирования при загрузке страницы
    cloneControlElements();
  
    // Добавляем обработчик события на элемент "passen" для отслеживания изменений
    document.getElementById("passen").addEventListener("DOMSubtreeModified", cloneControlElements);
  });

  






