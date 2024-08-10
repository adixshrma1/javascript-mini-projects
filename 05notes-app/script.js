const addBtn = document.querySelector('.add-btn');
const notesContainer = document.querySelector('.notes-container');

function updateStorage(){
    localStorage.setItem('notes', notesContainer.innerHTML)
}
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();

addBtn.addEventListener('click', ()=>{
    let inputBox = document.createElement('p');     // p element.
    let deleteImg = document.createElement('img');
    deleteImg.src = './images/delete.png';

    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    notesContainer.appendChild(inputBox).appendChild(deleteImg);
})

notesContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updateStorage()
    }
    else if(e.target.tagName === "P"){
        let noteText = document.querySelectorAll('.input-box');
        noteText.forEach(key =>{
            key.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
        document.execCommand('insertLineBreak');
        e.preventDefault();
    }
})