function updateTodoList(){
    let todolistHTML='';
    for(let i=0;i<todolist.length;i++){
        const todoObject=todolist[i];
        const {name,dueDate}=todoObject;
        todolistHTML +=`
        <div>${name}</div>
        <div>${dueDate}</div>
        <button
        onclick="
        todolist.splice(${i},1);
        updateTodoList();
        "
       class="del" >delete</button>
        `
    }
    inputElement=document.querySelector('.todolist').innerHTML=todolistHTML;
}
const todolist=[{name:'washing dishes',
    dueDate:'11/09/2024'
},{
    name:'making dinner',
    dueDate:'12/09/2024'
}];

updateTodoList();
function addTodo(){
    const inputElement=document.querySelector('.todo');
    const name=inputElement.value;
    const inputdateElement=document.querySelector('.date');
    const dueDate=inputdateElement.value;
    todolist.push({name,dueDate});
    inputElement.value='';
    updateTodoList();
}