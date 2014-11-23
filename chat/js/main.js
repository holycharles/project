//tappy.js  https://github.com/filamentgroup/tappy/
!function(a,b){var d,e,f,g;a.tapHandling=!1,d=function(c){return c.each(function(){function i(a){b(a.target).trigger("tap",[a,b(a.target).attr("href")]),a.stopImmediatePropagation()}function j(a){var b=a.originalEvent||a,c=b.touches||b.targetTouches;return c?[c[0].pageX,c[0].pageY]:null}function k(a){if(a.touches&&a.touches.length>1||a.targetTouches&&a.targetTouches.length>1)return!1;var b=j(a);f=b[0],e=b[1]}function l(a){if(!g){var b=j(a);b&&(Math.abs(e-b[1])>h||Math.abs(f-b[0])>h)&&(g=!0)}}function m(b){if(clearTimeout(d),d=setTimeout(function(){a.tapHandling=!1,g=!1},1e3),!(b.which&&b.which>1||b.shiftKey||b.altKey||b.metaKey||b.ctrlKey)){if(b.preventDefault(),g||a.tapHandling&&a.tapHandling!==b.type)return g=!1,void 0;a.tapHandling=b.type,i(b)}}var d,e,f,g,c=b(this),h=10;c.bind("touchstart.tappy MSPointerDown.tappy",k).bind("touchmove.tappy MSPointerMove.tappy",l).bind("touchend.tappy MSPointerUp.tappy",m).bind("click.tappy",m)})},e=function(a){return a.unbind(".tappy")},b.event&&b.event.special?b.event.special.tap={add:function(){d(b(this))},remove:function(){e(b(this))}}:(f=b.fn.bind,g=b.fn.unbind,b.fn.bind=function(a){return/(^| )tap( |$)/.test(a)&&d(this),f.apply(this,arguments)},b.fn.unbind=function(a){return/(^| )tap( |$)/.test(a)&&e(this),g.apply(this,arguments)})}(this,jQuery);

//scrollto
!function(a){function c(a){return"object"==typeof a?a:{top:a,left:a}}var b=a.scrollTo=function(b,c,d){a(window).scrollTo(b,c,d)};b.defaults={axis:"y",duration:1},b.window=function(){return a(window).scrollable()},a.fn.scrollable=function(){return this.map(function(){var b=this.parentWindow||this.defaultView,c="#document"==this.nodeName?b.frameElement||b:this,d=c.contentDocument||(c.contentWindow||c).document,e=c.setInterval;return"IFRAME"==c.nodeName||e&&a.browser.safari?d.body:e?d.documentElement:this})},a.fn.scrollTo=function(d,e,f){return"object"==typeof e&&(f=e,e=0),"function"==typeof f&&(f={onAfter:f}),f=a.extend({},b.defaults,f),e=e||f.speed||f.duration,f.queue=f.queue&&f.axis.length>1,f.queue&&(e/=2),f.offset=c(f.offset),f.over=c(f.over),this.scrollable().each(function(){function l(a){g.animate(j,e,f.easing,a&&function(){a.call(this,d,f)})}function m(a){var c="scroll"+a,d=b.ownerDocument;return k?Math.max(d.documentElement[c],d.body[c]):b[c]}var i,b=this,g=a(b),h=d,j={},k=g.is("html,body");switch(typeof h){case"number":case"string":if(/^([+-]=)?\d+(px)?$/.test(h)){h=c(h);break}h=a(h,this);case"object":(h.is||h.style)&&(i=(h=a(h)).offset())}a.each(f.axis.split(""),function(a,c){var d="x"==c?"Left":"Top",e=d.toLowerCase(),n="scroll"+d,o=b[n],p="x"==c?"Width":"Height",q=p.toLowerCase();i?(j[n]=i[e]+(k?0:o-g.offset()[e]),f.margin&&(j[n]-=parseInt(h.css("margin"+d))||0,j[n]-=parseInt(h.css("border"+d+"Width"))||0),j[n]+=f.offset[e]||0,f.over[e]&&(j[n]+=h[q]()*f.over[e])):j[n]=h[e],/^\d+$/.test(j[n])&&(j[n]=j[n]<=0?0:Math.min(j[n],m(p))),!a&&f.queue&&(o!=j[n]&&l(f.onAfterFirst),delete j[n])}),l(f.onAfter)}).end()}}(jQuery);


//judge if is weixin6.0
function isWeiXin(){
    var ua = window.navigator.userAgent;
    if(ua.match(/MicroMessenger\/6.0/i) == 'MicroMessenger/6.0'){
        $('#body').addClass('weixin6');
    }else{
        //
    }
}
isWeiXin();


var wHeight;
var wWidth=$(window).width();
var headHeight=45;
var bannerHeight=113;
var chatMarginHeight=0;
var inputHeight=46;

//===============set chatBlock height && layer content height=================================
function position_monitor(){
    wHeight=document.documentElement.clientHeight; //64为微信浏览器上边栏的高度

    var chatHeight=wHeight-headHeight-bannerHeight-chatMarginHeight-inputHeight;
    $('#chatBlock').height(chatHeight);
    // alert(document.documentElement.clientHeight);
}
$(window).resize(position_monitor).load(position_monitor);


function setLayerHeight( layer ){
    var layerHeight1=wHeight-headHeight-bannerHeight;
    var layerHeight2=layer.height();
    if( layerHeight2<layerHeight1 ){
        layer.find('.layer_content').height(layerHeight1-76);
    }
}





// $( "#pk-trigger" ).bind( "tap", function( e ){
//   setLayerHeight( $('#pk-layer') );
//   $('#pk-layer').fadeToggle(400);
//   $(this).hide();
//   calculateRate();
//   return false;
// });

// $( "#pk-collapse" ).bind( "tap", function( e ){ 
//   $('#pk-layer').fadeToggle(400);
//   $( "#pk-trigger" ).show();
//   resetRate();
//   return false;
// });


// $( ".f_vote1" ).bind( "tap", function( e ){ 
// 	if( !$(this).parent().find('.f_vote').hasClass('voted') ){
// 		$(this).addClass('voted');
// 		var curPiao=$(this).next().find('span').html()/1;
// 		$(this).next().find('span').html(parseInt(curPiao+1));
// 	}
// });

// $( ".f_vote2" ).bind( "tap", function( e ){ 
// 	if( !$(this).parent().find('.f_vote').hasClass('voted') ){
// 		$(this).addClass('voted');
// 		var curPiao=parseInt($(this).next().find('span').html());
// 		$(this).next().find('span').html(curPiao+1);
// 	}
// });

// function calculateRate(){
// 	for(i=0; i<3; i++){
// 		var piao1=$('.f_pk_bar').eq(i).find('.f_vote_txt1 span').html();
// 		var piao2=$('.f_pk_bar').eq(i).find('.f_vote_txt2 span').html();
// 		var piaoRate=piao1/(parseInt(piao1)+parseInt(piao2)) *100 + '%';
// 		// var piaoRate=123100/(123100+32320);
// 		console.log(piao1, piao2,piaoRate);
// 		$('.f_pk_bar').eq(i).find('.f_vs_bar span').width(piaoRate);
// 	}
// }

// function resetRate(){
// 	$('.f_pk_bar .f_vs_bar span').width('50%');
// }



//=======================share pop=================================
$( "#share-trigger" ).bind( "tap", function( e ){ 
	$('#pop_share').fadeIn();
});

$( "#close-pop" ).bind( "tap", function( e ){ 
	$( "#pop_share" ).fadeOut();
});







//======================chat room====================================
// var randomOpenid=Date.parse(new Date());
var randomOpenid;
var lastMsgTime=0;	    //user last speak timestamp
var appid;
var key;
var timeStamp;
var roomPeople;
var userMsg;		    //user last speak message
var ccode;			    //varify code for every refresh
var flashInterval=3000;  //interval of refresh timer
var enterRoomInterval=5000;  //interval of trying to enter room
var intervalGetChat;    //handle of refresh timer
var intervalEnterRoom;
//var postUrl='http://203.195.133.129:9101/DragonTV/';
var postUrl='http://192.168.0.106:8080/DragonTV/';
//var postUrl='http://chat1.weshaketv.com/DragonTV/';
// var postUrl='http://192.168.0.107:8080/DragonTV/';

