


const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://coronavirus-smartable.p.rapidapi.com/stats/v1/US/",
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "913211ba91msh70c390896318456p150682jsne61ce7f5ff8e",
        "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});