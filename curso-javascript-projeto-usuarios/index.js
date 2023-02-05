var fields = document.querySelectorAll("#form-user-create [name]");

fields.forEach((field, index) => {

	console.log(field.id, field.name, field.value, field.checked, index);

});