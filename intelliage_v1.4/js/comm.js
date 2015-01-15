	
$('li:first-child').addClass('first-item'); $('li:last-child').addClass('last-item');


$("#slider-range1").slider({
    range: 'min',
    min: -1,
    max: 101,
    value: 50,
    // step:1,
    slide: slideTime
    //change:slideChange
});

slideTime();
function slideTime(event, ui){
    var val0 = $("#slider-range1").slider("values", 0);
    $("#bs-txt span").text(val0 );
}


$("#slider-range2").slider({
    range: 'min',
    min: 0,
    max: 100,
    value: 50,
    step:1,
    slide: slideTime2
    //change:slideChange
});

slideTime2();
function slideTime2(event, ui){
    var val0 = $("#slider-range2").slider("values", 0);
    var $handle=$("#slider-range2 a");
    // transToHex(val0);
    $handle.removeClass().addClass('c'+val0);
    // $("#bs-txt2 span").text(val0 );
}


$('.device_turnner').click(function() {
    if( !$(this).hasClass('disabled') ){
        if( $(this).hasClass('on') ){
            $(this).removeClass('on');
        }else{
            $(this).addClass('on');
        }
    }
});


$('#device-list li.li_add').click(function() {
    $('.layer').fadeIn();
    $('#pop-edit-device').fadeIn();
    return false;
});



$('#add-device li .device_type').click(function() {
    $(this).parent().toggleClass('on');
    return false;
});

$('#pop-edit-device .btn_finish').click(function() {
    $('.layer').fadeOut();
    $('#pop-edit-device').fadeOut();
});

$('#edit-row-edit a').click(function() {
    $('#edit-row-edit').hide();
    $('#edit-row-del').show();
    $('#device-list').removeClass('disabled').addClass('deletable');
    $('#device-list.deletable li .device_type').click(function() {
        $(this).parent().toggleClass('del_on');
        return false;
    });
    return false;
});

$('#edit-row-del .btn_del').click(function() {
    $('#device-list li.del_on').addClass('animated bounceOut');
    setTimeout(function(){
        $('#device-list li.del_on').remove();

    }, 1000);

    return false;
});

$('#edit-row-del .btn_finish').click(function() {
    $('#edit-row-edit').show();
    $('#edit-row-del').hide();
    $('#device-list').addClass('disabled').removeClass('deletable');
    return false;
});


$('#device-list.disabled li:not(.li_add) .device_type').click(function() {
    return false;
});








