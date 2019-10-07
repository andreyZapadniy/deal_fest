var timeru = document.querySelector('#timeru');


timer();
setInterval(timer, 1000);

function timer() {
	var now = new Date();
	var target = new Date(
		now.getFullYear() ,
		now.getMonth() ,
		now.getDate() + 1 ,
		- 5,
		- 20,
		0,
		);
	var diff = Math.ceil((target - now) / 1000);

	var hours = Math.floor(diff / (60 * 60));
	var diff = diff % (60 * 60);

	var minutes = Math.floor(diff / 60);
	var diff = diff % 60;

	var second = diff;

    timeru.innerHTML = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(second);
 if (now >= target){
		timeru.innerHTML = '00:00:00';
	}
}
function addZero(num) {
	if (num <=9) {
		num = '0' + num;
	}

	return num;
}