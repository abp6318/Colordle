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
    if(temp < colordle.rClosestBelow){
        temp = colordle.rClosestBelow;
    }
    if(temp > colordle.rClosestAbove){
        temp = colordle.rClosestAbove;
    }
    rSelect.value = temp; 
});

ra10.addEventListener("click", function(){ 
    let temp = parseInt(rSelect.value) + 10;
    if(temp < colordle.rClosestBelow){
        temp = colordle.rClosestBelow;
    }
    if(temp > colordle.rClosestAbove){
        temp = colordle.rClosestAbove;
    }
    rSelect.value = temp; 
});

ra100.addEventListener("click", function(){ 
    let temp = parseInt(rSelect.value) + 100;
    if(temp < colordle.rClosestBelow){
        temp = colordle.rClosestBelow;
    }
    if(temp > colordle.rClosestAbove){
        temp = colordle.rClosestAbove;
    }
    rSelect.value = temp; 
});

rm1.addEventListener("click", function(){ 
    let temp = parseInt(rSelect.value) - 1;
    if(temp < colordle.rClosestBelow){
        temp = colordle.rClosestBelow;
    }
    if(temp > colordle.rClosestAbove){
        temp = colordle.rClosestAbove;
    }
    rSelect.value = temp; 
});

rm10.addEventListener("click", function(){ 
    let temp = parseInt(rSelect.value) - 10;
    if(temp < colordle.rClosestBelow){
        temp = colordle.rClosestBelow;
    }
    if(temp > colordle.rClosestAbove){
        temp = colordle.rClosestAbove;
    }
    rSelect.value = temp; 
});

rm100.addEventListener("click", function(){ 
    let temp = parseInt(rSelect.value) - 100;
    if(temp < colordle.rClosestBelow){
        temp = colordle.rClosestBelow;
    }
    if(temp > colordle.rClosestAbove){
        temp = colordle.rClosestAbove;
    }
    rSelect.value = temp; 
});

// onclicks for gSelect
document.getElementById("ga1").addEventListener("click", function(){ 
    let temp = parseInt(document.getElementById("gSelect").value) + 1;
    if(temp < colordle.gClosestBelow){
        temp = colordle.gClosestBelow;
    }
    if(temp > colordle.gClosestAbove){
        temp = colordle.gClosestAbove;
    }
    document.getElementById("gSelect").value = temp; 
});

document.getElementById("ga10").addEventListener("click", function(){ 
    let temp = parseInt(document.getElementById("gSelect").value) + 10;
    if(temp < colordle.gClosestBelow){
        temp = colordle.gClosestBelow;
    }
    if(temp > colordle.gClosestAbove){
        temp = colordle.gClosestAbove;
    }
    document.getElementById("gSelect").value = temp; 
});

document.getElementById("ga100").addEventListener("click", function(){ 
    let temp = parseInt(document.getElementById("gSelect").value) + 100;
    if(temp < colordle.gClosestBelow){
        temp = colordle.gClosestBelow;
    }
    if(temp > colordle.gClosestAbove){
        temp = colordle.gClosestAbove;
    }
    document.getElementById("gSelect").value = temp; 
});

document.getElementById("gm1").addEventListener("click", function(){ 
    let temp = parseInt(document.getElementById("gSelect").value) - 1;
    if(temp < colordle.gClosestBelow){
        temp = colordle.gClosestBelow;
    }
    if(temp > colordle.gClosestAbove){
        temp = colordle.gClosestAbove;
    }
    document.getElementById("gSelect").value = temp; 
});

document.getElementById("gm10").addEventListener("click", function(){ 
    let temp = parseInt(document.getElementById("gSelect").value) - 10;
    if(temp < colordle.gClosestBelow){
        temp = colordle.gClosestBelow;
    }
    if(temp > colordle.gClosestAbove){
        temp = colordle.gClosestAbove;
    }
    document.getElementById("gSelect").value = temp; 
});

