let menu = document.getElementById("menu")
let list = document.getElementById("navshow")

const open = () => {
    if(list.style.height == "40vh"){
        list.style.height = "0"
        
    }else{
        list.style.height = "40vh"
    }
}

menu.addEventListener("click",open)