var sceneid=0;  //scene id
var scenebt=0;  //scene timestamp
var mySex;
var myNick;
var myDeco;
var myIcon;
var myMessageId=0;   //my message id, unique for each of my speak
var flashLimit=0;
var totalMessageNumber=0;
var lastChat;
var chooseId = 3;
var debugMode=false;
var yanshiMode=false;
var myRoomNumber;
var version=4.2;
var globalTimeout=10000;
var reenterUrl="http://www.weshaketv.com/wycloud/oauth?appid=DFWS&redirect_url=http://1251097942.cdn.myqcloud.com/1251097942/chat_v2.0/index.html&error_url=http://1251097942.cdn.myqcloud.com/1251097942/welcome_v2.4/failed.html&scope=1";



// get url para randomOpenid value
function getParameter(parName){
	var str = parName.toLowerCase() + "=";
   var gvalue = "";
   var HREF = location.href;
   var upperHREF = location.href.toLowerCase();
   if(upperHREF.indexOf(str)>0){
         gvalue = HREF.substring(upperHREF.indexOf(str) + str.length,upperHREF.length);
         if(gvalue.indexOf('&')>0) gvalue = gvalue.substring(0,gvalue.indexOf('&'));
         if(gvalue.indexOf("#")>0) gvalue = gvalue.split("#")[0];
   }
   return gvalue;
} 
randomOpenid=getParameter("openid");

// myNick=decodeURIComponent(getParameter("nickname"));
myNick=getParameter("nickname");
myIcon=decodeURIComponent(getParameter("icon"));
mySex=getParameter("sex");
appid=getParameter("appid");
key=getParameter("key");
timeStamp=getParameter("timeStamp");

if(myIcon==''){
	myIcon='images/default_photo.jpg';
    myIcon=decodeURIComponent(myIcon);
}

if(myNick==''){
	myNick='神秘人物'+parseInt(Math.random()*2000);
    // myNick=encode64(myNick);
}

if(mySex==''){
	mySex=2;
}

if(randomOpenid==''){
	randomOpenid=parseInt(Math.random()*2000);
}

if(appid==''){
	appid='mzs';
}

// if(key==''){
// 	key='8V+o2+o/vZioNWdh3X3l2g==';
// }

// if(timeStamp==''){
// 	timeStamp=1410955273756;
// }


enterRoom();

function enterRoom(){
    var url = postUrl+"enterRoom";
    // var data = {"openid":randomOpenid, "appid":appid};
    var data = {"openid":randomOpenid, "appid":appid, "usernick":encodeURIComponent(myNick), "usericon":encodeURIComponent(myIcon), "usersex":mySex, "timeStamp":timeStamp, "key":key};
    console.log(data);
    $('#enteringRoom').fadeIn(600);
    if(debugMode==true){
    	console.log('sendPara:  openid='+randomOpenid +'\n appid='+appid +'\n timeStamp='+timeStamp  +'\n key=' +key +'\n usericon=' +encodeURIComponent(myIcon)+'\n usernick=' +encodeURIComponent(myNick)+'\n usersex=' +mySex);
    }

    $.ajax({
        type : "POST",
        url : url,
        data : data,
        dataType:'jsonp',
        jsonp:'callback',
        timeout:globalTimeout,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success : function ss(data) {
        	// var data = eval('('+data+')');  //解释编译data中的js语句
            //alert(data.ret);
        	$('#enteringRoom').fadeOut(200);
        	if(data.ret==3){
                window.location.href='http://1251097942.cdn.myqcloud.com/1251097942/passed_v2.0/passed.html';
        	}

        	if(data.ret==2){
                alert('验证失败~请重新进入！');
                reEnter();
                
                //alert("openid:"+randomOpenid+ "    ----------- appid:"+appid+ "     ----------- usernick:"+myNick+ "   ----------- usericon:"+encodeURI(myIcon)+ "   -----------usersex:"+mySex+ "      -----------timeStamp:"+timeStamp+ "     -----------key:"+key);
        	}

            if(data.ret==1){
                window.location.href='error.html';
            }

			if(data.ret==0){
                setTimeout(function(){
                    $('#entered').show().delay(1000).fadeOut(400);
                },1000);
				ccode=data.ccode;
                myRoomNumber=data.roomId;
				getChatContent();
				//start refresh every 4 seconds after 12 seconds entering room
				// setTimeout(function(){
				// 	intervalGetChat=setInterval("getChatContent()",flashInterval);
				// }, 5000);
				
                if(!yanshiMode){
    				myNick=data.nickname;
    				myIcon=data.icon;
    				mySex=data.sex;
                }

				myDeco=parseInt(data.deco)+1;

				// clearInterval(intervalEnterRoom);

			}

			if(debugMode==true){
				console.log('enterRoom:  ret='+data.ret +' ccode='+data.ccode +' roomId='+data.roomId  +' deco=' +data.deco);
			}
		},
		error: function(a,b,c){
			// clearInterval(intervalEnterRoom);
			// intervalEnterRoom=setInterval("enterRoom()",enterRoomInterval);
			$('#enteringRoom').fadeOut(200);
            // alert('进房间失败~再来一次吧！');
            if(debugMode==true){
                alert("http:responseText"+a.responseText + "\n readyState" + a.readyState + "\n status" + a.status
                    +"\n"+"info:" + b +"\n" + "exception:" + c);
            }
            reEnter();
		}
    });
};

function reEnter(){
    window.location.href=reenterUrl;
}


function getChatContent(){
	// $('#circleG').show();
    //alert("2222");
	var url = postUrl+"flash";
    console.log(url);
    var data = {"openid":randomOpenid, "appid":appid, "ccode":ccode};
    $.ajax({
        type : "POST",
        url : url,
        data : data,
        dataType:'jsonp',
        jsonp:'callback',
        timeout:globalTimeout,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success : function ss(data) {
            // console.log("pk");
            // console.log(data);
            //  console.log("pkend");
        	// var data = {"ret":"0","ccode":2407,"scenebt":"1","sysmsg":"欢迎运气进入房间","sceneid":"","chat":[{"icon":"\/rf","msg":"4444444","nick":"运气","sex":"1","ts":1410494203359,"type":1},{"icon":"\/rf","msg":null,"nick":"运气","sex":"1","ts":1410494222006,"type":1}],"cnum":1}
            //alert(data.ret);
        	if(data.ret==0){
                //console.log(data.scenebt);
                totalMessageNumber=totalMessageNumber+data.chat.length;
                if(totalMessageNumber>50){
                   clearMessage();
                   totalMessageNumber=0;
                   pushMsg(lastChat);
                }
                lastChat=data.chat;
                
                ccode=data.ccode;  //update ccode
                
                if(roomPeople!=data.cnum){
        			roomPeople=data.cnum;  //update room people number
            	changePeopleNumber(roomPeople);
            	}
            	pushSystemMsg(data.sysmsg);
            	pushMsg(data.chat);
                console.log(data);
                console.log("scenebt is " + data.scenebt);
            	if(data.scenebt!=''){
	            	if( sceneid!=data.sceneid || scenebt!=data.scenebt || sceneid==0){
                        //alert("1111");
                        console.log("entersi");
		        		getSceneContent(data.sceneid);
		        		console.log(sceneid,scenebt);
		        	}
	        	}

	        	flashLimit==0;

	        	scenebt=data.scenebt; //update scenebt
        		sceneid=data.sceneid; //update scenebt

        		$('#error-loadingscene').hide();

                setTimeout("getChatContent()",flashInterval);
        	};
       		
       		if(data.ret==1){
                ccode=data.ccode;  //update ccode
       			flashLimit++;
                if(debugMode==true){
                    alert("刷消息返回1第"+flashLimit+"次");
                }

	        	if(flashLimit>1){
                    // alert('消息获取不成功，将重新进房间！');
	        		// reEnter();
	        	}else{
                    setTimeout("getChatContent()",flashInterval);
                }
       		}

        	
        	if(debugMode==true){
        		//console.log("getChatContent: ret="+data.ret, "ccode="+data.ccode, "scenebt="+data.scenebt, "sysmsg="+data.sysmsg, "sceneid="+data.sceneid, "chat="+data.chat, "cnum="+data.cnum, ccode);
                //console.dir(data.chat);
        	}
		},
		error: function(a,b,c){
			// $('#circleG').hide();
        	// $('#error-loadingscene').fadeIn();
        	// flashLimit++;
            if(debugMode==true){
                alert("刷消息timeout了！网络断了吗？");
            }
        	// if(flashLimit>6){
        	// 	alert('网络不给力啊。将重新进房间！');
         //        if(debugMode==true){
         //            alert("http:responseText"+a.responseText + "\n readyState" + a.readyState + "\n status" + a.status
         //                +"\n"+"info:" + b +"\n" + "exception:" + c);
         //        }
         //        reEnter();
        	// }else{
         //        setTimeout("getChatContent()",flashInterval);
         //    }
		}
		
    });
}



