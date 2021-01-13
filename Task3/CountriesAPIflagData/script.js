var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function(){
    let  countryData= JSON.parse(this.response);
    for(i in countryData)
    console.log(countryData[i].name , countryData[i].flag);
    
}