/* Komentarz */
// Komentarz jednoliniowy
function wyswietlWiadomosc(){
    alert("Message from function");
}

//Zmienne
var num = 0;
var text = "hello world";
var object = {
    "imie": "Eric",
    "nazwisko": "Oak",
    "age": 21
};
var array = [1, "text", {"imie": "Jack"}];
var num2 = num;

wyswietlWiadomosc();
//Wyświetlanie zmiennych
//console.log(object.nazwisko);
//alert("Hello world!");

//Instrukcje warunkowe
if(num == 0){
    text = "spełniony";
} else {
   alert("if nie został spełniony"); 
}

/*for(var i = 0; i < 10; i++){
    console.log(i);
}*/

var k = 0;

while(k < 10){
    console.log(k);
    k++;
}