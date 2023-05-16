
let btnSubmit = document.getElementById('btnSubmit');
let btnReset = document.getElementById('btnReset');

const listDisplay = document.getElementById('displayList');

btnSubmit.addEventListener('click', onSubmit);

function onSubmit() {
    
    let txtName1 = document.getElementById('txtName').value;
    let txtEmail1 = document.getElementById('txtEmail').value;
    let txtPhone1 = document.getElementById('txtPhone').value;
    
    let myObj = {
        'name' : txtName1,
        'email' : txtEmail1,
        'phone' : txtPhone1
    }

    //  Convert the textbox values to strings
    let objSerialized = JSON.stringify(myObj);
    localStorage.setItem(myObj.name , objSerialized);

    // Delete single list item
    const deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.id = 'delBtn';
    deleteBtn.value = 'Delete';
    deleteBtn.onclick = () => {
        localStorage.removeItem(myObj.name)
        localStorage.removeItem(myObj.email)
        localStorage.removeItem(myObj.phone)
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
        document.getElementById('txtName').value = myObj.exAmt;
        document.getElementById('txtEmail').value = myObj.descr;
        document.getElementById('txtPhone').value = myObj.cat;
    }

    
    // Create list Item
    const listDisplay = document.getElementById("displayList");
    const listItem = document.createElement("li");
    listItem.textContent = myObj.name+" : "+myObj.email+" : "+myObj.phone

    listDisplay.appendChild(listItem)

    txtName.value = "";
    txtEmail.value = "";
    txtPhone.value = "";

    listItem.appendChild(deleteBtn);
    listItem.appendChild(editBtn);

    txtPhone.value = "";
}


function saveToLocalStorage(event) {
  event.preventDefault();
  const name=event.target.username.value;
  const email=event.target.emailId.value;
  const phonenumber=event.target.phonenumber.value;

  const obj = {
    name,
    email,
    phonenumber
  }

  axios.post("https://crudcrud.com/api/0f1cd3a37ec345f6ba88ef8c4337075b/axios", )
  .then((respone) => {
    console.log(respone);
  })
  .catch((err)=> {
    console.log(err)
})
  localStorage.setItem(obj.email, JSON.stringify(obj))
  showNewUserOnScreen(obj)       
}


       
// Reset all textboxes
btnReset.addEventListener('click', (e)=>{
    txtName.value = "";
    txtEmail.value = "";
    txtPhone.value = "";
});
