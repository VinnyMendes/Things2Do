const botao = document.getElementById("create")
botao.addEventListener("click",()=>{
    generate()
    botao.style.display = "none"
})

function generate(){
    fetch("https://jsonplaceholder.typicode.com/todos/").then(response=>{
        return response.json();
    }).then(data=>{
        data.forEach(e=>{
            createItem(e)
            console.log(e);
        });
    }).catch(error=>{
        console.error(error);
    });
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


    let h2 = document.createElement("h2")
    h2.innerText = text.id
    divH2.appendChild(h2)
    divContent.appendChild(divH2)

    let p = document.createElement("p")
    p.className = "pTask"
    p.innerText = text.title
    divP.appendChild(p)
    divContent.appendChild(divP)

    let date = document.createElement("p")
    date.className = "date"
    date.innerText = "Deadline: 28/09/2021" 
    divDate.appendChild(date)
    divContent.appendChild(divDate)

    if(text.completed){
        checkBox.setAttribute("checked","true")
        checkBox.setAttribute("disabled","true")
        p.classList.toggle("EDNALDO")
        h2.classList.toggle("EDNALDO")
        date.classList.toggle("EDNALDO")
    }else{
        p.style.fontWeight = "bold"
    }
    
    div.appendChild(divCheckBox)
    div.appendChild(divContent)

    document.getElementById("tasks").appendChild(div)

}