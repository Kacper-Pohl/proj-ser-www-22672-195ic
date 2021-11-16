var text = prompt("Wpisz jakieś zdanie.")

var textFix = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

if(text !== ""){
    alert('Imię to ' + textFix + ' rozpoczyna się na literę ' + textFix.charAt(0));
}else
{
    alert('Nic nie wpisałeś!')
}