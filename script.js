if (localStorage.getItem("colordle") === null) {
    var colordle = {
        rAnswer: 0,
        gAnswer: 0,
        bAnswer: 0,
        rClosestAbove: 255,
        rClosestBelow: 0,
        gClosestAbove: 255,
        gClosestBelow: 0,
        bClosestAbove: 255,
        bClosestBelow: 0,
        guesses: []
    }
    
    // generate answer values
    colordle.rAnswer = Math.floor(Math.random() * 256);
    colordle.gAnswer = Math.floor(Math.random() * 256);
    colordle.bAnswer = Math.floor(Math.random() * 256);
    localStorage.setItem("colordle", JSON.stringify(colordle));
} else {
    // get answer values
    var colordle = JSON.parse(localStorage.getItem("colordle"));

    colordle.guesses.forEach(element => {
        var submissionBlock = document.createElement("DIV");
        submissionBlock.className = "submissionBlock";

        var submissionColor = document.createElement("DIV");
        submissionColor.className = "submissionColor";
        submissionColor.style.backgroundColor = "rgb(" + element.r + "," + element.g + "," + element.b + ")";

        var submissionText = document.createElement("DIV");
        submissionText.className = "submissionText";
        submissionText.innerText = "r: " + element.r + "; g: " + element.g + "; b: " + element.b;
        submissionText.style.color = setContrast(element.r, element.g, element.b);

        colordle.guesses.push({ "r": element.r, "g": element.g, "b": element.g });

        submissionColor.appendChild(submissionText);

        submissionBlock.appendChild(submissionColor);
        
        document.getElementById("previousAnswers").insertBefore(submissionBlock, document.getElementById("previousAnswers").firstChild);
    });
}

document.getElementById("rSelect").value = colordle.rClosestBelow;
document.getElementById("gSelect").value = colordle.gClosestBelow;
document.getElementById("bSelect").value = colordle.bClosestBelow;

if(colordle.rClosestAbove == colordle.rAnswer){
    document.getElementById("rSelectLabel").innerText = "Red ("+colordle.rAnswer+")";
}else{
    document.getElementById("rSelectLabel").innerText = "Red ("+colordle.rClosestBelow+" - "+colordle.rClosestAbove+")";
}
if(colordle.gClosestAbove == colordle.gAnswer){
    document.getElementById("gSelectLabel").innerText = "Green ("+colordle.gAnswer+")";
}else{
    document.getElementById("gSelectLabel").innerText = "Green ("+colordle.gClosestBelow+" - "+colordle.gClosestAbove+")";
}
if(colordle.bClosestAbove == colordle.bAnswer){
    document.getElementById("bSelectLabel").innerText = "Blue ("+colordle.bAnswer+")";
}else{
    document.getElementById("bSelectLabel").innerText = "Blue ("+colordle.bClosestBelow+" - "+colordle.bClosestAbove+")";
}

// set background color to answer values
document.body.style.backgroundColor = "rgb(" + colordle.rAnswer + "," + colordle.gAnswer + "," + colordle.bAnswer + ")";

document.querySelectorAll(".text").forEach(element => {
    element.style.color = setContrast(colordle.rAnswer, colordle.gAnswer, colordle.bAnswer);
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

// confirm/adjust value of red to be between upper and lower limits
function checkInputRed(e){
    if(e.value < colordle.rClosestBelow){
        e.value = colordle.rClosestBelow;
    }
    if(e.value > colordle.rClosestAbove){
        e.value = colordle.rClosestAbove;
    }
}

// confirm/adjust value of green to be between upper and lower limits
function checkInputGreen(e){
    if(e.value < colordle.gClosestBelow){
        e.value = colordle.gClosestBelow;
    }
    if(e.value > colordle.gClosestAbove){
        e.value = colordle.gClosestAbove;
    }
}

// confirm/adjust value of blue to be between upper and lower limits
function checkInputBlue(e){
    if(e.value < colordle.bClosestBelow){
        e.value = colordle.bClosestBelow;
    }
    if(e.value > colordle.bClosestAbove){
        e.value = colordle.bClosestAbove;
    }
}