//get scene content
function getSceneContent(passSceneid){
	var url = postUrl+"submitSceneid";
    var data = {"openid":randomOpenid, "appid":appid, "sceneid":passSceneid};
    
    $.ajax({
        type : "POST",
        url : url,
        data : data,
        dataType:'jsonp',
        jsonp:'callback',
        timeout:globalTimeout,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success : function ss(data) {
            // console.log("scene data start");
            // console.log(data);
            // console.log("scene data end");
        	// var data = {"ret":"0","hpath":"","result":[{"playerid":3,"vote":0},{"playerid":5,"vote":0}],"des":"10进08","player":[{"playerId":3,"playerName":"王艺洁","playerUrl":"http:\/\/1251097942.cdn.myqcloud.com\/1251097942\/passed_v2.0\/images\/1026\/wangyijie.jpg"},{"playerId":5,"playerName":"唐艺","playerUrl":"http:\/\/1251097942.cdn.myqcloud.com\/1251097942\/passed_v2.0\/images\/1026\/tangyi.jpg"}],"tiid":35};
        	if(data.ret==0){
                //alert("1111");
        		loadScene(data, data.ret, data.des, data.clist, data.tiid, data.bpath, data.chose);
        		// $('#people-num').html(data.allcount);
        	};

        	if(debugMode==true){
        		console.log("getSceneContent: ret="+data.ret, "des="+data.des, "clist="+data.clist, "tiid="+data.tiid, "bpath="+data.bpath, "chose="+data.chose);
        	}
		},
        error: function(a,b,c){
            if(debugMode==true){
                alert("http:responseText"+a.responseText + "\n readyState" + a.readyState + "\n status" + a.status
                    +"\n"+"info:" + b +"\n" + "exception:" + c);
            }
        }
		
    });
}


function getJingcaiContent(passSceneid){
    var url = postUrl+"submitSceneid";
    var data = {"openid":randomOpenid, "appid":appid, "sceneid":passSceneid};
    
    $.ajax({
        type : "POST",
        url : url,
        data : data,
        dataType:'jsonp',
        jsonp:'callback',
        timeout:globalTimeout,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success : function ss(data) {
            // var data = {"ret":"0","hpath":"","result":[{"playerid":3,"vote":0},{"playerid":5,"vote":0}],"des":"10进08","player":[{"playerId":3,"playerName":"王艺洁","playerUrl":"http:\/\/1251097942.cdn.myqcloud.com\/1251097942\/passed_v2.0\/images\/1026\/wangyijie.jpg"},{"playerId":5,"playerName":"唐艺","playerUrl":"http:\/\/1251097942.cdn.myqcloud.com\/1251097942\/passed_v2.0\/images\/1026\/tangyi.jpg"}],"tiid":35};
            //alert(data.ret);
            if(data.ret==0){
                renderJingcaiLayer(data);
            };

            if(debugMode==true){
                console.log("getJingcaiContent below");
                console.dir(data);
            }
        },
        error: function(a,b,c){
            if(debugMode==true){
                alert("http:responseText"+a.responseText + "\n readyState" + a.readyState + "\n status" + a.status
                    +"\n"+"info:" + b +"\n" + "exception:" + c);
            }
        }
        
    });
}

function updateJingcaiContent(passSceneid){
    var url = postUrl+"submitSceneid";
    var data = {"openid":randomOpenid, "appid":appid, "sceneid":passSceneid};
    
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
                updateJingcaiLayer(data);
            };

            if(debugMode==true){
                console.log("updateJingcaiContent below");
                console.dir(data);
            }
        },
        error: function(a,b,c){
            if(debugMode==true){
                alert("http:responseText"+a.responseText + "\n readyState" + a.readyState + "\n status" + a.status
                    +"\n"+"info:" + b +"\n" + "exception:" + c);
            }
        }
        
    });
}


function changePeopleNumber(num){
	$('#current-number').html(num);
}

function pushSystemMsg(systemMsg){
	systemMsg=decodeURI(systemMsg);
	systemMsg=zhuan(systemMsg);
	if(systemMsg!=''){
		var singleSystemMsg= "<div class=\"system_notify\"><p><span>"+ systemMsg +"</p></div>";
		$('#chatBlock').append(singleSystemMsg);
		$('#chatBlock').scrollTo( $('#chatBlock .single_chat:last'),400 );
	}
}

function clearMessage(){
    $('#chatBlock').html(" ");
    // alert('cleared');
}

function pushMsg(chatMsg){
    if( chatMsg==null || chatMsg.length<=0 ){
        return false;
    }

	myIcon=zhuan(myIcon);
	myNick=zhuan(myNick);
	chatMsg=zhuan(chatMsg);

    var maxChatLength=chatMsg.length;
    if(maxChatLength>30){
        maxChatLength=30;
    }

	for ( var i = 0; i < maxChatLength; i++ )
	{
	    
    	var singleChat= "<div class=\"single_chat\">"
			+ "            <div class=\"user_photo\"><img src="+ chatMsg[i].icon +" ></div>"
			+ "            <div class=\"user_name\">"+ decodeURI(chatMsg[i].nick) +"</div>"
			+ "            <div class=\"user_words\">"+ chatMsg[i].msg +"</div>"
			+ "        </div>";

        var singleChat2= "<div class=\"single_chat\">"
            + "            <div class=\"user_photo\"><img src="+ chatMsg[i].icon +" ></div>"
            + "            <div class=\"user_name\">"+ decodeURI(chatMsg[i].nick) +"</div>"
            + "            <div class=\"user_bq\"><img src=\""+ chatMsg[i].msg +"\"></div>"
            + "        </div>";


		//not my msg
		if(chatMsg[i].openid!=randomOpenid ){
			// setTimeout(function(){
                var regexp1 = /^images/gi;
                var regexp2 = /.gif*/gi;
                var test1 = chatMsg[i].msg.match(regexp1);
                var test2 = chatMsg[i].msg.match(regexp2);
                if(test1!=null&&test2!=null){
                    $('#chatBlock').append(singleChat2);
                }else{
                    $('#chatBlock').append(singleChat);
                }
                $('#chatBlock').scrollTo( $('#chatBlock .single_chat:last'),50);
            // },50);
			

			//if msg user is female
			if(chatMsg[i].sex==2){
				$('#chatBlock .single_chat:last').addClass('female');
				if(chatMsg[i].deco!=undefined){
					$('#chatBlock .single_chat:last').addClass('deco'+(parseInt(chatMsg[i].deco)+1)/1);
				}
			}

		}
		

        //my msg
		if(chatMsg[i].type==0 && chatMsg[i].openid==randomOpenid){
            $('#chatBlock').append(singleChat);
            $('#chatBlock').scrollTo( $('#chatBlock .single_chat:last'),50 );
            $('#chatBlock .single_chat:last').addClass('me');

           	//if msg user is female
			if(chatMsg[i].sex==2){
				$('#chatBlock .single_chat:last').addClass('female');
				if(chatMsg[i].deco!=undefined){
					$('#chatBlock .single_chat:last').addClass('deco'+(parseInt(chatMsg[i].deco)+1)/1);
				}
			}
        }

		if(debugMode==true){
			console.log("pushMsg: chat.nick="+chatMsg[i].nick +" chat.icon="+chatMsg[i].icon+" chat.ts="+chatMsg[i].ts+" chat.sex="+chatMsg[i].sex+" chat.msg="+chatMsg[i].msg+ "chatMsg[i].type="+chatMsg[i].type+ " chat.randomOpenid="+chatMsg[i].randomOpenid + "openid"+randomOpenid);
		}
	}
}

