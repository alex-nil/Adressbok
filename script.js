
//Hämtar id för UL
var myList = document.getElementById("adressbok");

//Deklarerar array för adressbok
var ordered = [];

//Hämtar adressboken lokalt, kollar response, om response finns så kalla på funktion
fetch("adressbok-1.json") 
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {    
        console.log(JSON.stringify(myJson)); //Kollar så att den har hittat data från json-fil

        //Trycker in objektet till array.
        for (var i=0; i<myJson.length; i++) {
            ordered.push(myJson[i]);
        }

        //Sorterar array, tar in parameter a och b. Kollar om a är mindre än b, och isåfall flytta upp lägre nummer i array
        ordered.sort(function(a, b){
            return a.age-b.age
        })

        //Loopar ut array till lista
        for (var i = 0; i < myJson.length; i++) {             
            myList.innerHTML += "<li>" + ordered[i].firstname + " " +  ordered[i].lastname + "</li>";
            myList.innerHTML += "<li> Email " + ordered[i].email +  "</li>";
            myList.innerHTML += "<li> Phone: " +  ordered[i].phone + "</li>";
            myList.innerHTML += "<li> Age: " +  ordered[i].age + "</li><hr>";
        }
    });

