class CalcController {
  constructor() {
    this._locale = "pt-BR";
    this._displayCalcEl = document.querySelector("#display");
    this._timeEl = document.querySelector("#time");
    this._dateEl = document.querySelector("#date");

    this.initialize();
    this.initButtonsEvents();
  }

  get displayCalc() {
    return this._displayCalcEl.innerHTML;
  }

  set displayCalc(value) {
    this._displayCalcEl.innerHTML = value;
  }

  get timeEl() {
    return this._timeEl.innerHTML;
  }

  set timeEl(value) {
    this._timeEl.innerHTML = value;
  }

  get dateEl() {
    return this._dateEl.innerHTML;
  }

  set dateEl(value) {
    this._dateEl.innerHTML = value;
  }

  initialize() {

    this.setDisplayDateTime();

    setInterval(() => {
      this.setDisplayDateTime();
    }, 1000);

  }

  initButtonsEvents() {

    const buttons = document.querySelectorAll("#buttons > g, #parts > g");

    buttons.forEach(btn => {
      btn.addEventListener('click', e => {
        console.log(btn.className.baseVal.replace('btn-', ""));
      });
    });

  }

  setDisplayDateTime() {

    this.dateEl = new Date().toLocaleDateString(this._locale, {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
    this.timeEl = new Date().toLocaleTimeString(this._locale);

  }

}
