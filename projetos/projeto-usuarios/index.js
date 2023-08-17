let inputName = document.querySelector("#exampleInputName");

let inputGender = document.querySelector('#form-user-create [name="gender"]:checked');

let inputBirth = document.querySelector("#InputBirth");
let inputCountry = document.querySelector("#InputCountry");
let inputEmail = document.querySelector("#InputEmail");
let inputPassword = document.querySelector("#InputPassword");
let inputPhoto = document.querySelector("#InputPhoto");
let inputAdmin = document.querySelector("#inputAdmin");
let inputBtn = document.querySelector("#inputBtn");

let fields = document.querySelectorAll('#form-user-create [name]');

fields.forEach((field, index) => {
	console.log(field.name, field.id, index, field.checked);
});