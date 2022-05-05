
// generate answer values
let rAnswer = Math.floor(Math.random() * 256);
let gAnswer = Math.floor(Math.random() * 256);
let bAnswer = Math.floor(Math.random() * 256);
// console.log(rAnswer);
// console.log(gAnswer);
// console.log(bAnswer);

var form = document.createElement("FORM");

document.body.style.backgroundColor = "rgb(" + rAnswer + "," + gAnswer + "," + bAnswer + ")";

// create selects
let rSelect = document.createElement("SELECT");
rSelect.id = "rSelect";
let gSelect = document.createElement("SELECT");
gSelect.id = "gSelect";
let bSelect = document.createElement("SELECT");
bSelect.id = "bSelect";

// load initial options
loadSelectOptions(rSelect, 0, 256);
loadSelectOptions(gSelect, 0, 256);
loadSelectOptions(bSelect, 0, 256);

// append selects
form.append(rSelect);
form.append(gSelect);
form.append(bSelect);

// create button
let submitButton = document.createElement("BUTTON");
submitButton.innerText = "Guess Color";

// variables
let rClosestAbove = 255;
let rClosestBelow = 0;
let gClosestAbove = 255;
let gClosestBelow = 0;
let bClosestAbove = 255;
let bClosestBelow = 0;

// button onclick event
submitButton.addEventListener("click", function(){
    let rSelectValue = parseInt(document.getElementById("rSelect").value);
    let gSelectValue = parseInt(document.getElementById("gSelect").value);
    let bSelectValue = parseInt(document.getElementById("bSelect").value);
    
    // validate input
    if(rSelectValue >= 0 && rSelectValue <= 255 &&
        gSelectValue >= 0 && gSelectValue <= 255 &&
        bSelectValue >= 0 && bSelectValue <= 255){
            // nothing
    }else{
        // bad input
        location.reload();
    }

    // manage submissions
    // rSelect
    if(rSelectValue < rAnswer){
        // set guess color to too low
        // check
        if(rClosestBelow < rSelectValue){
            rClosestBelow = rSelectValue + 1;
        }
    }else if(rSelectValue > rAnswer){
        if(rClosestAbove > rSelectValue){
            rClosestAbove = rSelectValue;
        }
    } else {
        // answer is correct & only option is now the correct answer
        rClosestBelow = rSelectValue;
        rClosestAbove = rSelectValue + 1;
    }

    // gSelect
    if(gSelectValue < gAnswer){
        // set guess color to too low
        // check
        if(gClosestBelow < gSelectValue){
            gClosestBelow = gSelectValue + 1;
        }
    }else if(gSelectValue > gAnswer){
        if(gClosestAbove > gSelectValue){
            gClosestAbove = gSelectValue;
        }
    } else {
        // answer is correct & only option is now the correct answer
        gClosestBelow = gSelectValue;
        gClosestAbove = gSelectValue + 1;
    }

    // bSelect
    if(bSelectValue < bAnswer){
        // set guess color to too low
        // check
        if(bClosestBelow < bSelectValue){
            bClosestBelow = bSelectValue + 1;
        }
    }else if(bSelectValue > bAnswer){
        if(bClosestAbove > bSelectValue){
            bClosestAbove = bSelectValue;
        }
    } else {
        // answer is correct & only option is now the correct answer
        bClosestBelow = bSelectValue;
        bClosestAbove = bSelectValue + 1;
    }

    // refresh selects
    emptySelects();
    loadSelectOptions(rSelect, rClosestBelow, rClosestAbove);
    loadSelectOptions(gSelect, gClosestBelow, gClosestAbove);
    loadSelectOptions(bSelect, bClosestBelow, bClosestAbove);

    var submissionBlock = document.createElement("DIV");
    submissionBlock.className = "submissionBlock";

    var submissionColor = document.createElement("DIV");
    submissionColor.className = "submissionColor";
    // submissionColor.innerText = "r: " + rSelectValue + "; g: " + gSelectValue + "; b: " + bSelectValue;
    submissionColor.style.backgroundColor = "rgb(" + rSelectValue + "," + gSelectValue + "," + bSelectValue + ")";

    var submissionText = document.createElement("DIV");
    submissionText.className = "submissionText";
    submissionText.innerText = "r: " + rSelectValue + "; g: " + gSelectValue + "; b: " + bSelectValue;
    submissionText.style.color = setContrast(rSelectValue, gSelectValue, bSelectValue);

    submissionColor.appendChild(submissionText);

    submissionBlock.appendChild(submissionColor);
    
    document.getElementById("previousAnswers").insertBefore(submissionBlock, document.getElementById("previousAnswers").firstChild);
});

// append button to form
form.append(submitButton);

form.addEventListener('submit', function(event) { event.preventDefault(); } );

// append form to body
document.body.append(form);

// create list
var previousAnswers = document.createElement("DIV");
previousAnswers.id = "previousAnswers";
document.body.append(previousAnswers);

document.querySelectorAll(".text").forEach(element => {
    element.style.color = setContrast(rAnswer, gAnswer, bAnswer);
    element.style.textShadow = "1px 0px " + setContrastReverse(rAnswer, gAnswer, bAnswer);
});





function setContrast(rSelectValue, gSelectValue, bSelectValue) {
    const brightness = Math.round(((rSelectValue * 299) +
                        (gSelectValue * 587) +
                        (bSelectValue * 114)) / 1000);
    const textColour = (brightness > 125) ? 'black' : 'white';
    return textColour;
}

function setContrastReverse(rSelectValue, gSelectValue, bSelectValue) {
    const brightness = Math.round(((rSelectValue * 299) +
                        (gSelectValue * 587) +
                        (bSelectValue * 114)) / 1000);
    const textColour = (brightness > 125) ? 'white' : 'black';
    return textColour;
}


function emptySelects(){
    var rSelect = document.getElementById("rSelect");
    var length = rSelect.options.length;
    for (i = length-1; i >= 0; i--) {
        rSelect.options[i] = null;
    }
    var gSelect = document.getElementById("gSelect");
    var length = gSelect.options.length;
    for (i = length-1; i >= 0; i--) {
        gSelect.options[i] = null;
    }
    var bSelect = document.getElementById("bSelect");
    var length = bSelect.options.length;
    for (i = length-1; i >= 0; i--) {
        bSelect.options[i] = null;
    }
}

function loadSelectOptions(selectObject, min, max){
    for(let index=min; index<max; index++){
        let option = document.createElement("OPTION");
        option.nodeValue = index;
        option.innerText = index;
        selectObject.appendChild(option);
    }
}









