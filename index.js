var input = document.getElementById('inputt');
var button = document.getElementById('butt');
var todolist2 = document.getElementById('todo');

var list = [];

button.addEventListener('click', function () {
    add();
    display();
    Delete();
    console.log(list);
});

function add() {
    var todolist = input.value;
    list.push({todolist: todolist});
}

function Delete() {
    input.value = null;
}

function display() {
    var box = '';
    for (var i = 0; i < list.length; i++) {
        box += `
            <tr>
                <td><h3 id="h3" class=""> ${i + 1}-</h3></td>
                <td><h3 class="pe-5 me-5">${list[i].todolist}</h3></td>
                <td><button type="button" class="bg-danger rounded-1 p-2  m-0 fw-bolder text-white border-0" onclick="removeItem(${i})">Delete</button></td>
                <td><button type="button" class="bg-success rounded-1 p-2 m-0 fw-bolder text-white border-0" onclick="speakItem(${i})">Listen</button></td>
            </tr>
        `;
    }
    todolist2.innerHTML = box;
}

function removeItem(index) {
    list.splice(index, 1);
    display();
}

function speakItem(index) {
    let utterance = new SpeechSynthesisUtterance(list[index].todolist);
    speechSynthesis.speak(utterance);
}

// Initial display
display();
