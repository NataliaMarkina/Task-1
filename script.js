//функция сложения двух чисел
function Sum() {
			var first = document.getElementById('first').value;			//считываем значение первого числа из текстового поля
			var second = document.getElementById('second').value;			//считываем значение второго числа из текстового поля
			var sum = parseFloat(first) + parseFloat(second);			//складываем два числа, преобразовав каждое из них к типу float
			alert("\n Результат: \n\n" + (+sum.toFixed(10)) );			//выводим результат во всплывающем окне
		}