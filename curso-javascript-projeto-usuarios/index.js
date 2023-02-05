var fields = document.querySelectorAll("#form-user-create [name]");

fields.forEach(field => {

	if (field.name === "gender") {

		if (field.checked) {
			console.log(field);
		}

	} else {

		console.log("Não");

	}

});