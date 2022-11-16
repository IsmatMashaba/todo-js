/*to make the logic smaller we will write the append items in a function and call the function inside the addEventListener*/

/*get all the title input and put them in an array to check if the title input is unique*/
let titleArray=[];

/*delete the task by clicking the delete button*/
function deleteTodoItem(todoTitle) {
let todoItem=document.getElementById(todoTitle);
todoItem.remove();
}


/*Function to append todoList*/

function appendTodoItem(status,title,date) {
    /*display the to do items*/
    let todoList=document.getElementById('todoList');

    /*create element*/
    let todoWrapper=document.createElement('div');
    /*add the id for todo item*/
    todoWrapper.id=title.value;

    /*create to do item and pass the values of user input*/
    /*append items into the element and append the element into the todoList div*/
    let todoItem=`<div style="display: flex">
                    <div class=${status.value}></div>
                    <p>Name:${title.value} Date:${date.value}</p>
                    <button style="margin-left: 16px; height: 28px; width: 53px; margin-top: 10px" class="deleteBtn" onclick="deleteTodoItem('${title.value}')">Delete</button>
                   </div>`;
    todoWrapper.innerHTML=todoItem;
    todoList.appendChild(todoWrapper);




    titleArray.push(title.value)

    /*styling the todoWrapper and items*/

    todoWrapper.style.border='1px solid black';
    let statusValue=status.value;
    if (statusValue==='done') {
        todoWrapper.style.backgroundColor='green'
    }
    if (statusValue==='not-started') {
        todoWrapper.style.backgroundColor='#c92626'
    }
    if (statusValue==='in-progress') {
        todoWrapper.style.backgroundColor='orange'
    }







}

/*create a function to reset the form after the user inserts input*/

function resetForm(status,title,date) {
    status.value='';
    title.value='';
    date.value='';
}

/*create a function to validate alert*/

function validateForm(title,date) {
    if (!title.value) {
        alert("Please enter a title")
        return false;
    }if (!date.value) {
        alert("Please enter a date")
        return false;
    }
    /*check the title is unique*/

    /*here if I use titleArray.includes the logic does not work like using titleArray.some, why?*/
    if (titleArray.some((item)=>item===title.value)) {
        alert('Title should be unique')
        return false;
    }
    /*else*/
    return true;
}




/*get the values of the title input and date through submit button*/

const submitBtn= document.getElementById('submit-btn');
submitBtn.addEventListener('click',(event)=>{

    /*to prevent the form to refresh*/
    event.preventDefault();



    /*get the user input*/
    let status=document.getElementById("status");
    let title=document.getElementById("title");
    let date=document.getElementById("date");

    /*call the validation function*/
    let isValid=validateForm(title,date);
    if (!isValid) return;

    /*call the Function to append todoList*/

     appendTodoItem(status,title,date);

    /*call the resetForm function to reset the form after the user puts the input*/

     resetForm(status,title,date);


});
