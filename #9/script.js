function dataToTable(data) {
    //console.log(data)

    for(var i = 0; i < data.length; i++){
       //Tworzenie elementów
       var newRow = document.createElement("tr");
       var idItem = document.createElement("td");
       var titleItem = document.createElement("td");
       var statusItem = document.createElement("td");
       
       //Wstawianie do elementów <td> wartości
       idItem.innerHTML = data[i].id;
       titleItem.innerHTML = data[i].title;
       statusItem.innerHTML = data[i].completed;

       //Wstawienie td do tr
       newRow.appendChild(idItem);
       newRow.appendChild(titleItem);
       newRow.appendChild(statusItem);

       //Wstawienie tr do tabeli
       var dataTable = document.getElementById("data__table");
       dataTable.appendChild(newRow);
    }
}

fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => dataToTable(json))