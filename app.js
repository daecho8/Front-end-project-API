jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

const $submitBtn = $('#submit').on( "mouseenter", function() {  //SEARCH BTN color change on
    $(this).css({
      "background-color": "green",
      "font-weight": "bolder"
    });
  })
  .on("mouseleave", function() {
    var styles = {
      backgroundColor : "#ddd",
      fontWeight: ""
    };
    $(this).css(styles);
  });

const $input = $("input[name='search']")
console.log($input);

$submitBtn.click(()=>{
    const userInput = ($input.val()).toUpperCase();
    $.getJSON(`https://api.aviationapi.com/v1/airports?apt=${userInput}`, (data)=> {        //airport info
        // console.log(data)
        // console.log(data[userInput]);
        // console.log(data[userInput][0]);
        const airportName = data[userInput][0]["facility_name"];
        const city = data[userInput][0]["city"];
        const county = data[userInput][0]["county"];
        const state = data[userInput][0]["state"];
        $("#result").css("backgroundColor", "white").css("width", "30%");
        $(".infoOne").text(`${userInput}` + " Airport");
        $(".airport-name").text("Full Name: " + airportName);
        $(".airport-city").text("City: " + city);
        $(".airport-county").text("County: " + county);
        $(".airport-state").text("State: " + state);

    });
   
    $.getJSON(`https://api.aviationapi.com/v1/weather/metar?apt=K${userInput}`, (data)=> {      //weather info
        // console.log(data['K'+ userInput]['wind']);
        const wind = data['K'+ userInput]['wind'];
        const ReportTime = data['K'+ userInput]['time_of_obs'];
        const visibility = data['K'+ userInput]["visibility"];
        const temp = data['K'+ userInput]["temp"];
        $("#weather").css("backgroundColor", "white").css("width", "30%");
        $(".infoTwo").text(`${userInput}` + " Weather");
        $(".weather-reportTime").text("Report Time: " + ReportTime);
        $(".weather-visiability").text("Visibility: " + visibility + " statue miles");
        $(".weather-temp").text("Temp: " + temp + " C");
        $(".weather-wind").text("Wind: " + wind + " knots");
    });


});