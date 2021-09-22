const container = document.querySelector(".container")
const taskInput = document.querySelector("#taskInput")
const titleInput = document.querySelector("#title")
const dateInput = document.getElementById("dateInput")
const createButton = document.querySelector("#create")
const creator = document.querySelector(".inputCreator")
const list = document.getElementById("list")
const listContent = document.querySelector(".listContent")

let contentArray = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

contentArray.forEach(createItem);


creator.addEventListener("click", () => {
    titleInput.style = "display:block;"
    createButton.style = "display:block;"
    dateInput.style = "display:block;"
})

window.addEventListener("click", dismiss)
creator.addEventListener("click", (event) => { event.stopPropagation(); });
createButton.addEventListener("click", (event) => { event.stopPropagation(); });
createButton.addEventListener("click", addTask)

function dismiss() {
    titleInput.setAttribute("style", "display:none;")
    createButton.setAttribute("style", "display:none;")
    dateInput.setAttribute("style", "display:none;")
}

function createItem(text) {

    let div = document.createElement("div")
    div.id = "list-item"

    let divCheckBox = document.createElement("div")
    divCheckBox.id = "divCheckBox"
    
    let divContent = document.createElement("div")
    divContent.id = "divContent"

    let divH2 = document.createElement("div")
    divH2.id = "divH2"

    let divP = document.createElement("div")
    divP.id = "divP"

    let divDate = document.createElement("div")
    divDate.id = "divDate"

    let checkBox = document.createElement("input")
    checkBox.id = "input-checkbox"
    checkBox.setAttribute("type", "checkbox")
    divCheckBox.appendChild(checkBox)

    let h2 = document.createElement("h2")
    h2.innerText = text.my_title
    divH2.appendChild(h2)
    divContent.appendChild(divH2)

    let p = document.createElement("label")
    p.setAttribute("for", "input-checkbox")
    p.id = "pTask"
    p.innerText = text.my_task
    divP.appendChild(p)
    divContent.appendChild(divP)

    let date = document.createElement("p")
    date.id = "date"
    date.innerText = text.my_date
    divDate.appendChild(date)
    divContent.appendChild(divDate)

    div.appendChild(divCheckBox)
    div.appendChild(divContent)

    listContent.appendChild(div)

    dismiss()
}

function addTask() {
    const task_info = {
        id: `card_${Math.ceil(Math.random() * 100000000)}`,
        my_title: titleInput.value,
        my_task: taskInput.value,
        my_date: dateInput.value,
    };

    contentArray.push(task_info)
    localStorage.setItem("tasks", JSON.stringify(contentArray));

    createItem(contentArray[contentArray.length - 1])

    titleInput.value = ""
    taskInput.value = ""
    dateInput.value = ""

}