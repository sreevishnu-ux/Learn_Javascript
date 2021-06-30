const addform = document.querySelector('.add');
const list = document.querySelector('.todos');
//const delform = document.querySelector('.')
 
const generateTemplate = todos => {

    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span> ${todos}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    list.innerHTML += html ;
};


addform.addEventListener('submit' , e =>{

    e.preventDefault();

    const todos = addform.add.value.trim();

    generateTemplate(todos);
});

//delete todos
list.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }


});