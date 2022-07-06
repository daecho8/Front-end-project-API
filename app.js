const $submitBtn = $('#submit');
const $input = $("input[name='search']")
console.log($input);

$submitBtn.click(()=>{
    const userInput = $input.val();
    $.getJSON(`https://api.aviationapi.com/v1/airports?apt=${userInput}`, (data)=> {
    console.log(data)
    // console.log(data['userInput']);
    console.log(data[userInput][0]);
    // let result = data[0];
    // console.log(result);

    // $(".airport-name").text('testing 1');
    // $(".airport-city").text('testing 2');
    // $(".airport-state").text(state);


    });
});