window.zhuan = function(zhuanText){
    if( typeof(zhuanText) == "string"){
    	zhuanText=zhuanText.replace(/</, "&lt;");
    	zhuanText=zhuanText.replace(/>/, "&gt;");
    	zhuanText=zhuanText.replace(/"/, "&quot;");
    }   
	return zhuanText;
}

// alert( zhuan('<>"') );

function pushMyMsg(chatMsg){
	// myNick=decodeURI(myNick);
	// alert(chatMsg);
	myMessageId=myMessageId+1;
	myIcon=decodeURI(zhuan(myIcon));
	myNick=zhuan(myNick);
	chatMsg=zhuan(chatMsg);

	var singleChat= "<div class=\"single_chat me\" id=\"messageId"+ myMessageId +"\">"
+ "  <div class=\"user_photo\"><img src="+ myIcon +" ></div>"
+ "  <div class=\"user_name\">"+ myNick +"</div>"
+ "  <div class=\"user_words\">"+ chatMsg
+ "		<div id=\"sending-msg\" class=\"circleG_holder circleG_msg\">"
+ "                <div class=\"circleG circleG1\"></div>"
+ "                <div class=\"circleG circleG2\"></div>"
+ "                <div class=\"circleG circleG3\"></div>"
+ "     </div>"
+ "		<div class=\"error_sending\"></div>"
+ "  </div>"
+ "</div>";

    var singleChat2= "<div class=\"single_chat me\" id=\"messageId"+ myMessageId +"\">"
            + "            <div class=\"user_photo\"><img src="+ myIcon +" ></div>"
            + "            <div class=\"user_name\">"+ myNick +"</div>"
            + "            <div class=\"user_bq\"><img src=\""+ chatMsg +"\"></div>"
            + "        </div>";


    var regexp1 = /^images/gi;
    var regexp2 = /.gif*/gi;
    var test1 = chatMsg.match(regexp1);
    var test2 = chatMsg.match(regexp2);
    if(test1!=null&&test2!=null){
        $('#chatBlock').append(singleChat2);
    }else{
        $('#chatBlock').append(singleChat);
    }
	$('#chatBlock').scrollTo( $('#chatBlock .single_chat:last'),400 );

	//if msg user is female
	if(mySex==2){
		$('#chatBlock .single_chat:last').addClass('female');
		if(myDeco!=undefined){
			$('#chatBlock .single_chat:last').addClass('deco'+myDeco);
		}
	}
	
	if(chatMsg.length<5){
		$('#chatBlock .single_chat:last').addClass('one_row');
	}

	if(debugMode==true){
		console.log("pushMyMsg: myNick="+myNick +" myIcon="+myIcon+" mySex="+mySex);
	}
}





//send message
$( "#send-trigger" ).bind( "tap", function( e ){
	userMsg=$('#input-content').val();
    if(userMsg=='@debugmode'){
        debugMode=true;
        alert("debug模式开启");
        $('#input-content').blur().val("");
    }else if(userMsg=='@version'){
        alert("当前版本号是"+version);
        $('#input-content').blur().val("");
    }else if(userMsg=='@myroomid'){
        alert("我的房间号是: "+myRoomNumber);
        $('#input-content').blur().val("");
    }else if(userMsg=='@url'){
        alert("reenterUrl: "+reenterUrl);
        $('#input-content').blur().val("");
    }else if(userMsg=='@sendpara'){
        alert('sendPara:  openid='+randomOpenid +'\n appid='+appid +'\n timeStamp='+timeStamp  +'\n key=' +key +'\n usericon=' +encodeURIComponent(myIcon)+'\n usernick=' +encodeURIComponent(myNick)+'\n usersex=' +mySex);
        $('#input-content').blur().val("");
    }else{
        if(userMsg!='' && userMsg!=' '){
            sendMsg(userMsg,0);
            pushMyMsg(userMsg);
            $('#input-content').blur().val("");
            $('body').scrollTo( 0,200 );
            lastMsgTime=Date.parse( new Date());
        }
    }

	return false;
});


function sendMsg(userMsg,type){
    if(type==0){
        userMsg = encodeURIComponent(userMsg);
    }else if(type==1){

    }else{

    }
	
	var url = postUrl+"chat";
    var data = {"openid":randomOpenid, "appid":appid, "msg":userMsg};

    $.ajax({
        type : "POST",
        url : url,
        data : data,
        dataType:'jsonp',
        jsonp:'callback',
        timeout:globalTimeout,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success : function ss(data) {
        	//manually get chat
        	// getChatContent();
        	var $loadingHandle=$('#messageId'+myMessageId+' .circleG_msg');
   			var $errorHandle=$('#messageId'+myMessageId+' .error_sending');
        	if(data.ret==0){
	        	// lastMsgTime=data.cts;
	        	$loadingHandle.fadeOut('4000', function() {
	        		$loadingHandle.remove();
	        	});
        	}else{
        		$loadingHandle.remove();
	        	$errorHandle.show();
        	}

        	if(debugMode==true){
        		console.log("sendMsg: ret" + data.ret, "cts:"+data.cts);
        	}
		},
		error: function(a,b,c){
			var $loadingHandle=$('#messageId'+myMessageId+' .circleG_msg');
   			var $errorHandle=$('#messageId'+myMessageId+' .error_sending');
			$loadingHandle.remove();
	        $errorHandle.show();
            if(debugMode==true){
                alert("http:responseText"+a.responseText + "\n readyState" + a.readyState + "\n status" + a.status
                    +"\n"+"info:" + b +"\n" + "exception:" + c);
            }
		}
    });
}

document.onkeydown=function(event){
    var e = event || window.event;
    if(e && e.keyCode==13){ // enter 键
        // $('#send-trigger').trigger();
        $('#send-trigger').click();
    }
}; 




//exit room
$( "#exit-trigger" ).bind( "tap", function( e ){
	var url = postUrl+"exit";
    var data = {"openid":randomOpenid, "appid":appid, "appid":appid};
    $.ajax({
        type : "POST",
        url : url,
        data : data,
        dataType:'jsonp',
        jsonp:'callback',
        timeout:globalTimeout,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success : function ss(data) {
        	WeixinApi.closeWindow();
		},
        error: function(a,b,c){
            if(debugMode==true){
                alert("http:responseText"+a.responseText + "\n readyState" + a.readyState + "\n status" + a.status
                    +"\n"+"info:" + b +"\n" + "exception:" + c);
            }
        }
    });

    clearInterval(intervalGetChat);

	return false;
});






//=======================tuwen page===============================
$( "#check-tuwen" ).bind( "tap", function( e ){ 
	setLayerHeight( $('#tuwen-layer') );
	$(this).hide();
	$('#tuwen-layer').fadeIn();
});

$( "#tuwen-collapse" ).bind( "tap", function( e ){ 
  $('#tuwen-layer').fadeOut(400);
  $( "#check-tuwen" ).show();
  return false;
});





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



//=============load scene================
function loadScene(passData,passRet, passDes, passClist, passTiid, passBpath, passChose){
	// $('#banner>div').removeClass('animated fadeInDown')
	$('#banner>div').fadeOut();
	$('.slide_layer').hide();
	if( sceneid==1 ){
		// $('#banner-gx').addClass('animated fadeInDown');
		// $('#banner-gx').fadeIn();
		// var getIndex=passDes.indexOf("/n");
		// var getTxt1=passDes.substr(0 ,getIndex);
		// var getTxt2=passDes.substr(getIndex+2 ,passDes.length);

		// getTxt1=zhuan(getTxt1);
		// getTxt2=zhuan(getTxt2);

		// $('#geshou-txt1').html(getTxt1);
		// $('#geshou-txt2').html(getTxt2);
		// $('#gx-g').html(zhuan(passClist[0].des));
		// $('#gx-x').html(zhuan(passClist[1].des));
		// $("#xy-img img").attr("src",passBpath);   //set geshou img
		// var gxPiao1=passClist[0].num;
		// var gxPiao2=passClist[1].num;
		// renderGxlayer(gxPiao1,gxPiao2,passClist[0].chooseId,passClist[1].chooseId, passChose);

	}else if(sceneid==2){
		// $('#banner-dati').addClass('animated fadeInDown');
		$('#banner-dati').fadeIn();

		passDes=zhuan(passDes);

		$('#dati-timu').html(passDes);
		var timuNum=passClist.length;
		
		$('#dati-btns').html('');
		for ( var i = 0; i < timuNum ; i++ )
		{
	    	var singleChoose= "<span class=\"btn_normal btn_answer\">"+ zhuan(passClist[i].des) +"</span>";
	    	// alert(passClist[i].des);
	    	$('#dati-btns').append(singleChoose);

	    	if(debugMode==true){
				console.log("loadScene: des:" + passClist[i].des);
			}
		}

		//=====dati click======
		$( "#dati-btns span" ).bind( "tap", function( e ){ 
			if( !$( "#dati-btns span").hasClass('on') ){
				var datiOrder=$(this).index();
				submitMyDati(passClist[datiOrder].chooseId,datiOrder);
			}
		});


		//======dati set========
		if( passChose!=0 ){
			for ( var j = 0; j < timuNum; j++ )
			{
		    	if(debugMode==true){
		    		console.log("setOn: passChose=" + passChose, "passClist[i].chooseId=" +passClist[j].chooseId);
		    	}
		    	if (passChose==passClist[j].chooseId){
		    		$('#dati-btns span').eq(j).addClass('on');
		    	}
			}
		}

	}else if(sceneid==3){
		$('#banner-tuwen').fadeIn();
		passDes=zhuan(passDes);
		$('#tuwen-des').html(passDes);
	}else if(sceneid==4){  //单图
        $('#banner-image').fadeIn();
        $('#banner-image img').attr("src",passBpath);
        console.log("passBpath"+passBpath);

	}else if(sceneid==5){  //图带链接
        $('#banner-image').fadeIn();

        var index1 = passBpath.indexOf("|");
        var imgSrc=passBpath.substring(0,index1);
        var imgHref=passBpath.substring(index1+1,passBpath.length);
        $('#banner-image img').attr("src",imgSrc);
        $('#banner-image img').wrap("<a href='"+ imgHref +"'></a>");
        console.log("passBpath"+passBpath);
    }else if(sceneid==9){  //竞猜
        renderJingcaiLayer(passData);
    }else if(sceneid==10){  //竞猜结果
        //renderResult(passData);
        renderJingcaiLayer(passData);
    }

}

//=========================pk page=================================
function updateVoteNum(passSceneid, index){
    var url = postUrl+"submitSceneid";
    var data = {"openid":randomOpenid, "appid":appid, "sceneid":passSceneid};
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
                console.log("scene start1111");
                console.log(data);
                console.log("scene start2222");
                var otherImg, thisImg;
                // alert(index);
                $(".f_pk_vs").html("你选择了" + "</br>" + $(".playerName").eq(index).html());
                if(index == 0) {
                    $(".winBtn").eq(0).addClass("pkInBtn").html(data.result[0].vote + "票");
                    $(".winBtn").eq(1).addClass("pkInBtn").html(data.result[1].vote + "票");
                    thisImg = $(".f_pk_person").eq(0).find("img");
                    otherImg = $(".f_pk_person").eq(1).find("img");
                } else {
                    $(".winBtn").eq(1).addClass("pkInBtn").html(data.result[1].vote + "票");
                    $(".winBtn").eq(0).addClass("pkInBtn").html(data.result[0].vote + "票");
                    thisImg = $(".f_pk_person").eq(1).find("img");
                    otherImg = $(".f_pk_person").eq(0).find("img");
                }
                $(".f_pk_person1").eq(0).attr("vote", data.result[0].vote);
                $(".f_pk_person2").eq(0).attr("vote", data.result[1].vote); 
                // thisImg.attr("src", thisImg.attr("src").split(".")[0] + "_light.png");
                otherImg.attr("src", otherImg.attr("src").split(".png")[0] + "-dark.png");
            };

            if(debugMode==true){
                console.log("updateJingcaiContent below");
                console.dir(data);
            }
        },
        error: function(a,b,c){
            if(debugMode==true){
                alert("http:responseText"+a.responseText + "\n readyState" + a.readyState + "\n status" + a.status
                    +"\n"+"info:" + b +"\n" + "exception:" + c);
            }
        }
        
    });
}
function tabPk(index) {
    //alert("111");
    $( ".f_pk_person").unbind("tap");
    var url = postUrl + "submitChooseid",
        otherImg, thisImg,
        choose = $( ".f_pk_person").eq(index).attr("playerId"),
        voteOfPlayerLeft = $( ".f_pk_person").eq(0).attr("vote"),
        voteOfPlayerRight = $( ".f_pk_person").eq(1).attr("vote");
    //alert(url);
    chooseId = choose;
    // alert(url);
    $.ajax({
        type : "POST",
        url : url,
        data :  {"openid":randomOpenid, "sceneid":sceneid, "choose": choose},
        dataType:'jsonp',
        jsonp: 'callback',
        timeout:globalTimeout,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success : function ss(data) {
            // console.log(data);
            //alert(data.ret);
            //alert(sceneid);
            
            if(data.ret == 0 || data.ret == 1) {
                updateVoteNum(sceneid, index);
                
                //var data = {
                //    "ret": "0",
                //    "hpath": "",
                //    "player": [
                //    {
                //        "playerId": 3,
                //        "playerName": "王艺洁",
                //        "playerUrl": "http:\/\/1251097942.cdn.myqcloud.com\/1251097942\/passed_v2.0\/images\/1026\/wangyijie.jpg"
                //    },
                //    {
                //        "playerId": 5,
                //        "playerName": "唐艺,
                //        "playerUrl": "http:\/\/1251097942.cdn.myqcloud.com\/1251097942\/passed_v2.0\/images\/1026\/tangyi.jpg"
                //    }
                //],
                //    "tiid": 14,
                //    "win": 5,
                //    "yours": 3
                //};

            }
        },
        error: function(a,b,c){
            // clearInterval(intervalEnterRoom);
            // intervalEnterRoom=setInterval("enterRoom()",enterRoomInterval);

        }
     });     
}


