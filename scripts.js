console.log("afasfasfasfa")

const ApiKey = "e2201392"
const ApiLink = "http://www.omdbapi.com/?i=tt3896198&apikey=e2201392"

var requestUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=e2201392';

var responseText = document.getElementById('response-text');


var omdbArray = ['http://www.omdbapi.com/?s=Batman&page=1&apikey=e2201392','http://www.omdbapi.com/?s=Batman&page=2&apikey=e2201392']
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
                document.body.insertBefore(newImg, currentImg);
                //  Document.createElement("img",data.Search[x].Poster);
                // document.getElementById(x).src = data.Search[x].Poster
            }
                
            });
            
        }
        
}

console.log("running fetch 20 function")
fetchRequest()
    

 // create a new div element

 // and give it some content
 const newContent = document.src(data.Search[x].Poster);

 // add the text node to the newly created div
 newDiv.appendChild(newContent);

 // add the newly created element and its content into the DOM
 const currentDiv = document.getElementById("div1");
 document.body.insertBefore(newDiv, currentDiv);