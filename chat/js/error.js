//tappy.js  https://github.com/filamentgroup/tappy/
!function(a,b){var d,e,f,g;a.tapHandling=!1,d=function(c){return c.each(function(){function i(a){b(a.target).trigger("tap",[a,b(a.target).attr("href")]),a.stopImmediatePropagation()}function j(a){var b=a.originalEvent||a,c=b.touches||b.targetTouches;return c?[c[0].pageX,c[0].pageY]:null}function k(a){if(a.touches&&a.touches.length>1||a.targetTouches&&a.targetTouches.length>1)return!1;var b=j(a);f=b[0],e=b[1]}function l(a){if(!g){var b=j(a);b&&(Math.abs(e-b[1])>h||Math.abs(f-b[0])>h)&&(g=!0)}}function m(b){if(clearTimeout(d),d=setTimeout(function(){a.tapHandling=!1,g=!1},1e3),!(b.which&&b.which>1||b.shiftKey||b.altKey||b.metaKey||b.ctrlKey)){if(b.preventDefault(),g||a.tapHandling&&a.tapHandling!==b.type)return g=!1,void 0;a.tapHandling=b.type,i(b)}}var d,e,f,g,c=b(this),h=10;c.bind("touchstart.tappy MSPointerDown.tappy",k).bind("touchmove.tappy MSPointerMove.tappy",l).bind("touchend.tappy MSPointerUp.tappy",m).bind("click.tappy",m)})},e=function(a){return a.unbind(".tappy")},b.event&&b.event.special?b.event.special.tap={add:function(){d(b(this))},remove:function(){e(b(this))}}:(f=b.fn.bind,g=b.fn.unbind,b.fn.bind=function(a){return/(^| )tap( |$)/.test(a)&&d(this),f.apply(this,arguments)},b.fn.unbind=function(a){return/(^| )tap( |$)/.test(a)&&e(this),g.apply(this,arguments)})}(this,jQuery);


//=======================error back=================================
$( "#error-back" ).bind( "tap", function( e ){ 
	WeixinApi.closeWindow();
});

