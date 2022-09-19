const groceryItem=document.querySelector('#grocery-item-form');
const groceryItemName=document.querySelector("#grocery-item-name")
const groceryItemDescription=document.querySelector("#grocery-item-description")
const addItemButton=document.querySelector("#add-item-btn");
const groceryList=document.querySelector(".-item-list");
const clearListButton=document.querySelector('#clear-list-btn');
const filterItemsInput=document.querySelector('#filter')
const cancelButtoon=document.querySelector("#cancel-btn")
const groceryModeTitle=document.querySelector('#grocery-mode-title')
let itemIdCounter=0;
//load all event listeners
loadEventListeners();
function loadEventListeners()
{
    //add Item Eventlistener
    groceryItemForm.addEventlistener('submit',addItemToList)
}
function addItemToList(e)
{
    //retrieve values for name and description
    let itemName=groceryItemName.ariaValueMax;
    let itemDescription=groceryItemDescription.value;
    //check for blank inputs
    if(itemName===""||itemDescription==="")
    {
        alert('fill all the information')
        e.preventDefault();
        return;
    }
    createItem(itemName,itemDescription);
    groceryItem.value="";
    groceryItemDescription.value="";
    itemIdCounter++;
    e.preventDefault();
}
function createItem(itemName,itemDescription)
{
    const li=document.createElement('li');
    li.className='collection-item';
    li.style='display:flex;align-items:center;justify-content:space-between'
    li.id=`item-${itemIdCounter}`;
    li.innerHTML=`
    <div class=item-info>
    <h5 class="item-name">${itemName}</h5>
    <span class="item-description">${itemDescription}</span>
    </div>
    `;

    //create the remove button and its properties
    const removeButton=document.createElement('a');
    removeButton.innerHTML='<i class="fa fa-remove"></i>'
    removeButton.style='cursor:pointer';
    removeButton.classList='delete-item secondary-content'

    //create the edit button and its properties
    const editButton=document.createElement('a');
    editButton.innerHTML='<i class="fa fa-edit"></i>'
    editButton.style='cursor:pointer';
    editButton.classList="edit-item secondary-content";
    //add an event Listener to the button
    removeButton.addEventlistener('click',removeItemFromList);
    editButton.addEventListener('click',editItemFromList);

    //create a container for the buttons
    const buttonContainer=document.createElement('div');
    buttonContainer.classList='button-container';

    //append button to container
    buttonContainer.appendChild(removeButton);
    buttonContainer.appendChild(editButton);

    //append button container to item
    li.appendChild(buttonContainer);

    //add item to list
    groceryList.appendChild(li);
}
//Remove item from list

function removeItemFromList(e)
{
  if(e.target.parentElement.classList.contains('delete-item'))
  {
    if(confirm('are u sure'))
    {
        let groceryItem= e.target.parentElement.parentElement.parentElement;
        groceryItem.remove();

    }
    e.preventDefault();

  }
}

//edit from the list
function editItemFromList(e)
{
    let groceryItem=null;
    if(e.target.parentElement.classList.contains('edit-item'))
    {
        groceryItem=e.target.parentElement.parentElement.parentElement
        //Toggle edit mode
        groceryItemForm.setAttribute('mode','edit');
        onModeToggle(groceryItem);
    }
}
function onModeToggle(groceryItem=null)
{
    const mode =groceryItemForm.getAttribute('mode');
    //change the title
    groceryModeTitle.innerHTML=mode==='edit'?'Edit Grocery Item':'Add Grocery Item'; 

    //hide add mode Buttons
    addItemButton.style.visibility=mode=='edit'?'hidden':'visible';
    addItemButton.style.display=mode=='edit'?'hidden':'visible';
    mode==='edit'?groceryItemForm.setAttribute('currentItemId',groceryItem.id):groceryItemForm.removeAttribute('currentItemId');
    

    //show edit mode buttons
    cancelButtoon.style.visibility=mode=='edit'?'visible':'hidden';
    editButton.style.visibility=mode=='edit'?'visible':'hidden';

    //populate inputs with item info\clear inputs
    if(mode==='edit')
    {
        groceryItemName.value=groceryItem.querySelector('.item-name').innerHTML
        groceryItemDescription.value=groceryItem.querySelector('.item-description').innerHTML
    }
    else{
        groceryItemName.value=groceryItem.querySelector('.item-name').innerHTML;
        groceryItemDescription.value=groceryItem.querySelector('item-description').innerHTML;

    }

}





