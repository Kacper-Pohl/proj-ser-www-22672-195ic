var txt = document.getElementById('txt');

function resizeText(multiplier) {
    if (txt.style.fontSize == "") {
        txt.style.fontSize = "1.0em";
    }
    txt.style.fontSize = parseFloat(txt.style.fontSize) + (multiplier * 0.2) + "em";

}