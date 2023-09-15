// Att ta bort med splice funkar bra om listan är const oavsett browser

let text_ruta; 
let ul;

window.addEventListener('DOMContentLoaded', (event) => {
    text_ruta  = document.querySelector("#text_ruta");
    ul  = document.querySelector("#todo");
    console.log('DOM-trädet är klart och laddat in alla element');

    läs_in_todos();
    console.log("skapa_lägg_in text: "+text);
    console.log("skapa_lägg_in text: "+text);
});

 
console.log("start");

function läs_in_todos() {
    const todo_lista_son = window.localStorage.getItem("lista");
    let lista= JSON.parse(todo_lista_son);
    console.log("Loaded, todo_lista: "+lista);
    
    if(lista)
        fyll_ul(lista);
  }
//window.localStorage.setItem()


function fyll_ul(listan)
{
    console.log("fyll_ul, lista: "+listan);

    // in är för object
    // of är för arrrayer och listor
   
        for(let i =0; i< listan.length;i++)
        {
            skapa_lägg_in(listan[i]);
        }
}

   
function ny_todo()
{
    if(!text_ruta.value)
        return;
    console.log("ny_todo text_ruta.value: "+text_ruta.value);
    skapa_lägg_in(text_ruta.value);

//    console.log(todo_lista);
    text_ruta.value="";
    text_ruta.focus();
}

function skapa_lägg_in(text){
    console.log("skapa_lägg_in text: "+text);
    const item = document.createElement("li");

    const text_node =document.createTextNode(text);

    item.appendChild(text_node);
    ul.appendChild(item);
    // todo_lista.push(text_i_ruta);
   // const todo_lista_son= JSON.stringify(todo_lista);
    //window.localStorage.setItem("lista",todo_lista_son);
    save_to_local_storage();

    item.id="item"+document.querySelectorAll("li").length;

    // När användaren klickar så stryks itemet över
    item.addEventListener('click',  function(){
        console.log("klicked ev.target: ");
        this.classList.toggle('checked');
    } );

    // När användaren dubbeklickar så tas itemet bort
    item.addEventListener('dblclick', function(){
        console.log("dubbelklicked ev.target: ");
       this.remove();
       save_to_local_storage();

    } );

}


function save_to_local_storage(){
    const li_lista = document.querySelectorAll("li");
    const text_lista = [];
    for(let i =0; i<li_lista.length;i++){
        text_lista.push(li_lista[i].textContent);
        console.log("li_lista[i].value: "+li_lista[i].textContent)
    }
    const todo_lista_json= JSON.stringify(text_lista);
    window.localStorage.setItem("lista",todo_lista_json);

}

