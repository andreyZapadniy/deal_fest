var time5 = document.querySelector('#timer5');
var time2End = new Date(2019,2,27,14,17,0);
setInterval(function(){
	var D = Math.round((time2End-new Date())/1000);
  if ( D < 0 ) {
    time3.innerHTML = '00:00:00';
    return;
  }
  var H = Math.floor(D/3600);
  var M = Math.floor((D-3600*H)/60);
  var S = D%60;
  time5.innerHTML = ((H>9)?H:('0'+H))+':'+((M>9)?M:('0'+M))+':'+((S>9)?S:('0'+S));
},999);