document.getElementById("gm100").addEventListener("click", function(){ 
    let temp = parseInt(document.getElementById("gSelect").value) - 100;
    if(temp < colordle.gClosestBelow){
        temp = colordle.gClosestBelow;
    }
    if(temp > colordle.gClosestAbove){
        temp = colordle.gClosestAbove;
    }
    document.getElementById("gSelect").value = temp; 
});

// onclicks for bSelects
document.getElementById("ba1").addEventListener("click", function(){ 
    let temp = parseInt(document.getElementById("bSelect").value) + 1;
    if(temp < colordle.bClosestBelow){
        temp = colordle.bClosestBelow;
    }
    if(temp > colordle.bClosestAbove){
        temp = colordle.bClosestAbove;
    }
    document.getElementById("bSelect").value = temp; 
});

document.getElementById("ba10").addEventListener("click", function(){ 
    let temp = parseInt(document.getElementById("bSelect").value) + 10;
    if(temp < colordle.bClosestBelow){
        temp = colordle.bClosestBelow;
    }
    if(temp > colordle.bClosestAbove){
        temp = colordle.bClosestAbove;
    }
    document.getElementById("bSelect").value = temp; 
});

document.getElementById("ba100").addEventListener("click", function(){ 
    let temp = parseInt(document.getElementById("bSelect").value) + 100;
    if(temp < colordle.bClosestBelow){
        temp = colordle.bClosestBelow;
    }
    if(temp > colordle.bClosestAbove){
        temp = colordle.bClosestAbove;
    }
    document.getElementById("bSelect").value = temp; 
});

document.getElementById("bm1").addEventListener("click", function(){ 
    let temp = parseInt(document.getElementById("bSelect").value) - 1;
    if(temp < colordle.bClosestBelow){
        temp = colordle.bClosestBelow;
    }
    if(temp > colordle.bClosestAbove){
        temp = colordle.bClosestAbove;
    }
    document.getElementById("bSelect").value = temp; 
});

document.getElementById("bm10").addEventListener("click", function(){ 
    let temp = parseInt(document.getElementById("bSelect").value) - 10;
    if(temp < colordle.bClosestBelow){
        temp = colordle.bClosestBelow;
    }
    if(temp > colordle.bClosestAbove){
        temp = colordle.bClosestAbove;
    }
    document.getElementById("bSelect").value = temp; 
});

