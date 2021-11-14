var cont = document.getElementById('container');
var strona = document.getElementById('strona-podrecznik');
function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

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

strona.addEventListener('dblclick', function (){
    strona.style.boxShadow = "10px 20px 30px navy";
    strona.style.borderColor = 'navy'
})
window.addEventListener('resize',function (){
    cont.style.backgroundColor = randomColors();
})