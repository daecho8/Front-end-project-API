## Front-End project: AIRPORT SEARCH

## Key Feature
* Finding Airport and weather information 
1. Typing airport ID (ex. ATL or BWI) inside the search box (input box).
    - It does not matter putting lowercase or uppercase.

2. Click "SEARCH" button.
    - When cursor is on the "SEARCH" button, it changes color of the button (gray to green).

3. Airport information and weather information shows in the middlbe of the screen under the search box.
    * Airport
    - Full name of the airport
    - City
    - County
    - State
    * Weather
    - Report time (the most updated time).
    - Temperature
    - Visibility
    - Wind

4. If a user wants to search a different airport, put in the search box different airport ID and click the "SEARCH" button.

## Learning from this project
* I was not able to get both airport and weather information from one URL.
* The Aviation API has two different URL for each airport information and weather information. Thus, I used two [$.getJSON] under the one 'Click' event.

* CORS ERROR was one of the main probelm from this project.
* It was solve by automatically enable cross-domain requests as following: 
- (function() {
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
})();

## Resources
- Aviation API: url(https://www.aviationapi.com/)
- [$.getJSON](https://api.jquery.com/jQuery.getJSON/#jQuery-getJSON-url-data-success)
- CROSS ERROR: auto cross-domain request (https://github.com/Rob--W/cors-anywhere)
- [.click] (https://api.jquery.com/click/#click-handler)
- Background picture source: url(https://i.pinimg.com/originals/2a/6d/a6/2a6da6ba7c9eefae5bff282ed56e0604.jpg)