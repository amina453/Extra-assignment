const message = document.getElementById("message")
const input = message.value;
const myArray = input.split(" ");
console.log(myArray);

var counts = {};
var compare = 0;
var mostFrequent;
(function(array){
   for(var i = 0, len = array.length - 1; i < len; i++){
       var word = array[i];
       
       if(counts[word] === undefined){
           counts[word] = 0;
       }else{
           counts[word] = counts[word] + 1;
       }
       if(counts[word] > compare){
             compare = counts[word];
             mostFrequent = myArray[i];
       }
    }
  return mostFrequent;
})(myArray);


let theMostFrequentWord = mostFrequent;
let numberOfWordsInTheMessage = myArray.length;
console.log(theMostFrequentWord);

const randomPhrasesAndPictures = [
    {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE"
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
]

function RandomItem()
{
    var random = randomPhrasesAndPictures[Math.floor(Math.random() * randomPhrasesAndPictures.length)];
    document.getElementById("result").innerHTML = random;   
}

document.getElementById("submit").addEventListener("click",
function() {
  console.log(`The most frequent word of the message is "${theMostFrequentWord}"`)
  console.log(`The number of words in the message is ${numberOfWordsInTheMessage}`)
}
);
