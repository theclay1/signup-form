let form = document.querySelector(".form");
let nameReg = /^[a-z]{2,}$/;
let emailReg = /\w{2,}\@\w{2,}\.\w{2,}/;

form.addEventListener("click", function (e) {
  let target = e.target;
  if (target.tagName === "INPUT") {
    target.addEventListener("blur", function () {
      let id = this.id;
      if (this.value === "") {
        this.classList.add("empty");
      } else if (this.id === "email" && emailReg.test(this.value) === false) {
        this.classList.add("empty");
        this.placeholder = "email@example.com";
      } else if ((id === "first-name") | (id === "last-name")) {
        if (nameReg.test(this.value) === false) {
          this.classList.add("empty");
        }
      } else if (id === "password" && this.value === "") {
        this.classList.add("empty");
      } else {
        this.classList.remove("empty");
      }
    });
  }
});
