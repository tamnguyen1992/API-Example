// REF: https://github.com/Giphy/GiphyAPI

/**********************************
  CONFIGURE JSON CALL
**********************************/
// The API feed
//https //api.unsplash.com/photos
//const getStuff = 'https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';
//const getStuff = 'https://api.publicapis.org/entries?category=animals&https=true';
const getStuff = 'https://api.thecatapi.com/v1/images/search/';

// Do stuff with returned data
let doStuff = function (data) {
    console.log(data);
    console.log(data[0]);
    console.log(data[0].url);
    showStuff(data);
};

/************************************
  GET JSON FROM API
************************************/
$.getJSON(getStuff, doStuff);


/************************************
  SHOW (DISPLAY ON PAGE)
************************************/
let showStuff = function (data) {
    //const template = `<img src=${data[0].url} />`; 
    //$('#app').append( template );
    $("img").attr("src", data[0].url);
}