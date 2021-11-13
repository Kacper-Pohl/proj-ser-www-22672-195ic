var txt = document .getElementById('txt');

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

document.getElementById('date').innerHTML = "Gdynia " + day + "." + month + "." +year;


function resizeText(multiplier) {
    if (txt.style.fontSize == "") {
        txt.style.fontSize = "1.0em";
    }
    txt.style.fontSize = parseFloat(txt.style.fontSize) + (multiplier * 0.2) + "em";

}

var fontChange = document.createElement("button");
fontChange.innerHTML = "Zmiana czcionki";
fontChange.style.border = "1px solid black";
fontChange.style.backgroundColor = "silver"
fontChange.style.color = "black";
document.getElementById("buttonList").appendChild(fontChange);

fontChange.onclick = function (){
    txt.style.fontFamily = "Courier New, monospace";
}

var blackBackground = document.createElement('button')
blackBackground.innerHTML = "Zmiana tła";
blackBackground.style.marginLeft= "5px";
blackBackground.style.border = "1px solid black";
blackBackground.style.backgroundColor = "silver"
blackBackground.style.color = "black";
document.getElementById('buttonList').appendChild(blackBackground);

blackBackground.onclick = function (){
    if( document.body.style.color!=="white"){
        document.body.style.backgroundColor= "black";
        document.body.style.color="white";
    }else{
        document.body.style.backgroundColor= "white";
        document.body.style.color="black";
    }
}

var boldFont = document.createElement('button')
boldFont.innerHTML="Pogrubienie czcionki";
boldFont.style.marginLeft="5px";
boldFont.style.border="1px solid black";
boldFont.style.backgroundColor="silver";
boldFont.style.color = "black";
document.getElementById('buttonList').appendChild(boldFont);

boldFont.onclick = function (){
    if(txt.style.fontWeight !== "bold"){
        txt.style.fontWeight = "bold";
    }else{
        txt.style.fontWeight = "normal";
    }

}
