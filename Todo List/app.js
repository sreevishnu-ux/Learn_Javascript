const formadd=document.querySelector('.add');
const list=document.querySelector('.todos')
const search=document.querySelector('.search input');

const generatetemplate= todo =>{

    const html=`
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="fas fa-trash delete"></i>
    </li> `

    list.innerHTML +=html;
};


formadd.addEventListener('submit',e =>{
    e.preventDefault();
    const form=formadd.add.value.trim();

    if(form.length)
    {
        generatetemplate(form);
        formadd.reset();
    }
});


list.addEventListener('click' , e =>{

    console.log(e.target.classList);
    if(e.target.classList.contains('delete'));
    {
        e.target.parentElement.remove(); 
    }
        
});

const filtertodos=(term)=>{

    Array.from(list.children)
    .filter ((todo)=>  !todo.textContent.toLowerCase().includes(term))
    .forEach((todo)=>todo.classList.add('filtered'));

    Array.from(list.children)
    .filter ((todo)=>  todo.textContent.toLowerCase().includes(term))
    .forEach((todo)=>todo.classList.remove('filtered'));

};


search.addEventListener('keyup',()=>{
     
    const term=search.value.trim().toLowerCase();
    filtertodos(term);

});