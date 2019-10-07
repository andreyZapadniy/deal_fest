var hour = document.querySelector('#hour');
var min = document.querySelector('#minutes');
var sec = document.querySelector('#second');

timer();
setInterval(timer, 1000);

function timer() {
	var now = new Date();
	var target = new Date(
		now.getFullYear() ,
		now.getMonth() + 1,
		0,
		0,
		0,
		0,
		);
	var diff = Math.ceil((target - now) / 1000);

	var days = Math.floor(diff / (60 * 60 * 24));
	var diff = diff % (60 * 60 * 24);

	var hours = Math.floor(diff / (60 * 60));
	var diff = diff % (60 * 60);

	var minutes = Math.floor(diff / 60);
	var diff = diff % 60;

	var second = diff;

    hour.innerHTML = addZero(days) + ':' + addZero(hours) + ':' + addZero(minutes) + ':' + addZero(second);
 if (now >= target){
		tim.innerHTML = '00:00:00';
	}
}
function addZero(num) {
	if (num <=9) {
		num = '0' + num;
	}

	return num;
}