//=======================jingcai page===============================
// var data1={"des":"白雪公主和七个小矮人/n正在为您歌唱《fly away》","bpath":"images/qgxar.png"};

// var data2={"ret":"0","hpath":"http:\/\/1251097942.cdn.myqcloud.com\/1251097942\/honggaoliang\/images\/zhouxun.jpg ","result":[{"playerid":63,"selects":[{"des":null,"id":1,"voteNum":0},{"des":null,"id":2,"voteNum":0}]},{"playerid":65,"selects":[{"des":null,"id":1,"voteNum":0},{"des":null,"id":2,"voteNum":0}]},{"playerid":61,"selects":[{"des":null,"id":1,"voteNum":0},{"des":null,"id":2,"voteNum":0}]},{"playerid":64,"selects":[{"des":null,"id":1,"voteNum":0},{"des":null,"id":2,"voteNum":0}]},{"playerid":62,"selects":[{"des":null,"id":1,"voteNum":0},{"des":null,"id":2,"voteNum":0}]}],"des":"","player":[{"playerId":63,"playerName":"田渤","playerUrl":"images/bozhengchao.jpg","result":1,"selects":[{"des":"待定","id":1,"voteNum":23},{"des":"淘汰","id":2,"voteNum":43}]},{"playerId":65,"playerName":"GJ蒋卓嘉","playerUrl":"images/bozhengchao.jpg","result":1,"selects":[{"des":"待定","id":1,"voteNum":44},{"des":"淘汰","id":2,"voteNum":23}]},{"playerId":61,"playerName":"黄德毅","playerUrl":"images/bozhengchao.jpg","result":1,"selects":[{"des":"待定","id":1,"voteNum":78},{"des":"淘汰","id":2,"voteNum":32}]},{"playerId":64,"playerName":"李一平","playerUrl":"images/bozhengchao.jpg","result":1,"selects":[{"des":"待定","id":1,"voteNum":54},{"des":"淘汰","id":2,"voteNum":34}]},{"playerId":62,"playerName":"杨启","playerUrl":"images/bozhengchao.jpg","result":1,"selects":[{"des":"待定","id":1,"voteNum":34},{"des":"淘汰","id":2,"voteNum":54}]}],"tiid":10001,"bpath":""};


