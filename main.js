"strict mode"
//create empty array to use later
let classrooms =[]
let hours = ['8am', '9am','10am','11am','12pm']
//let docBody = document.getElementById(`docbody`)
let tble = document.getElementById('datatable')
let formEl = document.getElementById('data-form')

let Classroom = function(name, min, max, studentPerHour){
    this.name = name
    this.min = min 
    this.max = max
    this. studentsPerHour = studentsPerHour
}
Classroom.prototype.spellCastPerHour = function(){
    let randomNumber= Math.ceil(Math.random() * (this.max - this.min) + this.min)
    return randomNumber * this.studentsPerHour
}
Classroom.prototype.renderNewClassroom = function(){
    //create a new row to add to the table
    for (let i = 0; i < classrooms.length; i++){
        //Generating table header row and content
        let tblRow = document.getElementById (`tr`)
        let tblCell = document.getElementById(`th`) 
        tblCell.appendChild(tblRow)
        tblRow.appendChild(tblCell)
        //Add content to the cell
        tblCell.textContent = classrooms[i]
        for (let j = 0; j < hours.length; j++){
            let innerTblRow = createElement(`tr`)
            let innerTblRow = createElement(`td`)
            tblRow.appendChild(TBLtD)
            innerTblRow.appendChild(innerTblCell)
            innerTblCell.textContent = hours [j].spellCastPerHour()

        }
    }
}
for ( let k = 0; k < classrooms.length; k++) {
    classrooms [k].renderNewClassroom()
}
//Create two variable to reference the form input fields 
let nameInput = formEl.classroomname
let minInput = formEl.minimum

formEl.addEventListener('submit', function(event){
    event.preventDefault()
    let classroom = new Classroom(nameInput.value, parseInt(minInput.value),+
    12, 9)
    //we will now take this new classroom instance and push it to the array
    classrooms.push(classroom)
    classroom.push
})