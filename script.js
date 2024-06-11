var fullName=document.getElementById("fullName");
var email=document.getElementById("email");
var salary=document.getElementById("salary");
var msg=document.getElementById("msg");
var form=document.getElementById("form");
var tbody=document.getElementById("tbody");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("button clicked");
    formValidation();
    saveData();
});

function formValidation(){
    if(fullName.value === ""){
        msg.innerHTML=" (feild must not be empty)";
    }else{
        msg.innerHTML="";
        readData();
    }
    saveData();
}
let emp={};
function readData(){
    emp["fullName"]=fullName.value;
    emp["email"]=email.value;
    emp["salary"]=salary.value;
    creatData();
    reset();
    saveData();
}

function creatData(){
    tbody.innerHTML+=`<tr>
    <td>${emp.fullName}</td>
    <td>${emp.email}</td>
    <td>${emp.salary}</td>
    <td><button onclick="edit(this)">edit</button><button onclick="Delete(this)">Delete</button></td>
    </tr>`;
    saveData();
}

function reset(){
    fullName.value="";
    salary.value="";
    email.value="";
    saveData();
}

function Delete(e){
    e.parentElement.parentElement.remove();
    saveData();
}

function edit(e){
    selectRow=e.parentElement.parentElement;
    fullName.value=selectRow.children[0].innerHTML;
    email.value=selectRow.children[1].innerHTML;
    salary.value=selectRow.children[2].innerHTML;
    Delete(e);
    saveData();
}

function saveData(){
    localStorage.setItem("tdata",tbody.innerHTML);
}
function showData(){
    tbody.innerHTML=localStorage.getItem("tdata");
}
showData();