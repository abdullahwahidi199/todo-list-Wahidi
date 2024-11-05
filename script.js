const input_box=document.getElementById("inp");
const list=document.getElementById("list_container")

function addTask(){
    if (input_box.value===''){
        window.alert("task connot be empty")
    }
    else{
        let li=document.createElement("li")
        li.textContent=input_box.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.textContent="\u00d7";
        li.appendChild(span)
        let hr=document.createElement("hr");
        hr.style.color="black";
        li.appendChild(hr)
        saveData()

        
    }
    input_box.value='';
}

list.addEventListener("click", (event)=>{
    if (event.target.tagName==="LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove();
        saveData();
    };
}
)

function saveData(){
    localStorage.setItem("data",list.innerHTML)
}
function showData(){
    list.innerHTML=localStorage.getItem("data");
}

showData();