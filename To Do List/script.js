var addToButton = document.getElementById('addToDo');
var ToDoContainer = document.getElementById('ToDoContainer');
var inputField = document.getElementById('inputField');


addToButton.onclick = function(){
    //verifie si l'input n'est pas vide
    if(inputField.value != ""){
        //si l'input n'est pas vide creer un paragraphe
        var paragraphe = document.createElement('p');
    }
    //valorisé ce paragraphe avec le contenu de l'input 
    paragraphe.innerText = inputField.value;

    //stylisé le paragraphe 
    paragraphe.classList.add('paragraphe_style');

    //insérer le paragraphe dans l'element ToDoContainer
    ToDoContainer.appendChild(paragraphe);

    //vidé l'input quand le paragraphe est ajouter
    inputField.value = "";

    //barré le paragraphe quand on clique dessus
    paragraphe.addEventListener('click',function(){
        paragraphe.classList.add('paragraphe_click');
    })

    //supprimer la tache quand on click sur la tache
    paragraphe.addEventListener('dblclick',function(){
        ToDoContainer.removeChild(paragraphe);
    })

}