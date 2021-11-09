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

var theme = document.createElement("button");
theme.innerHTML = "Jasne tło";
theme.style.marginRight= "10px";
theme.style.backgroundSize = "cover";
theme.style.backgroundColor = "silver"
theme.style.color = "black";
document.getElementById("nav").appendChild(theme);


var bdy = document.getElementById("body");
theme.onclick = function (){
    bdy.style.backgroundImage = 'url("assets/back_form.jpg")';
    bdy.style.color = "black";
};