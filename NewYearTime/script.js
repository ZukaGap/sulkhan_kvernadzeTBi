$('.timer').countdown('2020/1/1', function(event) {
    var $this = $(this).html(event.strftime(''
    +'<div id="weeks"><span class="timer-numbers" >%w</span><span>კვირა</span></div>'
    +'<div id="days"><span class="timer-numbers"  >%d</span><span>დღე</span></div>'
    +'<div id="hours"><span class="timer-numbers" >%H</span><span>საათი</span></div>'
    +'<div id="minutes"><span class="timer-numbers" >%M</span><span>წუთი</span></div>'
    +'<div id="seconds"><span class="timer-numbers" >%S</span><span>წამი</span></div>'
    ))
 
    var H = $('#hours .timer-numbers').text();
    var M = $('#minutes .timer-numbers').text();
    var S = $('#seconds .timer-numbers').text();
    
    if(H == 00)
        $('#hours').css('background-color', '#880e4f');
    if(H == 00 && M == 00)
        $('#minutes').css('background-color', '#880e4f');
    if(H == 00 && S == 00 && M == 00)
        $('#seconds').css('background-color', '#d50000');
    else if(S == 01 && M == 00 && H == 00)
        $('#seconds').css('background-color', '#d50000');
    else if(S == 02 && M == 00 && H == 00)
        $('#seconds').css('background-color', '#d50000');
    else if(S == 03 && M == 00 && H == 00)
        $('#seconds').css('background-color', '#d50000');
    else if(S == 04 && M == 00 && H == 00)
        $('#seconds').css('background-color', '#d50000');
    else if(S == 05 && M == 00 && H == 00)
        $('#seconds').css('background-color', '#d50000');  
    else if(S == 06 && M == 00 && H == 00)
        $('#seconds').css('background-color', '#d50000');
    else if(S == 07 && M == 00 && H == 00)
        $('#seconds').css('background-color', '#d50000');
    else if(S == 08 && M == 00 && H == 00)
        $('#seconds').css('background-color', '#d50000');
    else if(S == 09 && M == 00 && H == 00)
        $('#seconds').css('background-color', '#d50000');

  });

