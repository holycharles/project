//tappy.js  https://github.com/filamentgroup/tappy/
!function(a,b){var d,e,f,g;a.tapHandling=!1,d=function(c){return c.each(function(){function i(a){b(a.target).trigger("tap",[a,b(a.target).attr("href")]),a.stopImmediatePropagation()}function j(a){var b=a.originalEvent||a,c=b.touches||b.targetTouches;return c?[c[0].pageX,c[0].pageY]:null}function k(a){if(a.touches&&a.touches.length>1||a.targetTouches&&a.targetTouches.length>1)return!1;var b=j(a);f=b[0],e=b[1]}function l(a){if(!g){var b=j(a);b&&(Math.abs(e-b[1])>h||Math.abs(f-b[0])>h)&&(g=!0)}}function m(b){if(clearTimeout(d),d=setTimeout(function(){a.tapHandling=!1,g=!1},1e3),!(b.which&&b.which>1||b.shiftKey||b.altKey||b.metaKey||b.ctrlKey)){if(b.preventDefault(),g||a.tapHandling&&a.tapHandling!==b.type)return g=!1,void 0;a.tapHandling=b.type,i(b)}}var d,e,f,g,c=b(this),h=10;c.bind("touchstart.tappy MSPointerDown.tappy",k).bind("touchmove.tappy MSPointerMove.tappy",l).bind("touchend.tappy MSPointerUp.tappy",m).bind("click.tappy",m)})},e=function(a){return a.unbind(".tappy")},b.event&&b.event.special?b.event.special.tap={add:function(){d(b(this))},remove:function(){e(b(this))}}:(f=b.fn.bind,g=b.fn.unbind,b.fn.bind=function(a){return/(^| )tap( |$)/.test(a)&&d(this),f.apply(this,arguments)},b.fn.unbind=function(a){return/(^| )tap( |$)/.test(a)&&e(this),g.apply(this,arguments)})}(this,jQuery);


var SHAKE_THRESHOLD = 20;
var last_update = 0;
var x=y=z=last_x=last_y=last_z=0;
var SHAKE_THRESHOLD = 20;
var last_update = 0;
var x=y=z=last_x=last_y=last_z=0;
var numLog=1;
var time1=time2=0;
var  media;
function init(){
    if (window.DeviceMotionEvent) {
        media= document.getElementById("musicBox");
        window.addEventListener('devicemotion',deviceMotionHandler, false);
    } else{

        alert('not support mobile event');
    }
}

function deviceMotionHandler(eventData) {
    var acceleration =eventData.accelerationIncludingGravity;
    var curTime = new Date().getTime();

    // alert("curTime="+curTime);
    if ((curTime - last_update)> 50) {
        var diffTime = curTime -last_update;
        last_update = curTime;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;

        // var speed = Math.abs(x +y + z - last_x - last_y - last_z) / diffTime * 10000;
        var speed = Math.abs(x-last_x);


        // $('#gapValue span').html(speed.toFixed(2));
        // $('#timeGap span').html(diffTime);

        if (speed > SHAKE_THRESHOLD) {
            if(!media.src){
                media.src="weixin_yaoyiyao.mp3"
            }
            var url = guaguaka();
            $("#guajiangqu").attr("src", url);
            media.play();
            time1 = new Date().getTime();
            if((time1-time2)>400){
                $('#t1 span').html(time1);
                $('#t2 span').html(time2);
                $('#audio').get(0).play();
                $('#num-log span').html(numLog);
                numLog++;
                time2=time1;
            }

        }
        last_x = x;
        last_y = y;
        last_z = z;
    }
}


jQuery.fn.stayBottom = function()
{
    $('body').css({height:'auto'});
    var viewport_height=$(window).height();
    var body_height=$('body').height();
    var footer_height=this.height();
    console.log(viewport_height,body_height,footer_height);
    if((body_height)<viewport_height){ 
        $('body').css({height:viewport_height});
        this.addClass('stay_bottom');
    }else{
        $('body').css({height:'auto'});
        this.removeClass('stay_bottom');
    }
}
$('#footer').stayBottom();








