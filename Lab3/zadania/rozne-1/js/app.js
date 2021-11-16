var text = prompt("Wpisz jakieś zdanie.")

function countWord(text){
    return text.trim().split(/\s+/).length;
}

switch(true) {
    case (countWord(text)>1):
        alert('Zdanie składa się z ' + countWord(text) + ' wyrazów');
        break;
    case (countWord(text)===1):
        alert('Wpisałeś jeden wyraz');
        break;
    default:
        alert('Nic nie wpisałeś');
        break;
}