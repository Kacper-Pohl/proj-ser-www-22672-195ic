var button = document.getElementById('sub');
button.style.backgroundColor = randomColors();

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function isEmpty(){
    var imie = document.formula.imie.value;
    var nazwisko = document.formula.nazwisko.value;
    if (imie != "" && nazwisko != "" && $('input[name=sex]:checked').length > 0)
    {
        alert("Dziękuję za wypełnienie formularza!");
        return false;
    }
    else
    {
        alert("Uzupełnij wszystko!");
        return true;
    }

}