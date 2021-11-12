var cont = document.getElementById('container');
var strona = document.getElementById('strona-podrecznik');


cont.style.backgroundColor = "silver";
strona.style.backgroundColor = "white";
strona.style.boxShadow = "10px 20px 30px black";
strona.style.borderStyle = "outset";
strona.style.borderRadius = '25px';

function roundCorner(elem, roundes){
    elem.style.borderRadius = roundes;
}
function markText(elem, percent, weight) {
    elem.style.fontSize = percent;
    elem.style.fontWeight = weight;
}