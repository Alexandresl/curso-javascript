class CalcController {

	constructor () {

		this._locale = 'pt-BR'
		this._currentDate;
		this._displayCalcEl = document.querySelector("#display");
		this._dateEl = document.querySelector("#date");
		this._timeEl = document.querySelector("#time");
		this.initialize();

	}

	get locale () {
		return this._locale;
	}

	get displayCalc () {
		return this._displayCalcEl.innerHTML;
	}

	set displayCalc (value) {
		this._displayCalcEl.innerHTML = value;
	}

	get currentDate () {
		return new Date();
	}

	get displayTime () {
		return this._timeEl.innerHTML;
	}

	set displayTime (value) {
		this._timeEl.innerHTML = value;
	}

	get displayDate () {
		return this._dateEl.innerHTML;
	}

	set displayDate (value) {
		this._dateEl.innerHTML = value;
	}

	initialize () {

		this.displayCalc = "0";

		this.SetDisplayDateTime();
		
		setInterval(() => {

			this.SetDisplayDateTime();

		}, 1000);

	}

	initButtonsEvents () {

		const buttons = document.querySelectorAll("#buttons > g, #parts > g");

	}

	SetDisplayDateTime () {

		this.displayDate = this.currentDate.toLocaleDateString(this.locale, {
			day: "2-digit",
			month: "long",
			year: "numeric"
		});

		this.displayTime = this.currentDate.toLocaleTimeString(this.locale);

	}

}