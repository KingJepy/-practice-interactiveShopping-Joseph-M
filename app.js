const input = document.getElementById("itemInput");
const button = document.getElementById("addItem");
const list = document.getElementById("itemList");

button.addEventListener("click", () => {

    const value = input.value;
    const li = document.createElement("li");
    li.textContent = value;
    list.appendChild(li);
    input.value = "";

    const remove = document.createElement("button");
    remove.textContent = "Remove"

    list.appendChild(remove);

    remove.addEventListener("click", () => {
        list.removeChild(li);
        list.removeChild(remove);
        list.removeChild(edit);
    });

    const edit = document.createElement("button");
    edit.textContent = "Edit";

    const inputField = document.createElement("input")
    inputField.placeholder = input.value;

    const save = document.createElement("button");
    save.textContent = "save";

    list.appendChild(edit);

    edit.addEventListener( "click", () => {
        list.removeChild(li);
        list.removeChild(remove);
        list.removeChild(edit);

        list.appendChild(inputField);

        list.appendChild(save);

        save.addEventListener("click", () => {
            const editInput = inputField.value;    
            li.textContent = editInput;
            list.removeChild(save);
            list.removeChild(inputField);
            list.appendChild(li);
            list.appendChild(remove);
            list.appendChild(edit);
        })

    })
});