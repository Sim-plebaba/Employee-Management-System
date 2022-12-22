var selectedRow = null;
function onFormSubmit(e){
    if(validate()){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }
    resetForm();
    }
}
// Read operation using this function
function readFormData(){
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["Role"] = document.getElementById("Role").value;
    formData["Mobile"] = document.getElementById("Mobile").value;
    formData["Manager"] = document.getElementById("Manager").value;
    formData["Office"] = document.getElementById("Office").value;
    formData["JoiningDate"] = document.getElementById("JoiningDate").value;
    return formData;
}

// Create operation
function insertNewRecord(data){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.fullName;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.Role;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.Mobile;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.Manager;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.Office;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = data.JoiningDate;


    var cell7 = newRow.insertCell(6);
        cell7.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
                        <a href="#" onClick='onDelete(this)'>Delete</a>`;
}

// To Reset the data of fill input
function resetForm(){
    document.getElementById('fullName').value = '';
    document.getElementById('Role').value = '';
    document.getElementById('Mobile').value = '';
    document.getElementById('Manager').value = '';
    document.getElementById('Office').value = '';
    document.getElementById('JoiningDate').value = '';
    selectedRow = null;
}

// For Edit operation
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fullName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('Role').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Mobile').value = selectedRow.cells[2].innerHTML;
    document.getElementById('Manager').value = selectedRow.cells[3].innerHTML;
    document.getElementById('Office').value = selectedRow.cells[4].innerHTML;
    document.getElementById('JoiningDate').value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.Role;
    selectedRow.cells[2].innerHTML = formData.Mobile;
    selectedRow.cells[3].innerHTML = formData.Manager;
    selectedRow.cells[4].innerHTML = formData.Office;
    selectedRow.cells[5].innerHTML = formData.JoiningDate;
}
function onDelete(td){
    if(confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('employeeList').deleteRow(row.rowIndex);
        resetForm();
    }    
}

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}