function renderJingcai(data){
    //alert("精彩");
    // $('#banner-jingcai').fadeIn();
    $("#banner2").show();
    var getIndex=data.des.indexOf("/n");
    var getTxt1=data.des.substr(0 ,getIndex);
    var getTxt2=data.des.substr(getIndex+2 ,data.des.length);

    getTxt1=zhuan(getTxt1);
    getTxt2=zhuan(getTxt2);

    $('#jc-txt1').html(getTxt1);
    $('#jc-txt2').html(getTxt2);
    $('#teamName').html(getTxt1);

    $("#jc-img img").attr("src",data.bpath);   //set geshou img

    getJingcaiContent(sceneid);

    $('#check-jingcai').unbind();
    $('#check-jingcai').show().bind( "tap", function( e ){ 
        setLayerHeight( $('#jingcai-layer') );
        $('#jingcai-layer').fadeIn();
        updateJingcaiContent(sceneid);
        // renderJingcaiLayer(data2);
        $(this).fadeOut();
    });


    $('#jingcai-collapse').unbind();
    $('#jingcai-collapse').bind( "tap", function( e ){ 
        $('#jingcai-layer').fadeOut();
        $('#check-jingcai').fadeIn();
        return false;
    });

    if(debugMode==true){
        console.log("renderJingcai: data.bpath=" + data.bpath, "data.des=" +data.des);
    }

}
// renderJingcai(data1);




function renderJingcaiLayer(data){
    //alert(data);
    // $("#banner").hide();
    $("#banner2").fadeIn();

    // var des = data.des;
    // alert(des);

    $(".f_pk_person1").eq(0).attr("playerId", data.player[0].playerId);
    $(".f_pk_person2").eq(0).attr("playerId", data.player[1].playerId);
    
    var leftImg = $(".f_pk_person").eq(0).find("img"),
        rightImg = $(".f_pk_person").eq(1).find("img");
    
    $(".playerName").eq(0).html(data.player[0].playerName);
    $(".playerName").eq(1).html(data.player[1].playerName);
    if(data.win) {
       if(data.win == chooseId) {
            $(".f_pk_vs").html("你猜对了" + "</br>" + "获得小梦香吻");        
       } else {
            $(".f_pk_vs").html("你猜错了" + "</br>" + "下轮继续"); 
       }
       if(data.player[0].playerId == data.win) {
            $("#winBtnLeft").removeClass().addClass("winBtn").html("晋级");
            $("#winBtnRight").removeClass().addClass("winBtn pkInBtn").html("淘汰");
            leftImg.attr("src", data.player[0].playerUrl.split(".png")[0] + "-light.png");
            rightImg.attr("src", data.player[1].playerUrl.split(".png")[0] + "-dark.png");
       } else {
            $("#winBtnRight").removeClass().addClass("winBtn").html("晋级");
            $("#winBtnLeft").removeClass().addClass("winBtn pkInBtn").html("淘汰");
            leftImg.attr("src", data.player[0].playerUrl.split(".png")[0] + "-dark.png");
            rightImg.attr("src", data.player[1].playerUrl.split(".png")[0] + "-light.png");
       }
       // alert($(".f_pk_person1").eq(0).attr("playerId"));
    } else {
        leftImg.attr("src", data.player[0].playerUrl);
        rightImg.attr("src", data.player[1].playerUrl);
        $(".f_pk_person1").eq(0).attr("vote", data.result[0].vote);
        $(".f_pk_person2").eq(0).attr("vote", data.result[1].vote); 
        $(".f_pk_vs").html(data.des + "</br>" + "猜猜谁会晋级");
        $("#winBtnRight").removeClass().addClass("winBtn").html("晋级");
        $("#winBtnLeft").removeClass().addClass("winBtn").html("晋级");
        $( ".f_pk_person").bind("tap", function( e ){
            var index = $(this).index();
            tabPk(index);
            // (function(index) {
            //      tabPk(index);
            // })(index);
        });
    }

    // alert( $("#banner2")[0].style.display );
  
    
    //alert( data.player[1].playerId);
    //$('#guesses_holder').html('');

    //for(i=0;i<data.player.length;i++){
    //    var num1=data.result[i].selects[0].voteNum;
    //    var num2=data.result[i].selects[1].voteNum;
    //
    //    // if(num1==0 && num2==0){
    //    //     percent1='50%';
    //    //     percent2='50%';
    //    // }else{
    //    //     percent1=(num1/(num1+num2)*100).toFixed(1) + '%';
    //    //     percent2=(num2/(num1+num2)*100).toFixed(1) + '%';
    //    // }
    //    var singleGuess= "<div class=\"single_guess\" title=\""+data.player[i].playerId+"\">"
    //        + "               <div class=\"guess_pic\"><span><img src=\""+data.player[i].playerUrl+"\"></span></div>"
    //        + "               <div class=\"guess_btns\">"
    //        + "                   <div class=\"guess_name\"><span>"+data.player[i].playerName+"</span></div>"
    //        + "                   <div class=\"guess_btn choose1\"><span>待定</span></div>"
    //        + "                   <div class=\"guess_btn choose2\"><span>淘汰</span></div>"
    //        + "               </div>"
    //        + "               <div class=\"guess_bar\">"
    //        + "                   <div class=\"guess_bar1\"><span>"+data.player[i].playerName+"</span></div>"
    //        + "                   <div class=\"guess_bar2\">待定 <span>"+num1+"</span>票</div>"
    //        + "                   <div class=\"guess_bar2\">淘汰 <span>"+num2+"</span>票</div>"
    //        + "               </div>"
    //        + "           </div>";
    //
    //    $('#guesses_holder').append(singleGuess);

        

        if(debugMode==true){
            console.log("renderJingcaiLayer: num1=" +num1, "num2=" +num2, "name=" +data.player[i].playerName);
        }
    }

    //$('.guess_btn').unbind();
    //$('.guess_btn').click(function() {
    //    $(this).parent().hide();
    //    $(this).parent().next().css({"display":"table"});
    //    var pid=$(this).parent().parent().attr("title");
    //    var order=$(this).hasClass('choose1')?1:2;
    //    sendJingcai( pid , order );
    //    //piao +1
    //    var oPiao=$(this).parent().next().find('.guess_bar2 span');
    //    var curPiao=oPiao.eq(parseInt(order-1)).html();
    //    oPiao.eq(parseInt(order-1)).html( parseInt(curPiao)+1 );
    //
    //    console.log('title:'+ pid, 'choose:'+ order );
    //});


// renderJingcaiLayer(data2);


function updateJingcaiLayer(data){
    for(i=0;i<data.player.length;i++){
        var num1=data.result[i].selects[0].voteNum;
        var num2=data.result[i].selects[1].voteNum;

        $('#guesses_holder .single_guess').eq(i).find('.guess_bar2 span').eq(0).html(num1);
        $('#guesses_holder .single_guess').eq(i).find('.guess_bar2 span').eq(1).html(num2);

        if(debugMode==true){
            console.log("updateJingcaiLayer: playerid=" + data.result[i].playerid, "num1=" + num1, "num2=" +num2, "name=" +data.player[i].playerName);
        }
    }
}


