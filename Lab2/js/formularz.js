var box = document.getElementById('box');

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
function buttonColor(elem){
    elem.style.backgroundColor = randomColors();
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

function sexColor(sex){
    if(sex === 'male'){
        box.style.backgroundColor="#66ffff";
    }else{
        box.style.backgroundColor="pink";
    }
}

box.style.boxShadow = "10px 20px 30px silver"
box.style.border = "2px solid silver";

function shadowColorEnter(elem){
    elem.style.boxShadow = "10px 20px 30px #ffff66";
    elem.style.border = "2px solid #ffff66";
}
function shadowColorLeave(elem){
    elem.style.boxShadow = "10px 20px 30px silver";
    elem.style.border = "2px solid silver";
}