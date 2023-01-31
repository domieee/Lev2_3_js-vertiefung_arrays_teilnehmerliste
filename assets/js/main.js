const participant = document.querySelector('#participant')
const push = document.querySelector('.push')
const pop = document.querySelector('.pop')
const table = document.querySelector('.table')
const participantArray = []
/* 
TODOS:
     - Create possibility to append a participant
         - Create a function that creates a new table row for each participant
         - Each participant needs a specific id to control them separately
    TODO: - Create a possibilty to delete a participant from the table
        TODO: - Create a function to select a participant
            TODO: - Add a class to every selected participant
        - Create a function to delete every selected participant
            - Create a statement to pop the last Item if no other item is selected
*/

function createParticipantTable() {
    // Creates a new table row and adds a specific id for each new row
    let row = table.insertRow();
    row.setAttribute('id', 'row-' + participantArray.length);

    // Creates new table cells and them to the table row
    let cellNr = row.insertCell();
    let cellName = row.insertCell();

    // ? Give the cells  
    cellNr.innerHTML = participantArray.length + '.';
    cellName.innerHTML = participant.value;

    // Push the element in an array
    participantArray.push(cellName.innerHTML);

    row.addEventListener("click", () => {
        console.log('object');
        // let selectedIndexNumber = this.id;
        // console.log(selectedIndexNumber);
        // selectParticipant(selectedIndexNumber);
    });
}

// function selectParticipant(number) {
//     let selectedParticipant = document.getElementById(number);
//     selectedParticipant.classList.add('.selected')
// }

// Adds a EventsListener to every table row
    // If one item gets clicked, the function selectParticipant() is called and the corresponding id trasmitted
// let elements = document.getElementsByTagName('tr');
// elements[0].addEventListener('click', () => {
//     elements[0].classList.toggle('selected');
// })
// for (var i = 0; i <= participantArray.length; i++) {

// }

push.addEventListener('click', createParticipantTable);


