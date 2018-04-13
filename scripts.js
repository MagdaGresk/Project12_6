var url = 'https://restcountries.eu/rest/v2/name/'
var countriesList = $('#countries')
var countriesCapital = $('#capital')
var countriesRegion = $('#region')
var cauntriesLanguage = $('#languages[0].name')
var cauntriesCurrencies = $('#currencies[0].name')

function searchCountries() {
 	var countryName = $('#country-name').val()
  if(!countryName.length) countryName = 'Poland'
  $.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	})
}

function showCountriesList(resp) {
  countriesList.empty()
}

function showCountriesList(resp) {
    countriesList.empty()
    resp.forEach(function(item){
   		$('<h3>').text(item.name).appendTo(countriesList)
   		$('<h5>').text('capital: ' + item.capital).appendTo(countriesList)
   		$('<h5>').text('region: ' + item.region).appendTo(countriesList)
   		$('<h5>').text('official language: ' + item.languages[0].name).appendTo(countriesList)
   		$('<h5>').text('official currency: ' + item.currencies[0].name).appendTo(countriesList)
    })
} 

$('#search').click(searchCountries)
