class CalcController {
  constructor() {
    this._operation = [];
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

  addEventListenerAll(element, events, fn) {
    events.split(" ").forEach((event) => {
      element.addEventListener(event, fn, false);
    });
  }

  clearAll() {

    this._operation = [];

  }

  clearEntry() {

    this._operation.pop();

  }

  setError() {

    this.displayCalc = "Error"
  }

  addOperation(value) {

    this._operation.push(value);
    console.log(this._operation);

  }

  execBtn(value) {
    switch (value) {
      case "ac":
        this.clearAll();
        break;
      case "ce":
        this.clearEntry();
        break;
      case "soma":
        this.addOperation("+");
        break;
      case "subtracao":
        this.addOperation("-");
        break;
      case "multiplicacao":
        this.addOperation("*");
        break;
      case "divisao":
        this.addOperation("/");
        break;
      case "porcento":
        this.addOperation("%");
        break;
      case "igual":
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.addOperation(value);
        break;
      default:
        this.setError();
    }
  }

  initButtonsEvents() {
    const buttons = document.querySelectorAll("#buttons > g, #parts > g");

    buttons.forEach((btn) => {
      this.addEventListenerAll(btn, "click drag", (e) => {
        let text = btn.className.baseVal.replace("btn-", "");
        console.log(text);
        this.execBtn(text);
      });
      this.addEventListenerAll(btn, "mouseover mouseup mousedown", (e) => {
        btn.style.cursor = "pointer";
      });
    });
  }

  setDisplayDateTime() {
    this.dateEl = new Date().toLocaleDateString(this._locale, {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    this.timeEl = new Date().toLocaleTimeString(this._locale);
  }
}
