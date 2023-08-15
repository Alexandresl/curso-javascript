let inputName = document.querySelector("#exampleInputName");

Array.from(document.querySelectorAll('[name="gender"]')).forEach(g => {
	if (g.checked) {
        let inputGender = g;
    }
});

let inputBirth = document.querySelector("#InputBirth");
let inputCountry = document.querySelector("#InputCountry");
let inputEmail = document.querySelector("#InputEmail");
let inputPassword = document.querySelector("#InputPassword");
let inputPhoto = document.querySelector("#InputPhoto");
let inputAdmin = document.querySelector("#inputAdmin").checked;
let inputBtn = document.querySelector("#inputBtn");