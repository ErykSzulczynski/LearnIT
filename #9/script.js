var finishedNum = 0;
var unfinishedNum = 0;

function dataToTable(data) {
    console.log(data)

    for(var i = 0; i < data.length; i++){
       //Tworzenie elementów
       var newRow = document.createElement("tr");
       var idItem = document.createElement("td");
       var titleItem = document.createElement("td");
       var statusItem = document.createElement("td");
       
       //Wstawianie do elementów <td> wartości
       idItem.innerHTML = data[i].id;
       titleItem.innerHTML = data[i].title;

        var statusFormated;

        if(data[i].completed == true){
            statusFormated = "finished"
            finishedNum++;
        } else {
            statusFormated = "unfinished"
            unfinishedNum++;
        }

       statusItem.innerHTML = statusFormated;

       //Wstawienie td do tr
       newRow.appendChild(idItem);
       newRow.appendChild(titleItem);
       newRow.appendChild(statusItem);

       //Wstawienie tr do tabeli
       var dataTable = document.getElementById("data__table");
       dataTable.appendChild(newRow);
    }

    var itemsNum = document.getElementById('items__num');
    var itemsFinished = document.getElementById('items__finished');
    var itemsUnfinished = document.getElementById('items__unfinished');

    itemsNum.innerHTML = data.length;
    itemsFinished.innerHTML = finishedNum;
    itemsUnfinished.innerHTML = unfinishedNum;
}

fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => dataToTable(json))