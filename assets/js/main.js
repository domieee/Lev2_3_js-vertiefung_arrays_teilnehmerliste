const participant = document.querySelector('#participant')
const push = document.querySelector('.push')
const pop = document.querySelector('.pop')
const table = document.querySelector('.table')
const participantArray = []
/* 
TODOS:
    ! - Create possibility to append a participant
        ! - Create a function that creates a new table row for each participant
        ! - Each participant needs a specific id to control them separately
    - Create a possibilty to delete a participant from the table
        - Create a function to select a participant
            - Change the background color of the row
            - Save the specitic ID of the selected Item in a variable
        - Create a function to delete a participant
            - Create a statement to pop the last Item if no other Item is selected
*/


function createParticipantTable() {
    // Creates a new table row and adds a specific id for each new row
    let row = table.insertRow();
    row.setAttribute('id', 'row-' + participantArray.length);


    let cellNr = row.insertCell();
    let cellName = row.insertCell();

    cellNr.innerHTML = participantArray.length + '.';
    cellName.innerHTML = participant.value;

    participantArray.push(cellName.innerHTML);

    var elements= document.getElementsByTagName('tr');

    for (var i = 0; i <= participantArray.length; i++) {
        (elements)[i].addEventListener("click", function () {
            let selectedIndexNumber = this.id;
            selectParticipant(selectedIndexNumber);
        });
    }
}

function selectParticipant(number) {
    let selectedParticipant = document.getElementById(number);

    selectedParticipant.style.backgroundColor = '#0000ff'
    selectedParticipant.style.color = '#fff'
}

document.addEventListener('click', selectParticipant)
push.addEventListener('click', createParticipantTable)


