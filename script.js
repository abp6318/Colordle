let rAnswer;
let gAnswer;
let bAnswer;
if (localStorage.getItem("rAnswer") === null && localStorage.getItem("gAnswer") === null && localStorage.getItem("bAnswer") === null) {
    // generate answer values
    rAnswer = Math.floor(Math.random() * 256);
    gAnswer = Math.floor(Math.random() * 256);
    bAnswer = Math.floor(Math.random() * 256);
    localStorage.setItem("rAnswer", rAnswer);
    localStorage.setItem("gAnswer", gAnswer);
    localStorage.setItem("bAnswer", bAnswer);
} else {
    // get answer values
    rAnswer = localStorage.getItem("rAnswer");
    gAnswer = localStorage.getItem("gAnswer");
    bAnswer = localStorage.getItem("bAnswer");
}

// set background color to answer values
document.body.style.backgroundColor = "rgb(" + rAnswer + "," + gAnswer + "," + bAnswer + ")";

// assign closest above and below limits for selection
let rClosestAbove = 255;
let rClosestBelow = 0;
let gClosestAbove = 255;
let gClosestBelow = 0;
let bClosestAbove = 255;
let bClosestBelow = 0;

// reusable elements
let ra1 = document.getElementById("ra1");
let ra10 = document.getElementById("ra10");
let ra100 = document.getElementById("ra100");
let rm1 = document.getElementById("rm1");
let rm10 = document.getElementById("rm10");
let rm100 = document.getElementById("rm100");
let rSelect = document.getElementById("rSelect");

// onclicks for rSelect
ra1.addEventListener("click", function(){ 
    let temp = parseInt(rSelect.value) + 1;
    if(temp < rClosestBelow){
        temp = rClosestBelow;
    }
    if(temp > rClosestAbove){
        temp = rClosestAbove;
    }
    rSelect.value = temp; 
});

ra10.addEventListener("click", function(){ 
    let temp = parseInt(rSelect.value) + 10;
    if(temp < rClosestBelow){
        temp = rClosestBelow;
    }
    if(temp > rClosestAbove){
        temp = rClosestAbove;
    }
    rSelect.value = temp; 
});

ra100.addEventListener("click", function(){ 
    let temp = parseInt(rSelect.value) + 100;
    if(temp < rClosestBelow){
        temp = rClosestBelow;
    }
    if(temp > rClosestAbove){
        temp = rClosestAbove;
    }
    rSelect.value = temp; 
});

rm1.addEventListener("click", function(){ 
    let temp = parseInt(rSelect.value) - 1;
    if(temp < rClosestBelow){
        temp = rClosestBelow;
    }
    if(temp > rClosestAbove){
        temp = rClosestAbove;
    }
    rSelect.value = temp; 
});

rm10.addEventListener("click", function(){ 
    let temp = parseInt(rSelect.value) - 10;
    if(temp < rClosestBelow){
        temp = rClosestBelow;
    }
    if(temp > rClosestAbove){
        temp = rClosestAbove;
    }
    rSelect.value = temp; 
});

rm100.addEventListener("click", function(){ 
    let temp = parseInt(rSelect.value) - 100;
    if(temp < rClosestBelow){
        temp = rClosestBelow;
    }
    if(temp > rClosestAbove){
        temp = rClosestAbove;
    }
    rSelect.value = temp; 
});

// onclicks for gSelect
document.getElementById("ga1").addEventListener("click", function(){ 
    let temp = parseInt(document.getElementById("gSelect").value) + 1;
    if(temp < gClosestBelow){
        temp = gClosestBelow;
    }
    if(temp > gClosestAbove){
        temp = gClosestAbove;
    }
    document.getElementById("gSelect").value = temp; 
});

document.getElementById("ga10").addEventListener("click", function(){ 
    let temp = parseInt(document.getElementById("gSelect").value) + 10;
    if(temp < gClosestBelow){
        temp = gClosestBelow;
    }
    if(temp > gClosestAbove){
        temp = gClosestAbove;
    }
    document.getElementById("gSelect").value = temp; 
});

document.getElementById("ga100").addEventListener("click", function(){ 
    let temp = parseInt(document.getElementById("gSelect").value) + 100;
    if(temp < gClosestBelow){
        temp = gClosestBelow;
    }
    if(temp > gClosestAbove){
        temp = gClosestAbove;
    }
    document.getElementById("gSelect").value = temp; 
});

