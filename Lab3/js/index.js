

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

document.getElementById('txt').addEventListener('click',function (){
    let dateObj = new Date();
    let month = dateObj.getMonth() + 1;
    let day = dateObj.getDate();
    let year = dateObj.getFullYear();
    document.getElementById('date').innerHTML = day + "/" + month + "/" +year;

})




var theme = document.createElement("button");
theme.innerHTML = "Zmiana tła";
theme.style.marginRight= "10px";
theme.style.backgroundSize = "cover";
theme.style.backgroundColor = "silver"
theme.style.color = "black";
document.getElementById("nav").appendChild(theme);


var bdy = document.getElementById("body");
theme.onclick = function (){
    if(bdy.style.color!=="black"){
        bdy.style.backgroundImage = 'url("assets/back_form.jpg")';
        bdy.style.color = "black";
    }else{
        bdy.style.backgroundImage = 'url("assets/background.jpg")';
        bdy.style.color = "white";
    }

};

var stopka = document.getElementById('stopka');

function resize(elem, percent) { elem.style.fontSize = percent; }

stopka.addEventListener('mouseover',function (){
    resize(this, '150%');
});
stopka.addEventListener('mouseout',function (){
    resize(this, '100%');
});