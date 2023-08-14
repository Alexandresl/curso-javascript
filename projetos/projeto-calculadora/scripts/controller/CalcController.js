class CalcController {
  constructor() {
    this._operation = [];
    this._locale = "pt-BR";
    this._currentDate;
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#date");
    this._timeEl = document.querySelector("#time");
    this.initialize();
    this.initButtonsEvents();
  }

  get locale() {
    return this._locale;
  }

  get displayCalc() {
    return this._displayCalcEl.innerHTML;
  }

  displayCalc(value) {
    {
      this._operation[this._operation.length - 1] = value;
    }
    this._displayCalcEl.innerHTML = value;
  }

  get currentDate() {
    return new Date();
  }

  get displayTime() {
    return this._timeEl.innerHTML;
  }

  displayTime(value) {
    {
      this._operation[this._operation.length - 1] = value;
    }
    this._timeEl.innerHTML = value;
  }

  get displayDate() {
    return this._dateEl.innerHTML;
  }

  displayDate(value) {
    {
      this._operation[this._operation.length - 1] = value;
    }
    this._dateEl.innerHTML = value;
  }

  initialize() {
    this.displayCalc = "0";

    this.SetDisplayDateTime();

    setInterval(() => {
      this.SetDisplayDateTime();
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
    this.displayCalc = "Error";
  }

  getLastOperation() {
    return this._operation[this._operation.length - 1];
  }

  isOperator(value) {
    return ["+", "-", "*", "/", "%"].indexOf(value) > -1;
  }

  setLastOperation(value) {
    this._operation[this._operation.length - 1] = value;
  }

  pushOperation(value) {

    this._operation.push(value);
    if (this._operation.length > 3) {
      this.calc();
    }
    
  }

  calc() {
    let last = this._operation.pop();
    let result = eval(this._operation.join(""));
    this._operation = [result, last];

  }

  setLastNumberToDisplay() {
    
  }

  addOperation(value) {
    if (isNaN(this.getLastOperation())) {
      if (this.isOperator(value)) {
        this.setLastOperation(value);
      } else if (isNaN(value)) {
        console.log("Outra Coisa: ", value);
      } else {
        this.pushOperation(value);
        this.setLastNumberToDisplay();
      }
    } else {
      if (this.isOperator(value)) {
        this.pushOperation(value);
      } else {
        let newValue = this.getLastOperation().toString() + value.toString();
        this.setLastOperation(parseInt(newValue));
        this.setLastNumberToDisplay();
      }
    }
  }

  execBtn(value) {
    switch (value) {
      case "ac":
        this.clearAll();
        break;
      case "ce":
        this.clearEntry();
        break;
      case "sum":
        this.addOperation("+");
        break;
      case "subtraction":
        this.addOperation("-");
        break;
      case "multiplication":
        this.addOperation("*");
        break;
      case "division":
        this.addOperation("/");
        break;
      case "percent":
        this.addOperation("%");
        break;
      case "equal":
        break;
      case "dot":
        this.addOperation(".");
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        this.addOperation(parseInt(value));
        break;
      default:
        this.setError();
        break;
    }
  }

  initButtonsEvents() {
    const buttons = document.querySelectorAll("#buttons > g, #parts > g");
    buttons.forEach((btn) => {
      this.addEventListenerAll(btn, "click drag", (e) => {
        let textBtn = btn.className.baseVal.replace("btn-", "");
        this.execBtn(textBtn);
      });

      this.addEventListenerAll(btn, "mouseover mouseup mousedown", (e) => {
        btn.style.cursor = "pointer";
      });
    });
  }

  SetDisplayDateTime() {
    this.displayDate = this.currentDate.toLocaleDateString(this.locale, {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    this.displayTime = this.currentDate.toLocaleTimeString(this.locale);
  }
}