function sendJingcai(playerId,myChoice){
    var url = postUrl+"submitChooseid";
    var data = {"openid":randomOpenid, "appid":appid, "sceneid":sceneid, "choose":'{"playerid":'+playerId+',"yours":'+myChoice+'}'};
    //console.dir(data.choose);
    $.ajax({
        type : "POST",
        url : url,
        data : data,
        dataType:'jsonp',
        jsonp:'callback',
        timeout:globalTimeout,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success : function ss(data) {
            if( data.ret==0 ){
                
            }
            console.info("sendJingcai: ret=" + data.ret );
        },
        error: function(a,b,c){
            if(debugMode==true){
                alert("check it error http:responseText"+a.responseText + "\n readyState" + a.readyState + "\n status" + a.status
                    +"\n"+"info:" + b +"\n" + "exception:" + c);
            }
        }
    });
}



//=======================jingcai page===============================
// var data3={"ret":"0","hpath":"http:\/\/1251097942.cdn.myqcloud.com\/1251097942\/honggaoliang\/images\/zhouxun.jpg ","result":[{"playerid":63,"result":1,"yours":0},{"playerid":65,"result":1,"yours":1},{"playerid":61,"result":2,"yours":2},{"playerid":64,"result":1,"yours":2},{"playerid":62,"result":2,"yours":0}],"des":"七个小矮人","title":"淘汰的选手是谁谁谁","player":[{"playerId":63,"playerName":"田渤","playerUrl":"","result":1,"selects":[{"des":"待定","id":1,"voteNum":0},{"des":"淘汰","id":2,"voteNum":0}]},{"playerId":65,"playerName":"GJ蒋卓嘉","playerUrl":"","result":1,"selects":[{"des":"待定","id":1,"voteNum":0},{"des":"淘汰","id":2,"voteNum":0}]},{"playerId":61,"playerName":"黄德毅","playerUrl":"","result":1,"selects":[{"des":"待定","id":1,"voteNum":0},{"des":"淘汰","id":2,"voteNum":0}]},{"playerId":64,"playerName":"李一平","playerUrl":"","result":1,"selects":[{"des":"待定","id":1,"voteNum":0},{"des":"淘汰","id":2,"voteNum":0}]},{"playerId":62,"playerName":"杨启","playerUrl":"","result":1,"selects":[{"des":"待定","id":1,"voteNum":0},{"des":"淘汰","id":2,"voteNum":0}]}],"tiid":10001};

function renderResult(data){
    if(data.ret == 0) {
        alert("111");
    }
//     console.log("scene10 start");
//     console.log(data);
//      console.log("scene10 end");
//     alert(data.win);
//     $('#banner-jingcai-result').fadeIn();

//     $('#banner-jingcai-result .host_img img').attr("src",zhuan(data.hpath));
//     $('#result-des').html(zhuan(data.title));
//     $('#result-title').html(zhuan(data.des));

//     $('#guesses_result').html('');
//     for(i=0;i<data.result.length;i++){
//         if(data.result[i].result==1){
//             var rightChoise='待定';
//         }else if(data.result[i].result==2){
//             var rightChoise='淘汰';
//         }else{
//             //
//         }

//         if(data.result[i].yours==0){
//             var yourChoise=' 您没有选择';
//             var icoStatus='';
//         }else if( data.result[i].yours==1 && data.result[i].yours==data.result[i].result){
//             var yourChoise=' 您选择了待定 猜对了';
//             var icoStatus='guess_right';
//         }else if( data.result[i].yours==1 && data.result[i].yours!=data.result[i].result){
//             var yourChoise=' 您选择了待定 猜错了';
//             var icoStatus='guess_wrong';
//         }else if( data.result[i].yours==2 && data.result[i].yours==data.result[i].result){
//             var yourChoise=' 您选择了淘汰 猜对了';
//             var icoStatus='guess_right';
//         }else if( data.result[i].yours==2 && data.result[i].yours!=data.result[i].result){
//             var yourChoise=' 您选择了淘汰 猜错了';
//             var icoStatus='guess_wrong';
//         }
        
//         var singleResult="<div class=\"single_guess\">"
// + "                            <div class=\"guess_pic\"><span><img src=\""+data.player[i].playerUrl+"\" height=\"60\" width=\"60\" alt=\"\"></span></div>"
// + "                            <div class=\"guess_result_bar\">"+data.player[i].playerName+rightChoise+yourChoise+"</div>"
// + "                        </div>";
//         $('#guesses_result').append(singleResult);
//         $('.guess_result_bar').eq(i).addClass(icoStatus);
//     }

//     if( $('.guess_result_bar').hasClass('guess_right') ){
//         $('#kissBar1,#kissBar2').hide();
//         $('#kissBar1').show();
//         $('#correctNum').html( $('.guess_right').length );
//     }else if( $('.guess_result_bar').hasClass('guess_wrong') ){
//         $('#kissBar1,#kissBar2').hide();
//         $('#kissBar2').show();
//     }else{
//         $('#kissBar1,#kissBar2').hide();
//     }


//     $('#check-result').unbind();
//     $('#check-result').show().bind( "tap", function( e ){ 
//         setLayerHeight( $('#result-layer') );
//         $('#result-layer').fadeIn();
//         $(this).fadeOut();

//         if( $('.guess_result_bar').hasClass('guess_right') ){
//             showKiss(2500,2000);
//         }
//     });


//     $('#result-collapse').unbind();
//     $('#result-collapse').bind( "tap", function( e ){ 
//         $('#result-layer').fadeOut();
//         $('#check-result').fadeIn();
//         return false;
//     });

//     if(debugMode==true){
//         console.log('renderResult below:');
//         console.dir(data);
//     }

}
// renderResult(data3);



function showKiss(kissTime,delayTime){
    setTimeout( function(){
        $('#audio-kiss').get(0).play();
        $('#kiss').addClass('animated3 bounceIn');

        setTimeout( function(){
            $('#kiss').removeClass('animated3 bounceIn');
        },delayTime);
    },3000);
    
}

//=======================guo && xiexie page===============================
function renderGxlayer(passPiao1, passPiao2, passChooseid1, passChooseid2, passMyChose){
	$('#gx-triggers').show();
	$('#check-trigger').hide();

	$('.votedata span').eq(0).width('0');
	$('.votedata span').eq(1).width('0');

	if(passMyChose!=0){
		$('#gx-triggers').hide();
		$('#check-trigger').fadeIn();
	}

	$( "#gx-triggers li" ).unbind();

	$( "#gx-triggers li" ).bind( "tap", function( e ){ 
		setLayerHeight( $('#gx-layer') );
		var chooseIndex=$(this).index();
		if(chooseIndex==0){
			submitMychoose(passChooseid1);
			passPiao1++;
		}else{
			submitMychoose(passChooseid2);
			passPiao2++;
		}
		// alert(chooseIndex);
	});

    //查看的时候ajax提交
    $( "#check-it" ).unbind();
	$( "#check-it" ).bind( "tap", function( e ){
        var url = postUrl+"showSubmitResult";
        var data = {"openid":randomOpenid, "appid":appid, "sceneid":sceneid};
        $.ajax({
            type : "POST",
            url : url,
            data : data,
            dataType:'jsonp',
            jsonp:'callback',
            timeout:globalTimeout,
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            success : function ss(data) {
                if( data.ret==0 ){
                    passPiao1=data.clist[0].num;
                    passPiao2=data.clist[1].num;

                    $('#gx-layer').fadeIn(400);
                    $('#check-trigger').hide();
                    resetGxRate();
                    showGxRate();
                }
                console.info("showSubmitResult ret=" + data.ret );
            },
            error: function(a,b,c){
                if(debugMode==true){
                    alert("check it error http:responseText"+a.responseText + "\n readyState" + a.readyState + "\n status" + a.status
                        +"\n"+"info:" + b +"\n" + "exception:" + c);
                }
            }
        });
	});



	$( "#gx-collapse" ).bind( "tap", function( e ){ 
        $('#gx-layer').fadeOut(400);
        $( "#check-trigger" ).show();
        resetGxRate();
        return false;
	});

	function showGxRate(){
		$('.x_songname em').eq(0).html(passPiao1);
		$('.x_songname em').eq(1).html(passPiao2);
		// var piao1=1232;
		// var piao2=3532;
		var piaoRate1=passPiao1/(parseInt(passPiao1)+parseInt(passPiao2)) *100 + '%';
		var piaoRate2=passPiao2/(parseInt(passPiao1)+parseInt(passPiao2)) *100 + '%';
		// console.log(piao1, piao2, piaoRate1);
		$('.votedata span').eq(0).width(piaoRate1);
		$('.votedata span').eq(1).width(piaoRate2);
	}

	function resetGxRate(){
		$('.votedata span').width('0%');
	}

}