function guaguaka(){
    var simuData = 1;
	$("#content h1").html();
    if(simuData==1){
        jiangpin='images/jp1.png';
        $('h1').html('恭喜您获得香港航空提供的香港游机票');
        $('.gua_txt img').attr({"src":"images/txt_hyll.png"});
        $('#jiangpinList').hide();
        $('#submitForm').fadeIn();
        setTimeout( function(){ $('#footer').stayBottom(); },100);
    }else if(simuData==2){
        jiangpin='images/jp2.png';
        $('h1').html('恭喜您获得蓝月亮机洗神器体验券！');
        $('.gua_txt img').attr({"src":"images/txt_click.png"});
        $('#jiangpinList').hide();
        $('#btnsRow2').fadeIn();
        $("#rule").show();
        $(".submit_success").hide();
        $(".reload-trigger").html("分享");
        setTimeout( function(){ $('#footer').stayBottom(); },100);
    }else if(simuData==3){
        $('h1').html('恭喜您中了三等奖！！');
        $('.gua_txt img').attr({"src":"images/txt_hyll.png"});
        $('#jiangpinList').hide();
        $('#submitForm').fadeIn();
        setTimeout( function(){ $('#footer').stayBottom(); },100);
        jiangpin='images/jp3.jpg';
    }else{
        $('h1').html('很遗憾，未中奖！');
        $('.gua_txt img').attr({"src":"images/txt_fail.png"});
        $('#jiangpinList').hide();
        $('#btnsRow2').fadeIn();
        setTimeout( function(){ $('#footer').stayBottom(); },100);
        jiangpin='images/choujiang_sorry.jpg';
    }
    return jiangpin;
}
guaguaka();


$('#submitForm input[type=submit]').click(function() {
    if( $('#submitForm input').eq(0).val()!='' && $('#submitForm input').eq(1).val()!='' && $('#submitForm input').eq(2).val()!='' ){
        sendInfo();
        return false;
    }else{
        alert('信息不完整哦！怎么能收到奖品呢？');
        return false;
    }
    
});


function sendInfo(){
    var url = sendFormUrl;
    var data = $("#submitForm").serialize();
    $('#loading').fadeIn();
    $.ajax({
        type : "POST",
        url : url,
        data : data,
        dataType:'jsonp',
        jsonp:'callback',
        timeout:globalTimeout,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success : function ss(data) {
            if(data.ret==0){
                $('#submitForm').hide();
                $('.submit_success').fadeIn();
                $('#btnsRow1').fadeIn();
            };

            if(debugMode==true){
                console.dir(data);
            }
            $('#loading').fadeOut();
        },
        error: function(a,b,c){
            if(debugMode==true){
                alert("网速不给力啊，请刷新重试！");
            }
            $('#loading').fadeOut();
        }
    });
}

$( ".reload-trigger" ).bind( "tap", function( e ){ 
    location.reload();
});


$( ".ruleLink" ).bind( "tap", function( e ){ 
    $('#pop-rules').fadeIn();
});
$( "#pop-rules .btn_chou" ).bind( "tap", function( e ){ 
    $( "#pop-rules" ).fadeOut();
});

$("#jiangpinList").find("li").eq(0).bind("tap", function(e) {
    $(".pop_layer").fadeIn();
});

$(".ico_close").eq(0).bind("tap", function() {
    $(".pop_layer").fadeOut();
});
$("#jiangpinList").find("li").eq(0).bind("tap", function(e) {
    $(".pop_layer, .pop_product").fadeIn();
});

$("#jiangpinList").find("li").eq(1).bind("tap", function(e) {
    $(".pop_layer, .pop_text").fadeIn();
});

$(".ico_close").bind("tap", function() {
    $(".pop_layer, .pop_product, .pop_text").fadeOut();
});

//=======================share pop=================================
$( "#share-trigger" ).bind( "tap", function( e ){ 
    $('#pop_share').fadeIn();
});

$( "#close-pop" ).bind( "tap", function( e ){ 
    $( "#pop_share" ).fadeOut();
});

$(document).ready(function() {
    init();
});