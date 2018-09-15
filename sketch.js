var value;
var mode;
var weather;

var apiPath = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=e0342ddf94a760131ffacfa0e12bddf4';
var unit = '&units=metric';

var input;

function setup() {
    noCanvas();
    
    var button = select('#submit');
    button.mousePressed(weatherAskAndDraw);
    
    input = select('#city');
}

function keyDraw(){
    if (weather){
        var temp = weather.main.temp;
        var humidity = weather.main.humidity;
        var minTemp = weather.main.temp_min;
        var maxTemp = weather.main.temp_max;
        var country = weather.sys.country;
        var city = weather.name;
        var vis = weather.visibility;
        var des = weather.weather[0].description;
        var windSpeed = weather.wind.speed;
        
        mode = des;
        var string = mode.charAt(0).toUpperCase() + mode.substr(1,mode.length).toLowerCase();
        
        fill(255);
        
        document.getElementById("p1").innerHTML = "City: " + city;
        document.getElementById("p2").innerHTML = "Description: " + string;
        document.getElementById("p3").innerHTML = "Temperature: " + temp;
        document.getElementById("p4").innerHTML = "Humidity: " + humidity;
        document.getElementById("p5").innerHTML = "Wind Speed: " + windSpeed;
    }
}

function weatherAskAndDraw(){
    var url = apiPath + input.value() + apiKey + unit;
    loadJSON(url, gotData);
    
    keyDraw();
}

function gotData(data){
    weather = data;
}