var requestCountryData = new XMLHttpRequest();

requestCountryData.open('GET', 'https://restcountries.eu/rest/v2/all',true);

requestCountryData.send();

requestCountryData.onload = function(){
    
    var  countryData= JSON.parse(this.response);   
    
    for(country in countryData){
        try{
        var countryName = countryData[country].name;
        var latLong = countryData[country].latlng;
        if(latLong.length === 0) 
        throw new Error("Lat Long not found");
        //send Country name and location to weather data api
        weatherData(countryName, ...latLong);
        }
        catch(e){
            console.log('Invalid co-ordinate data for country: ' + countryName + ' ' + e.message);
        }
    }
}

//function to get current temperature
var weatherData = function(name, lat , lng){

    var apiKey = 'bf5888409bd78bafc10a05ae206d012a';
    var URI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;
   
    var requestWeatherData = new XMLHttpRequest();
    
    requestWeatherData.open('GET', URI ,true);

    requestWeatherData.send();
 
    requestWeatherData.onload = function(){

        try{
        var countryWeatherData = JSON.parse(this.response);
        console.log(`${name} : ${countryWeatherData.main.temp}`);
        }

        catch(e){
            console.log('Invalid response from API for ' + name);
        }
    }

    
    

}

