
let btnSubmit = document.getElementById('btnSubmit');
let btnReset = document.getElementById('btnReset');

const listDisplay = document.getElementById('displayList');

btnSubmit.addEventListener('click', onSubmit);

function onSubmit() {
    
    let txtName1 = document.getElementById('txtName').value;
    let txtEmail1 = document.getElementById('txtEmail').value;
    
    let myObj = {
        'name' : txtName1,
        'email' : txtEmail1
    }

    //  Convert the textbox values to strings
    let objSerialized = JSON.stringify(myObj);
    localStorage.setItem('myObj' , objSerialized);

    // Delete single list item
    const deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.id = 'delBtn';
    deleteBtn.value = 'Delete';
    deleteBtn.onclick = () => {
        localStorage.removeItem(myObj.name)
        localStorage.removeItem(myObj.email)
        listDisplay.removeChild(listItem)
    }

    //  Edit button reset
    const editBtn = document.createElement('input');
    editBtn.type = 'button';
    editBtn.id = 'editBtn';
    editBtn.value = 'Edit';
    editBtn.onclick = () => {
        localStorage.removeItem(myObj.descr)
        listExpence.removeChild(listItem);
        document.getElementById('txt-expenceAmt').value = myObj.exAmt;
        document.getElementById('drp-decription').value = myObj.descr;
        document.getElementById('drp-category').value = myObj.cat;
    }

    
    // Create list Item
    const listDisplay = document.getElementById("displayList");
    const listItem = document.createElement("li");
    listItem.textContent = myObj.name+" : "+myObj.email

    displayList.appendChild(listItem)
    listItem.appendChild(deleteBtn);
    listItem.appendChild(editBtn);
}
       
// Reset all textboxes
btnReset.addEventListener('click', (e)=>{
    txtName.value = "";
    txtEmail.value = "";
});
