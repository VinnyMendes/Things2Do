const container = document.querySelector(".container")
const taskInput = document.querySelector("#taskInput")
const titleInput = document.querySelector("#title")
const dateInput = document.getElementById("dateInput")
const utc = new Date().toJSON().slice(0,10);
dateInput.setAttribute("min", utc)
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
    creator.style.borderColor = "rgb(255, 225, 170)"
}

function createItem(text) {

    let div = document.createElement("div")
    div.id = text.id
    div.className = "list-item"

    let divCheckBox = document.createElement("div")
    divCheckBox.className = "divCheckBox"

    let divContent = document.createElement("div")
    divContent.className = "divContent"

    let divH2 = document.createElement("div")
    divH2.className = "divH2"

    let divP = document.createElement("div")
    divP.className = "divP"

    let divDate = document.createElement("div")
    divDate.className = "divDate"

    let checkBox = document.createElement("input")
    checkBox.className = "input-checkbox"
    checkBox.setAttribute("type", "checkbox")
    divCheckBox.appendChild(checkBox)

    
    checkBox.addEventListener("change", ()=>{
        p.classList.toggle("EDNALDO")
        h2.classList.toggle("EDNALDO")
        date.classList.toggle("EDNALDO")
    })

    let img = document.createElement("img")
    img.className = "delete"
    img.setAttribute("src", "./assets/delIcon.png")
    img.setAttribute("alt", "delete icon")
    divCheckBox.appendChild(img)

    img.addEventListener("click", (event) => {
        event.preventDefault()
        let confirmation = confirm("Do you really want to delete this task?");
        if (!confirmation) {
            return;
        }
        const filtered = contentArray.filter((itemwhatever) => itemwhatever.id != text.id);
        document.getElementById(text.id).remove();
        localStorage.setItem("tasks", JSON.stringify(filtered));
    })

    let h2 = document.createElement("h2")
    h2.innerText = text.my_title
    divH2.appendChild(h2)
    divContent.appendChild(divH2)

    let p = document.createElement("p")
    p.className = "pTask"
    p.innerText = text.my_task
    divP.appendChild(p)
    divContent.appendChild(divP)

    let date = document.createElement("p")
    date.className = "date"
    date.innerText = "Deadline: " + text.my_date
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
    if (!task_info.my_title.trim() || !task_info.my_task.trim() || !task_info.my_date.trim()) {
        creator.style.borderColor = "red"
        return
    }
    creator.style.borderColor = "rgb(255, 225, 170)"
    contentArray.push(task_info)
    localStorage.setItem("tasks", JSON.stringify(contentArray));

    createItem(contentArray[contentArray.length - 1])

    titleInput.value = ""
    taskInput.value = ""
    dateInput.value = ""
}



