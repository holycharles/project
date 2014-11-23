$(document).ready(function() {

	var viewport_height = $(window).height();
	var viewport_width = $(window).width();



	//=======================shuping wanshua pop===============================
	function orient() {
		if (window.orientation == 0 || window.orientation == 180) {

$('#restrict_heng').hide();
return false;
}
else if (window.orientation == 90 || window.orientation == -90) {
    // orientation = 'landscape';
    $('#restrict_heng').show();
    // alert('请在横屏下玩耍！');
    return false;
}
}

$(window).bind( 'orientationchange', function(e){
    orient();
});





//visitor numbers
var options = {  
useEasing: false,
  useGrouping: false,
  separator: '',
  decimal: '.',
  prefix: '',
  suffix: ''
}
var demo = new countUp("visitor_number", 0, 2014, 0, 2.3, options);
demo.start();








});