document.getElementById("gm1").addEventListener("click", function(){ 
    let temp = parseInt(document.getElementById("gSelect").value) - 1;
    if(temp < gClosestBelow){
        temp = gClosestBelow;
    }
    if(temp > gClosestAbove){
        temp = gClosestAbove;
    }
    document.getElementById("gSelect").value = temp; 
});

document.getElementById("gm10").addEventListener("click", function(){ 
    let temp = parseInt(document.getElementById("gSelect").value) - 10;
    if(temp < gClosestBelow){
        temp = gClosestBelow;
    }
    if(temp > gClosestAbove){
        temp = gClosestAbove;
    }
    document.getElementById("gSelect").value = temp; 
});

document.getElementById("gm100").addEventListener("click", function(){ 
    let temp = parseInt(document.getElementById("gSelect").value) - 100;
    if(temp < gClosestBelow){
        temp = gClosestBelow;
    }
    if(temp > gClosestAbove){
        temp = gClosestAbove;
    }
    document.getElementById("gSelect").value = temp; 
});

// onclicks for bSelects
document.getElementById("ba1").addEventListener("click", function(){ 
    let temp = parseInt(document.getElementById("bSelect").value) + 1;
    if(temp < bClosestBelow){
        temp = bClosestBelow;
    }
    if(temp > bClosestAbove){
        temp = bClosestAbove;
    }
    document.getElementById("bSelect").value = temp; 
});

document.getElementById("ba10").addEventListener("click", function(){ 
    let temp = parseInt(document.getElementById("bSelect").value) + 10;
    if(temp < bClosestBelow){
        temp = bClosestBelow;
    }
    if(temp > bClosestAbove){
        temp = bClosestAbove;
    }
    document.getElementById("bSelect").value = temp; 
});

document.getElementById("ba100").addEventListener("click", function(){ 
    let temp = parseInt(document.getElementById("bSelect").value) + 100;
    if(temp < bClosestBelow){
        temp = bClosestBelow;
    }
    if(temp > bClosestAbove){
        temp = bClosestAbove;
    }
    document.getElementById("bSelect").value = temp; 
});

document.getElementById("bm1").addEventListener("click", function(){ 
    let temp = parseInt(document.getElementById("bSelect").value) - 1;
    if(temp < bClosestBelow){
        temp = bClosestBelow;
    }
    if(temp > bClosestAbove){
        temp = bClosestAbove;
    }
    document.getElementById("bSelect").value = temp; 
});

document.getElementById("bm10").addEventListener("click", function(){ 
    let temp = parseInt(document.getElementById("bSelect").value) - 10;
    if(temp < bClosestBelow){
        temp = bClosestBelow;
    }
    if(temp > bClosestAbove){
        temp = bClosestAbove;
    }
    document.getElementById("bSelect").value = temp; 
});

document.getElementById("bm100").addEventListener("click", function(){ 
    let temp = parseInt(document.getElementById("bSelect").value) - 100;
    if(temp < bClosestBelow){
        temp = bClosestBelow;
    }
    if(temp > bClosestAbove){
        temp = bClosestAbove;
    }
    document.getElementById("bSelect").value = temp; 
});


