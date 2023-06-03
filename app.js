var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function errorHandler(error) {
    console.log("error occured", error);
    alert("something went wrong! try again after some time");
}

function clickEventHandler() {
    var getTranslationURL = serverURL + "?" + "text=" + txtInput.value;
    
    fetch(getTranslationURL)
        .then(Response => Response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickEventHandler);