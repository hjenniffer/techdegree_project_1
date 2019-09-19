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
    quote:"Until one has loved an animal , a part of one's soul remains unawakened",
    source:"- Anotole France",
    citation :'',
    year:''

},
// Quote with citation and year as per instructions //
{
quote:"It is good to have an end to journey towards; but it is the journey that matters, in the end",
  source:"- Ursula K.Le Guin, ",
  citation :'The Left hand of Darkness',
  year:'1969'

},

{
  quote:"Difficulties strenghthen the mind, as labor does the body",
    source:"- Lucius Annaeus Seneca",
    citation :'',
    year:''
  
  },
  {
    quote:"You must expect great things from yourself before you can do them ",
      source:"- Micheal Jordon",
      citation :'',
      year:''
    
    },

    {
      quote:"The journey of a thousand miles begins with one step",
        source:"-Lao Tzu",
        citation :'',
        year:''
      
      },

      {
        quote:"Not all those who wander are lost",
          source:"J.R.R. Tolkien",
          citation :'',
          year:''
        
        },

];


/***
  Create the `getRandomQuote` function to:
 - Cse the random number to `return` a random quote object from the `quotes` array.
***/


//- Create a variable to store a random number

function getRandomQuote(){

  // var randomQuote is used to store the random quotes, 
  var randomQuote = Math.floor(Math.random() * (quotes.length) +1); 
    return quotes [randomQuote];
   
}

//stores the function into a variable so that it can be used dynamically 
 var random = getRandomQuote();
// Create html equal to an empty string
var html = '';



//Create the `printQuote` function to: 

function printQuote () {

html = '<p class="quote">'+  



}

/***
  



   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

