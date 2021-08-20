let termino = "Quentin Tarantino";

$('#button').click(e => {

	const settings = {
		"async": true,
		"crossDomain": true,
		"url": `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${termino}&pageNumber=1&pageSize=10&autoCorrect=false`,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
			"x-rapidapi-key": "aba0c61be2msh82ac72ad6257ab5p118564jsn8b81b15e4344"
		}
	};
	$.ajax(settings).done(function (response) {
		console.log(response);
	});

})