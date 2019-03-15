var data = [

];

function saveData() {
    var name_var = document.getElementById('name').value;
    var age_var = document.getElementById('age').value;
    var objectData = {
        name: name_var,
        age: age_var
    };

    console.log(objectData);
    
    data.push(objectData);

    getAll()
}

function getAll() {
    var row = '';

    data.forEach(element => {
        row += '<tr>';
        row += '<td>' + element.name + '</td>';
        row += '<td>' + element.age + '</td>';
        row += '<td><button onclick="edit()">Eliminar</button></td>';
        row += '<td><button onclick="cancel()">Cancelar</button></td>';
        row += '<tr>';

        document.getElementById('listDataTable').innerHTML = row;
        console.log(document.getElementById('listDataTable'))
    });

    getAll();


}