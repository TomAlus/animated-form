class App {
  constructor() {
    this.$slidepage = document.querySelector(".slidepage");
    this.$nextBtn = document.querySelectorAll(".next");
    this.$prevBtn = document.querySelectorAll(".prev");
    this.$submitButton = document.querySelector(".submit");
    this.$buttons = [...document.getElementsByTagName("button")];
    this.$step = document.querySelectorAll(".step");
    this.$progressText = document.querySelectorAll(".step p");
    this.$progressCheck = document.querySelectorAll(".step .check");
    this.$progressBullet = document.querySelectorAll(".step .bullet");
    this.maxStep = this.$step.length;
    this.currentStep = 0;

    this.addEventListeners();
  }

  addEventListeners() {
    this.$nextBtn.forEach((btn) =>
      btn.addEventListener("click", this.handleNextBtnClick)
    );

    this.$prevBtn.forEach((btn) =>
      btn.addEventListener("click", this.handlePrevBtnClick)
    );

    this.$submitButton.addEventListener("click", this.handleSubmitForm);
  }

  handleNextBtnClick = (e) => {
    e.preventDefault();
    let marginLeft = "";
    if (this.$slidepage.style.marginLeft.slice(0, -1) === "") {
      marginLeft = 0;
    } else {
      marginLeft = parseInt(this.$slidepage.style.marginLeft.slice(0, -1));
    }
    this.$slidepage.style.marginLeft = marginLeft - 25 + "%";

    this.$step[this.currentStep].classList.add("active");
    this.currentStep++;
  };

  handlePrevBtnClick = (e) => {
    e.preventDefault();
    let marginLeft = parseInt(this.$slidepage.style.marginLeft.slice(0, -1));
    this.$slidepage.style.marginLeft = marginLeft + 25 + "%";

    this.$step[this.currentStep - 1].classList.remove("active");
    this.currentStep--;
    this.$step[this.maxStep - 1].classList.remove("active");
  };

  handleSubmitForm = (e) => {
    e.preventDefault();

    this.$step[this.currentStep].classList.add("active");
    setTimeout(() => alert("Form Submited"), 1000);
  };
}

new App();