// button onclick event
document.getElementById("submitButton").addEventListener("click", function(){
    let rSelectValue = parseInt(document.getElementById("rSelect").value);
    let gSelectValue = parseInt(document.getElementById("gSelect").value);
    let bSelectValue = parseInt(document.getElementById("bSelect").value);

    // manage submissions
    // rSelect
    if(rSelectValue < rAnswer){
        // set guess color to too low
        // check
        if(rClosestBelow <= rSelectValue){
            rClosestBelow = rSelectValue + 1;
        }
    }else if(rSelectValue > rAnswer){
        if(rClosestAbove >= rSelectValue){
            rClosestAbove = rSelectValue - 1;
        }
    } else {
        // answer is correct & only option is now the correct answer
        rClosestBelow = rSelectValue;
        rClosestAbove = rSelectValue;
        document.getElementById("rSelect").disabled = true;
        document.getElementById("rm100").disabled = true;
        document.getElementById("rm10").disabled = true;
        document.getElementById("rm1").disabled = true;
        ra1.disabled = true;
        ra10.disabled = true;
        document.getElementById("ra100").disabled = true;
    }

    // gSelect
    if(gSelectValue < gAnswer){
        // set guess color to too low
        // check
        if(gClosestBelow <= gSelectValue){
            gClosestBelow = gSelectValue + 1;
        }
    }else if(gSelectValue > gAnswer){
        if(gClosestAbove >= gSelectValue){
            gClosestAbove = gSelectValue - 1;
        }
    } else {
        // answer is correct & only option is now the correct answer
        gClosestBelow = gSelectValue;
        gClosestAbove = gSelectValue;
        document.getElementById("gSelect").disabled = true;
        document.getElementById("gm100").disabled = true;
        document.getElementById("gm10").disabled = true;
        document.getElementById("gm1").disabled = true;
        document.getElementById("ga1").disabled = true;
        document.getElementById("ga10").disabled = true;
        document.getElementById("ga100").disabled = true;
    }

    // bSelect
    if(bSelectValue < bAnswer){
        // set guess color to too low
        // check
        if(bClosestBelow <= bSelectValue){
            bClosestBelow = bSelectValue + 1;
        }
    }else if(bSelectValue > bAnswer){
        if(bClosestAbove >= bSelectValue){
            bClosestAbove = bSelectValue - 1;
        }
    } else {
        // answer is correct & only option is now the correct answer
        bClosestBelow = bSelectValue;
        bClosestAbove = bSelectValue;
        document.getElementById("bSelect").disabled = true;
        document.getElementById("bm100").disabled = true;
        document.getElementById("bm10").disabled = true;
        document.getElementById("bm1").disabled = true;
        document.getElementById("ba1").disabled = true;
        document.getElementById("ba10").disabled = true;
        document.getElementById("ba100").disabled = true;
    }

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

    document.getElementById("rSelect").value = rClosestBelow;
    document.getElementById("gSelect").value = gClosestBelow;
    document.getElementById("bSelect").value = bClosestBelow;

    // disable form and display victory info
    if(rSelectValue == rAnswer && gSelectValue == gAnswer && bSelectValue == bAnswer){
        document.getElementById("submitButton").disabled = true;

        var victory = document.createElement("DIV");
        victory.innerText = "You've done it! Shareable links and exports to be added soon.";
        victory.style.textAlign = "center";
        victory.style.color = setContrast(rAnswer, gAnswer, bAnswer);
        victory.classList = "text";
        victory.style.textShadow = "1px 0px " + setContrastReverse(rAnswer, gAnswer, bAnswer);
        document.body.insertBefore(victory, document.body.firstChild);
        document.getElementById("rSelectLabel").innerText = "Red ("+rAnswer+")";
        document.getElementById("gSelectLabel").innerText = "Green ("+gAnswer+")";
        document.getElementById("bSelectLabel").innerText = "Blue ("+bAnswer+")";
    }else{
        if(rSelectValue == rAnswer){
            document.getElementById("rSelectLabel").innerText = "Red ("+rAnswer+")";
        }else{
            document.getElementById("rSelectLabel").innerText = "Red ("+rClosestBelow+" - "+rClosestAbove+")";
        }
        if(gSelectValue == gAnswer){
            document.getElementById("gSelectLabel").innerText = "Green ("+gAnswer+")";
        }else{
            document.getElementById("gSelectLabel").innerText = "Green ("+gClosestBelow+" - "+gClosestAbove+")";
        }
        if(bSelectValue == bAnswer){
            document.getElementById("bSelectLabel").innerText = "Blue ("+bAnswer+")";
        }else{
            document.getElementById("bSelectLabel").innerText = "Blue ("+bClosestBelow+" - "+bClosestAbove+")";
        }
    }
});

document.getElementById("form").addEventListener('submit', function(event) { event.preventDefault(); } );

var previousAnswers = document.createElement("DIV");
previousAnswers.id = "previousAnswers";
document.body.append(previousAnswers);

document.querySelectorAll(".text").forEach(element => {
    element.style.color = setContrast(rAnswer, gAnswer, bAnswer);
    // element.style.textShadow = "1px 0px " + setContrastReverse(rAnswer, gAnswer, bAnswer);
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
    if(e.value < rClosestBelow){
        e.value = rClosestBelow;
    }
    if(e.value > rClosestAbove){
        e.value = rClosestAbove;
    }
}

// confirm/adjust value of green to be between upper and lower limits
function checkInputGreen(e){
    if(e.value < gClosestBelow){
        e.value = gClosestBelow;
    }
    if(e.value > gClosestAbove){
        e.value = gClosestAbove;
    }
}

// confirm/adjust value of blue to be between upper and lower limits
function checkInputBlue(e){
    // console.log(e.value);
    if(e.value < bClosestBelow){
        e.value = bClosestBelow;
    }
    if(e.value > bClosestAbove){
        e.value = bClosestAbove;
    }
}









