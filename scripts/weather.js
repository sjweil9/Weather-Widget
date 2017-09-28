$(document).ready(function(){
    $('form').submit(function(){
        var cityurl = "https://api.openweathermap.org/data/2.5/weather?q=" + $('input[type="text"').val() + "&&appid=b50b58579832b19922bfcc91f9c9fc4a";
        $.get(cityurl, function(result){
            $('h1').text($('input[type="text"]').val());
            var fartemp = Math.floor(result.main.temp * (9/5) - 459.67);
            $('h2').text("Temperature (F): " + fartemp);
        }, "json");
        return false;
    });
})