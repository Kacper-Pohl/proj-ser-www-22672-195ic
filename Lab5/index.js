//Zadanie 1

var konto = {
    'nazwa':'maxver',
    'mail':'maxvertappen33@gmail.com',
    'wiek':24,
    'punkty':{
        'ogolne':406,
        'bonusowe':5,
        'karne':8
    }
}

const punktyOgolne = konto.punkty.ogolne;
const punktyKarne = konto.punkty.karne;

function odejmowanie(a,b,fn){
    const wynik = a-b;
    fn(wynik);
}

odejmowanie(punktyOgolne,punktyKarne,function (roznica){
   console.log("Zad1 - Wynik odejmowania: " + roznica) ;
});


function getMail(fn){
    const mailKonto = konto.mail;
    fn(mailKonto)
}

getMail(function (mail){
    const nazwaKonto = konto.nazwa;
    console.log('Zad1 - Mail użytkownika '+nazwaKonto+' to '+mail);
});

//Zadanie 2

const users = fetch('https://jsonplaceholder.typicode.com/users');

function getUserId(response){
    return new Promise((resolve, reject) => {
        if(response !== 1){
            resolve(response);
        }else{
            reject("Zad2.1 - Błąd")
        }
    });
}

getUserId(users).then(response => response.json().then(function (data){
    var wynik = data[0].id * data[1].id;
    console.log('Zad2 - Wynik mnożenia: '+wynik);
}))
    .catch(error => console.log("Zad2 - Błąd", error))
    .finally(()=> console.log("Zad2 - Done"));

const users2 = fetch('https://jsonplaceholder.typicode.com/users');

function getUserInfo(response){
    return new Promise((resolve, reject) => {
        if(response !== 1){
            resolve(response);
        }else{
            reject("Zad2.2 - Błąd")
        }
    });
}

getUserInfo(users2).then(response => response.json().then(function (data){
    var info = "Adres emial użytkownika " + data[2].username + " to " + data[2].email;
    console.log(info);
}))
    .catch(error => console.log("Zad2 - Błąd", error))
    .finally(()=> console.log("Zad2 - Done"));

//Zadanie 3

var link = 'https://jsonplaceholder.typicode.com/users/1';

function dodawanieAsync(lat, lng){
    console.log("Zad3 - Wynik dodawania " + lat + " + " + lng + " to:");
    return(parseFloat(lat)+parseFloat(lng));
}

function postAsync(name, email){
    var info = {name: name, email: email};
    return(info);
}

async function asyncAwait(link){
    let response = await fetch(link);
    if(response.ok){
        JsonObject = await response.json();
        name = JsonObject.name;
        email = JsonObject.email;
        lat = JsonObject.address.geo.lat;
        lng = JsonObject.address.geo.lng;
        console.log(dodawanieAsync(lat,lng));
        console.log(postAsync(name,email));
    }
}

asyncAwait(link);


//Zadanie 4

function dodawanieAjax(lat, lng){
    console.log("Zad4 - Wynik dodawania "+lat+" + "+lng+" to:");
    return(parseFloat(lat)+parseFloat(lng));
}

function postAjax(name, email){
    var info = {name: name, email: email};
    return(info);
}

let user5 = "https://jsonplaceholder.typicode.com/users/5";
let xmlhttpr = new XMLHttpRequest();

xmlhttpr.open('GET', user5);
xmlhttpr.responseType = 'json';
xmlhttpr.send();

xmlhttpr.onload = function() {
    let data = xmlhttpr.response;
    name = data.name;
    email = data.email;
    lat = data.address.geo.lat;
    lng = data.address.geo.lng;
    console.log(dodawanieAjax(lat, lng));
    console.log(postAjax(name, email));
};
xmlhttpr.onerror = function() {
    console.log("Zad 4 - Wystąpił błąd");
}

//Zadanie 5

const user3 = fetch('https://jsonplaceholder.typicode.com/users/3');

user3.then(function (response){
    response.json().then(function (data){
        console.log("Zad5 - Wynik odejmowania "+data.address.geo.lat+" - "+data.address.geo.lng+" to: "+(parseFloat(data.address.geo.lat)-parseFloat(data.address.geo.lng)));
        var info = {name: name, email: email};
        console.log(info);
    })
})

//Zadanie 6

let user9 = 'https://jsonplaceholder.typicode.com/users/9';
axios.get(user9)
    .then(function (response){
        name = response.data.name;
        email = response.data.email;
        lat = response.data.address.geo.lat;
        lng = response.data.address.geo.lng;
        console.log("Zad6 - Wynik mnożenia "+lat+" * "+lng+" to: "+(parseFloat(lat)*parseFloat(lng)));
        var info = {name: name, email: email};
        console.log(info);
    })
