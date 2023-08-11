class CalcController {

	constructor () {

		this._displayCalc = "0";
		this._currentDate;
		this.initialize();

	}

	get displayCalc () {
		return this._displayCalc;
	}

	set displayCalc (value) {
		this._displayCalc = value;
	}

	get dataAtual () {
		return this._currentDate;
	}
	
	set dataAtual (value) {
		this._currentDate = value;
	}

	initialize () {

		const displayEl = document.querySelector("#display");
		const dateEl = document.querySelector("#date");
		const hourEl = document.querySelector("#hour");

		displayEl.innerHTML = 100;
		dateEl.innerHTML = "11/08/2023";
		hourEl.innerHTML = "12:25";

	}

}