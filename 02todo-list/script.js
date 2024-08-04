const inputBox = document.getElementById('inputBox');
const listContainer = document.getElementById('listContainer');     // unordered list.

function addTask(){
    if(inputBox.value === ''){
        alert('Please enter a task!');
    }
    else{
        let li = document.createElement('li');
        let span = document.createElement('span');

        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = '';

        span.innerHTML = '&#10060;'
        li.appendChild(span);
    }
    saveData();
}

listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();