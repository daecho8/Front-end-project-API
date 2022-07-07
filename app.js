const $submitBtn = $('#submit');
const $input = $("input[name='search']")
console.log($input);

$submitBtn.click(()=>{
    const userInput = $input.val();
    $.getJSON(`https://api.aviationapi.com/v1/airports?apt=${userInput}`, (data)=> {        //airport info
        // console.log(data)
        // console.log(data[userInput]);
        // console.log(data[userInput][0]);
        const airportName = data[userInput][0]["facility_name"];
        const city = data[userInput][0]["city"];
        const state = data[userInput][0]["state"];
        $(".infoOne").text("AIRPORT INFO");

        $(".airport-name").text(airportName);
        $(".airport-city").text(city);
        $(".airport-state").text(state);
    });

    $.getJSON(`https://api.aviationapi.com/v1/weather/metar?apt=K${userInput}`, (data)=> {      //weather info
        // console.log(data['K'+ userInput]['wind']);
        const wind = data['K'+ userInput]['wind'];
        const ReportTime = data['K'+ userInput]['time_of_obs'];
        const visibility = data['K'+ userInput]["visibility"];
        const temp = data['K'+ userInput]["temp"];
        $(".infoTwo").text("WEATHER INFO");

        $(".weather-reportTime").text("Report Time: " + ReportTime);
        $(".weather-visiability").text("Visibility: " + visibility);
        $(".weather-temp").text("Temp: " + temp + " C");
        $(".weather-wind").text("Wind: " + wind + " knots");
    });
});