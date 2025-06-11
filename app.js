// create my initial variables so that I no longer need to reference the html sheet
const input = document.getElementById("itemInput");
const button = document.getElementById("addItem");
const list = document.getElementById("itemList"); 

// create an event listener to detect a button push
button.addEventListener("click", () => {
    const value = input.value; //get our value from the variable we initialized
    const li = document.createElement("li"); // create a list item on the page
    li.textContent = value; // set the text content to our value we initialized
    list.appendChild(li); // append the list with our new value
    input.value = ""; //reset the value to an empty string

    const remove = document.createElement("button"); // create a const that will add a remove button
    remove.textContent = "Remove"

    list.appendChild(remove); // add the remove button below the li

    // event listened for the remove button
    remove.addEventListener("click", () => {
        list.removeChild(li); // remove the items on the screen
        list.removeChild(remove);
        list.removeChild(edit);
    });

    const edit = document.createElement("button"); // initialize an variable that creates the edit button
    edit.textContent = "Edit";

    const inputField = document.createElement("input"); // initialize an element that creates an input field
    inputField.placeholder = input.value;

    const save = document.createElement("button"); // initialize the save button 
    save.textContent = "save";

    list.appendChild(edit); // add the edit button below the li

    // add an event listener that detects the edit button
    edit.addEventListener( "click", () => {
        list.removeChild(li); // remove the items on the screen
        list.removeChild(remove);
        list.removeChild(edit);

        list.appendChild(inputField); // replace them with the input field and the save button
        list.appendChild(save);

        // add a save event listener
        save.addEventListener("click", () => {
            const editInput = inputField.value; // set up a variable to store the new input field date
            li.textContent = editInput; // update the text content we will be pushing
            list.removeChild(save); // remove the input field and save button
            list.removeChild(inputField);
            list.appendChild(li); // replace them with our edited li and our remove and edit buttons
            list.appendChild(remove);
            list.appendChild(edit);
        })

    })
});