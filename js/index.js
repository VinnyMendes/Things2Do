const button = document.querySelector("#button")
button.addEventListener("click",validate)
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const a = document.querySelector("a")
a.addEventListener("click",(event)=>{
    event.preventDefault()
    alert("Write anything in the password input!!")
})

function validate(){
    if(!email.value){
        email.setAttribute("style","border-color:red;")
        
        if(!password.value){
            password.setAttribute("style","border-color:red;")
            password.addEventListener("focus",()=>{
                password.setAttribute("style","border-color:transparent;")
            })    
        }
        email.addEventListener("focus",()=>{
            email.setAttribute("style","border-color:transparent;")
        })
    }else if(!password.value){
        password.setAttribute("style","border-color:red;")
        email.setAttribute("style","border-color:transparent;")
        password.addEventListener("focus",()=>{
            password.setAttribute("style","border-color:transparent;")
        })
    }else{
        location.href = './ToDoList.html'
    }
}

