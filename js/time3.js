var time2 = document.querySelector('#timer2');


timer();
setInterval(timer, 1000);

function timer() {
	var now = new Date();
	var target = new Date(
		now.getFullYear() ,
		now.getMonth() ,
		now.getDate() + 1 ,
		- 11,
		- 0,
		0,
		);
	var diff = Math.ceil((target - now) / 1000);

	var hours = Math.floor(diff / (60 * 60));
	var diff = diff % (60 * 60);

	var minutes = Math.floor(diff / 60);
	var diff = diff % 60;

	var second = diff;

    timer2.innerHTML = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(second);
    if (now >= target){
		timer2.innerHTML = '00:00:00';
	}
}

function addZero(num) {
	if (num <=9) {
		num = '0' + num;
	}

	return num;
}