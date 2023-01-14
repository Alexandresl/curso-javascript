class CalcController {

  constructor() {
    this._displayCalc = "0";
		this._currentDate;

    this.initialize();

  }

  get displayCalc() {
    return this._displayCalc;
  }

  set displayCalc(value) {
    this._displayCalc = value;
  }

  get currentDate() {
    return this.currentDate;
  }

  set currentDate(value) {
    this._currentDate = value;
  }

  initialize() {

    const displayCalcEl = document.querySelector("#display");
    const timeEl = document.querySelector("#time");
    const dateEl = document.querySelector("#date");

    displayCalcEl.innerHTML = "0";
    timeEl.innerHTML = "21:18";
    dateEl.innerHTML = "13/01/2023";

  }

}
