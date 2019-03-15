var students = [{ name: 'Saurmo', age: 15 }];

var data = localStorage.getItem('datas');


console.log(data);


function addStudent() {
    console.log("Estoy en addStudent");
    var name_var = document.getElementById('name').value;
    var age_var = document.getElementById('age').value;

    //Creacion de forma 1
    var objectStudent = {};
    objectStudent.name = name_var;
    objectStudent.age = age_var;

    //Creacion de forma 2
    var object = { name: name_var, age: age_var };

    //Creacion de forma 3
    var data = { name_var, age_var }

    console.log(objectStudent);
    console.log(object);
    console.log(data);


    students.push(objectStudent);
    console.log(students);


    getAll()

}
function getAll() {
    students = localStorage.getItem('datas')
    if(students.length != 0){
        console.log(JSON.parse(students))
    }
    var row = ''
    students.forEach(element => {
        console.log(element)
        row += '<tr>'
        row += '<td>' + element.name + '</td>'
        row += '<td>' + element.age + '</td>'
        row += '<td> <button>Editar</button> </td>'
        row += '<td> <button>Eliminar</button> </td>'
        row += '</tr>'
        document.getElementById('studentsListTable').innerHTML = row;
        //localStorage.setItem()
        console.log(document.getElementById('studentsListTable'));
        
        console.log(JSON.stringify(students))

        localStorage.setItem('datas', JSON.stringify(students));
    });
}
//getAll()