document.getElementById("bm100").addEventListener("click", function(){ 
    let temp = parseInt(document.getElementById("bSelect").value) - 100;
    if(temp < colordle.bClosestBelow){
        temp = colordle.bClosestBelow;
    }
    if(temp > colordle.bClosestAbove){
        temp = colordle.bClosestAbove;
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
    if(rSelectValue < colordle.rAnswer){
        // set guess color to too low
        // check
        if(colordle.rClosestBelow <= rSelectValue){
            colordle.rClosestBelow = rSelectValue + 1;
        }
    }else if(rSelectValue > colordle.rAnswer){
        if(colordle.rClosestAbove >= rSelectValue){
            colordle.rClosestAbove = rSelectValue - 1;
        }
    } else {
        // answer is correct & only option is now the correct answer
        colordle.rClosestBelow = rSelectValue;
        colordle.rClosestAbove = rSelectValue;
        document.getElementById("rSelect").disabled = true;
        document.getElementById("rm100").disabled = true;
        document.getElementById("rm10").disabled = true;
        document.getElementById("rm1").disabled = true;
        ra1.disabled = true;
        ra10.disabled = true;
        document.getElementById("ra100").disabled = true;
    }

    // gSelect
    if(gSelectValue < colordle.gAnswer){
        // set guess color to too low
        // check
        if(colordle.gClosestBelow <= gSelectValue){
            colordle.gClosestBelow = gSelectValue + 1;
        }
    }else if(gSelectValue > colordle.gAnswer){
        if(colordle.gClosestAbove >= gSelectValue){
            colordle.gClosestAbove = gSelectValue - 1;
        }
    } else {
        // answer is correct & only option is now the correct answer
        colordle.gClosestBelow = gSelectValue;
        colordle.gClosestAbove = gSelectValue;
        document.getElementById("gSelect").disabled = true;
        document.getElementById("gm100").disabled = true;
        document.getElementById("gm10").disabled = true;
        document.getElementById("gm1").disabled = true;
        document.getElementById("ga1").disabled = true;
        document.getElementById("ga10").disabled = true;
        document.getElementById("ga100").disabled = true;
    }

    // bSelect
    if(bSelectValue < colordle.bAnswer){
        // set guess color to too low
        // check
        if(colordle.bClosestBelow <= bSelectValue){
            colordle.bClosestBelow = bSelectValue + 1;
        }
    }else if(bSelectValue > colordle.bAnswer){
        if(colordle.bClosestAbove >= bSelectValue){
            colordle.bClosestAbove = bSelectValue - 1;
        }
    } else {
        // answer is correct & only option is now the correct answer
        colordle.bClosestBelow = bSelectValue;
        colordle.bClosestAbove = bSelectValue;
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
    submissionColor.style.backgroundColor = "rgb(" + rSelectValue + "," + gSelectValue + "," + bSelectValue + ")";

    var submissionText = document.createElement("DIV");
    submissionText.className = "submissionText";
    submissionText.innerText = "r: " + rSelectValue + "; g: " + gSelectValue + "; b: " + bSelectValue;
    submissionText.style.color = setContrast(rSelectValue, gSelectValue, bSelectValue);

    colordle.guesses.push({ "r": rSelectValue, "g": gSelectValue, "b": bSelectValue });

    submissionColor.appendChild(submissionText);

    submissionBlock.appendChild(submissionColor);
    
    document.getElementById("previousAnswers").insertBefore(submissionBlock, document.getElementById("previousAnswers").firstChild);

    document.getElementById("rSelect").value = colordle.rClosestBelow;
    document.getElementById("gSelect").value = colordle.gClosestBelow;
    document.getElementById("bSelect").value = colordle.bClosestBelow;

    // disable form and display victory info
    if(rSelectValue == colordle.rAnswer && gSelectValue == colordle.gAnswer && bSelectValue == colordle.bAnswer){
        document.getElementById("submitButton").disabled = true;

        var victory = document.createElement("DIV");
        victory.innerText = "You've done it! Shareable links and exports to be added soon.";
        victory.style.textAlign = "center";
        victory.style.color = setContrast(colordle.rAnswer, colordle.gAnswer, colordle.bAnswer);
        victory.classList = "text";
        // victory.style.textShadow = "1px 0px " + setContrastReverse(colordle.rAnswer, colordle.gAnswer, colordle.bAnswer);
        document.body.insertBefore(victory, document.body.firstChild);
        document.getElementById("rSelectLabel").innerText = "Red ("+colordle.rAnswer+")";
        document.getElementById("gSelectLabel").innerText = "Green ("+colordle.gAnswer+")";
        document.getElementById("bSelectLabel").innerText = "Blue ("+colordle.bAnswer+")";
    }else{
        if(rSelectValue == colordle.rAnswer){
            document.getElementById("rSelectLabel").innerText = "Red ("+colordle.rAnswer+")";
        }else{
            document.getElementById("rSelectLabel").innerText = "Red ("+colordle.rClosestBelow+" - "+colordle.rClosestAbove+")";
        }
        if(gSelectValue == colordle.gAnswer){
            document.getElementById("gSelectLabel").innerText = "Green ("+colordle.gAnswer+")";
        }else{
            document.getElementById("gSelectLabel").innerText = "Green ("+colordle.gClosestBelow+" - "+colordle.gClosestAbove+")";
        }
        if(bSelectValue == colordle.bAnswer){
            document.getElementById("bSelectLabel").innerText = "Blue ("+colordle.bAnswer+")";
        }else{
            document.getElementById("bSelectLabel").innerText = "Blue ("+colordle.bClosestBelow+" - "+colordle.bClosestAbove+")";
        }
    }
    localStorage.setItem("colordle", JSON.stringify(colordle));
});

document.getElementById("form").addEventListener('submit', function(event) { event.preventDefault(); } );


document.getElementById("newGameButton").addEventListener("click", function(){ 
    if(localStorage.getItem("colordle") !== null) {
        localStorage.removeItem("colordle");
    }
    location.reload();
});