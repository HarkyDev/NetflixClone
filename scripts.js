console.log("afasfasfasfa")

const ApiKey = "e2201392"
const ApiLink = "http://www.omdbapi.com/?i=tt3896198&apikey=e2201392"

var requestUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=e2201392';
var responseText = document.getElementById('response-text');


var searchTerm = "batman"

// array values
var search1 = `https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=e2201392`
var search2 = `https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=e2201392`
var search3 = `https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=e2201392`
var search4 = `https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=e2201392`
var search5 = `https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=e2201392`
var search6 = `https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=e2201392`



function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");
  console.log("code is running")

  // and give it some content
  const newContent = document.createTextNode("content");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.querySelector(".wrapperRow1").appendChild(newDiv, currentDiv);
//   currentDiv.classList(".hoveringCards +  i ");
}








// var omdbArray = [batman1,batman2,batman3,batman4,batman5,batman6]
var omdbArray = [search1,search1]
console.log("-------------------------------------------------------------------------------------------------")
var fetchRequest = function(){
    for (var i = 0; i < omdbArray.length; i++){
        fetch(
            omdbArray[i]
            )
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                   for (var x = 1; x < 10; x++){
                console.log("MOVIE TITLE ------------" , data.Search[x].Title  );
                console.log("MOVIE POSTER ------------" , data.Search[x].Poster);
                const newImg = document.createElement("img");
                const newContent = data.Search[x].Poster;
                newImg.src = newContent;
                const currentImg = document.getElementById("row1");
                document.querySelector(".wrapperRow1").appendChild(newImg, currentImg);
                ///// new shit
                addElement()
                        


                //  Document.createElement("img",data.Search[x].Poster);
                // document.getElementById(x).src = data.Search[x].Poster
            }
                
            });
            
        }
        
}

console.log("running fetch 20 function")
fetchRequest()
    

 // create a new div element

//slide buttons
const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

buttonRight.onclick = function () {
  document.getElementById('wrapperRow1').scrollLeft += 1800; //move content right
};
buttonLeft.onclick = function () {
  document.getElementById('wrapperRow1').scrollLeft -= 1800; //move content left
};