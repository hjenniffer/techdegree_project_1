/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`
  this wil be used to generate the random objects that will be displayed on the web page
 
***/

var quotes = [
  {
    quote:'Until one has loved an animal a part of one\'s soul remains unawakened',
    source:'Anotole France',    

},

{
quote:'It is good to have an end to journey towards; but it is the journey that matters, in the end',
  source:'Ursula K.Le Guin, ',
  citation:'The Left hand of Darkness',
  year:1969,

},

{
  quote:'Difficulties strenghthen the mind, as labor does the body',
    source:' Lucius Annaeus Seneca',
  
  
  },
  {
    quote:'You must expect great things from yourself before you can do them ',
      source:'- Micheal Jordon',
     
    
    },

    {
      quote:'The journey of a thousand miles begins with one step',
        source:'-Lao Tzu',
     
      },

      {
        quote:'Not all those who wander are lost',
          source:'J.R.R. Tolkien',
        
        },

];


/***
  Create the `getRandomQuote` function to:
 - Cse the random number to `return` a random quote object from the `quotes` array.
***/


//- Create a variable to store a random number

function getRandomQuote(){

  // var randomQuote is used to store the random quotes, 
  var randomQuote = Math.floor(Math.random() * (quotes.length)); 
    return quotes [randomQuote];
   
}


//stores the function into a variable so that it can be used dynamically 
 

//Create the `printQuote` function : 

function printQuote () {
//variable to store the functions created in getRandomQuote()
 var random = getRandomQuote();
// Create html equal to an empty string
var html = '';

html = '<p class="quote">' + random.quote + '<p>';
html +=  '<p class ="source">' + random.source + '</p>';

//conditinal statement to check for citation

if (random.citation) {

    html += '<span class="citation"' + random.citation +'</span>';


};

//conditinal statement to check for year

if(random.year) {

 html += '<span class="year>"' + random.year +'</span>';

};

html += '</p>';

document.getElementById('quote-box').innerHTML= html;
return html;


};


printQuote();

//set 

window.timer = setInterval(printQuote,3000);



document.getElementById('loadQuote').addEventListener("click", printQuote, false);