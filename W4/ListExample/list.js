const newListItem = document.getElementById('new-item');
const newListItemButton = document.getElementById('L');
const list = document.getElementById('list');
const clear = document.getElementById('clear');
const count = document.getElementById('count');
newListItemButton.addEventListener('click', function(){
    listItemText = newListItem.value;
    if (listItemText.length < 1) { //I'm supposed to ingnore empty input.
        return;
    }
    if (listItemText.length > 50) {//Validating that it is less than 50 characters.
        alert('Please input only items between 1 and 50 characters!');
        return;
    }
    if (list.children.length < 10 ) {//Checks that the list has less than 10 items.
        const listItem = document.createElement('li');
        listItem.textContent = newListItem.value;
        list.append(listItem); //Adds the item
        count.textContent = list.children.length; //updates the count.

    }
})
clear.addEventListener('click', function() { //Clears the list.
    list.replaceChildren();
    count.textContent = '';
})