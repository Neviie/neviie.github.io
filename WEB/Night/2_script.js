/* функция добавления ведущих нулей */
		/* (если число меньше десяти, перед числом добавляем ноль) */
		function zero_first_format(value)
		{
			if (value < 10)
			{
				value='0'+value;
			}
			return value;
		}

		function date_time()
		{
			var current_datetime = new Date();
			var day = zero_first_format(current_datetime.getDate());
			var month = zero_first_format(current_datetime.getMonth()+1);
			var year = current_datetime.getFullYear();
			var hours = zero_first_format(current_datetime.getHours());
			var minutes = zero_first_format(current_datetime.getMinutes());
			var seconds = zero_first_format(current_datetime.getSeconds());

			return  day+"."+month+"."+year;
		}

		/* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
		document.getElementById('current_date_time_blockk').innerHTML = date_time();
		document.getElementById('date_date').innerHTML = date_time();