// var submitErrorNumber=0;
function submitMychoose(myChooseid){
	var url = postUrl+"submitChooseid";
    var data = {"openid":randomOpenid, "appid":appid, "sceneid":sceneid, "choose":myChooseid};
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
            	$('#gx-triggers').hide();
    			$('#check-trigger').fadeIn();
    			// submitErrorNumber=0;
            }
			if(debugMode==true){
        		console.log("submitMychoose: ret "+data.ret, "myChooseid:"+myChooseid);
        	}
		},
        error: function(a,b,c){
            alert('发送失败，请稍后重试！');
            if(debugMode==true){
                alert("submit choose error http:responseText"+a.responseText + "\n readyState" + a.readyState + "\n status" + a.status
                    +"\n"+"info:" + b +"\n" + "exception:" + c);
            }
        }
    });
}


function submitMyDati(myChooseid,btnOrder){
	var url = postUrl+"submitChooseid";
    var data = {"openid":randomOpenid, "appid":appid, "sceneid":sceneid, "choose":myChooseid};
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
                $('#dati-btns span').eq(btnOrder).addClass('on');
            }
        	if(debugMode==true){
        		console.log("submitMyDati: ret "+data.ret, "myChooseid:"+myChooseid);
        	}
		},
        error: function(a,b,c){
            alert('发送失败，请稍后重试！');
            if(debugMode==true){
                alert("http:responseText"+a.responseText + "\n readyState" + a.readyState + "\n status" + a.status
                    +"\n"+"info:" + b +"\n" + "exception:" + c);
            }
        }
		
    });
}



//表情
$("#bq-trigger").bind( "tap", function(event){
    // alert( document.body.scrollTop );
    if(document.body.scrollTop>0){
        $('body').scrollTo( 0,200 );
        setTimeout( function(){
            $('#bq-holder').hide();
        },400);
    }else{
        $('body').scrollTo( 164,200 );
        $('#bq-holder').show();
    }

    event.stopPropagation();
    return false;
});


$("#chatBlock").bind( "tap", function(event){
    $('#input-content').blur();
    $('body').scrollTo( 0,200 );
    setTimeout( function(){
        $('#bq-holder').hide();
    },400);
    return false;
});



$('#bq-holder').flexslider({
    animation: "slide",
    animationSpeed: 400,
    slideshowSpeed: 4000,
    directionNav: false,
    controlNav: true,
    slideshow: false,
    animationLoop: false,
    start: function(){
        // $('#bq-holder').css({"visibility":"visible"});
        $('#bq-holder').hide();
    }
});




//16秒内连续发10次后禁言1分钟
function startBQ(){
    // var lastBqTime=0;
    var arrayObj = [0,0,0,0,0,0,0,0,0,0];
    $( "#bq-holder li span" ).bind( "tap", function(){ 
        // nowBqTime=Date.parse( new Date())
        console.log((arrayObj[0]-arrayObj[1]));
        // if( (arrayObj[0]-arrayObj[1])<1000 && (arrayObj[0]-arrayObj[1])>0){
        //     alert('表情好玩，可不要发太快哦！');
        // }
        if((arrayObj[0]-arrayObj[9])<16000 && (arrayObj[0]-arrayObj[9])>0){
            forbidenBQ(60000);
            alert('提醒！短时间内发过多表情将被禁发表情30秒！');
        }else{
            var imgSrc='images/biaoqing_gif/' + $(this).attr('title');
            sendMsg(imgSrc,1);
            pushMyMsg(imgSrc);
            
            arrayObj.unshift(Date.parse( new Date()));
            if(arrayObj.length>9){
                arrayObj.pop();
            }
        }
        return false;
    });
}
startBQ();


function forbidenBQ(forbidenTime){
     $( "#bq-holder li span" ).unbind('tap');
     setTimeout(startBQ,forbidenTime);
}


function preloadImg(){
    $('body').append('<div id="imgHolder" class="hidden"></div>');
    $('#imgHolder').append('<img src="images/biaoqing_gif/bq01.gif">');
    $('#imgHolder').append('<img src="images/biaoqing_gif/bq02.gif">');
    $('#imgHolder').append('<img src="images/biaoqing_gif/bq03.gif">');
    $('#imgHolder').append('<img src="images/biaoqing_gif/bq04.gif">');
    $('#imgHolder').append('<img src="images/biaoqing_gif/bq05.gif">');
    $('#imgHolder').append('<img src="images/biaoqing_gif/bq06.gif">');
    $('#imgHolder').append('<img src="images/biaoqing_gif/bq07.gif">');
    $('#imgHolder').append('<img src="images/biaoqing_gif/bq08.gif">');

    $('#imgHolder').append('<img src="images/biaoqing_gif/bqn01.gif">');
    $('#imgHolder').append('<img src="images/biaoqing_gif/bqn02.gif">');
    $('#imgHolder').append('<img src="images/biaoqing_gif/bqn03.gif">');
    $('#imgHolder').append('<img src="images/biaoqing_gif/bqn04.gif">');
    $('#imgHolder').append('<img src="images/biaoqing_gif/bqn05.gif">');
    $('#imgHolder').append('<img src="images/biaoqing_gif/bqn06.gif">');
    $('#imgHolder').append('<img src="images/biaoqing_gif/bqn07.gif">');
    $('#imgHolder').append('<img src="images/biaoqing_gif/bqn08.gif">');
    $('body').scrollTo( 0,200 );
}

preloadImg();



var myDate = new Date();
var todayYear=myDate.getFullYear();    //获取完整的年份(4位,1970-????)
var todayMonth=myDate.getMonth()+1;    //获取当前月份(0-11,0代表1月)
var todayDate=myDate.getDate();        //获取当前日(1-31)

var todayYMD=todayYear+'/'+todayMonth+'/'+todayDate;
var todayYMD1=todayYMD+' 22:38:00';
var todayYMD2=todayYMD+' 22:42:43';
var nowTime=new Date().getTime();


var gapTime=parseInt((nowTime-new Date(todayYMD1).getTime())/1000);

var startNumber=parseInt(gapTime*141.34)+1282000;                    //起始人数
// var fakeTotal=1331026+parseInt(Math.random()*1900);    //最终人数定格在1081026  ~ 1082926 之间
// fakeTotal=fakeTotal-startNumber;

var Jump;
var jumpTimer;
var jumpInterval=3000;                      //每隔多久跳一次

function increaseNumber(){
    Jump=416+parseInt(Math.random()*16);   //每三秒跳一次，平均每次跳693，波动在683-703之间
    // fakeTotal=fakeTotal-Jump;
    startNumber=startNumber+Jump;

    $('#people-num').html(startNumber);
    // console.log(fakeTotal);
    // if(fakeTotal<500){
    //     clearInterval(jumpTimer);
    // }
}

function timeToshow(){
    var nowTime=new Date().getTime();
    if( nowTime > new Date(todayYMD1).getTime() && nowTime < new Date(todayYMD2).getTime() ){
    // if( nowTime > new Date(todayYMD1).getTime() ){
        increaseNumber();
        // $('#banner-all').show();
        // var allCountTimer=setInterval(function(){
        $('#banner-all').fadeIn();
        // }, 30000);
    }else{
        $('#banner-all').fadeOut();
    }
    setTimeout(timeToshow,jumpInterval);
}
timeToshow();

// function timeToshow(){
//     if( nowTime > new Date(todayYMD1).getTime() && nowTime < new Date(todayYMD2).getTime() ){
//     // if( nowTime > new Date(todayYMD1).getTime() ){
//         increaseNumber();
//         // $('#banner-all').show();
//         var allCountTimer=setInterval(function(){
//          $('#banner-all').show().delay(5000).fadeOut(300);
//         }, 30000);
//     }else{
//         //nothing
//     }
// }
// timeToshow();































