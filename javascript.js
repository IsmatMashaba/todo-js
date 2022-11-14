/*let newToDoBtn=document.getElementById("newToDoBtn");
newToDoBtn.addEventListene*/
/*

let taskName=document.getElementById("taskName");
let taskPara=document.createElement("p");
taskPara.innerText=taskName;
let displayResult=document.getElementById('displayResult');
displayResult.append(taskPara);

*/

const newToDoBtn= document.getElementById('newToDoBtn');
newToDoBtn.addEventListener('click',(event)=>{
    let taskName=document.getElementById("taskName").value;
    /*console.log(taskName)*/
    let taskPara=document.createElement("p");
    taskPara.innerText=taskName;


    let date=document.getElementById("date").value;
    /*console.log(date)*/
    let datePara=document.createElement("p");
    datePara.innerText=date;

    let status=document.getElementById("status").value;
    /*console.log(date)*/
    let statusPara=document.createElement("p");
    statusPara.innerText=status;

    let deleteBtn=document.createElement('button');
    deleteBtn.innerHTML='Delete';


    /*here status is not working same way like taskName and date*/

    if (taskName && date && status ) {
        let displayResult=document.getElementById('displayResult');
        displayResult.append(taskPara)
        displayResult.append(datePara);
        displayResult.append(statusPara);
        displayResult.append(deleteBtn);


        deleteBtn.addEventListener('click',()=>{
            displayResult.remove()
        })
        event.preventDefault();
    }

});
