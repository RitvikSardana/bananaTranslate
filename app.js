var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#output");

// var url = "https://api.funtranslations.com/translate/minion.json"
var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function urlCreator(text){
    return url + "?" + "text=" +text;
}


function errorHandler(error){
    console.log("Error Occured",error)
}

function clickEventHandler() {
    // console.log("Clicked");
    // console.log(txtInput.value)
    // txtOutput.innerHTML = "Translated " + txtInput.value;
    var text = txtInput.value

    fetch(urlCreator(text))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        txtOutput.innerText = translatedText;
        console.log(translatedText)
            })
    .catch(errorHandler)
};

 btnTranslate.addEventListener("click",clickEventHandler)