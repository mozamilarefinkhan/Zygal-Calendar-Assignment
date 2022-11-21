let mo = document.getElementById('month');
		let ya = document.getElementById('year');
		for (let i = 1; i <= 12; i++) {
			let option = document.createElement('option')
			option.setAttribute("value", i);
			option.setAttribute("id", i);
			option.innerHTML = i;
			mo.append(option)
		}
		for (let i = 2000; i < 2030; i++) {
			let option = document.createElement('option')
			option.setAttribute("value", i);
			option.setAttribute("id", i);
			option.innerHTML = i;
			ya.append(option)
		}
		function createCalendar(elem, year, month) {

			let mon = month - 1;
			let d = new Date(year, mon);

			let table = '<table><tr><th>MON</th><th>TUE</th><th>WED</th><th>THUR</th><th>FRI</th><th>SAT</th><th>SUN</th></tr><tr>';
			for (let i = 0; i < getDay(d); i++) {
				table += '<td></td>';
			}
			while (d.getMonth() == mon) {
				table += `<td id="${d.getDate()}9" style="background-color: white"> `+ d.getDate() + '</td>';
				console.log(table)

				if (getDay(d) % 7 == 6) {table += '</tr><tr>';
				}

				d.setDate(d.getDate() + 1);
			}
			if (getDay(d) != 0) {
				for (let i = getDay(d); i < 7; i++) {
					table += '<td></td>';
				}
			}
			table += '</tr></table>';

			elem.innerHTML = table;
		}

		function getDay(date) { 
			let day = date.getDay();
			if (day == 0) day = 7;
			return day - 1;
		}
		let yar = 2022;
		let mont = 1;
		function print() {
			mont = mo.value;
			console.log(mont)
			createCalendar(calendar, yar, mont);
		}

		function print1() {
			yar = ya.value;
			console.log(yar)
			createCalendar(calendar, yar, mont);
		}
		createCalendar(calendar, yar, mont);
		
		function func(){
			let input=document.getElementById('input').value;
			let box=document.getElementById(input+"9");
			console.log(box.style.backgroundColor)
			if(box.style.backgroundColor=="white"){
				box.style.backgroundColor="green"
			}else if(box.style.backgroundColor=="green"){
				box.style.backgroundColor="white"
			}
			document.getElementById('input').value="";
		}