const DOMselectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("box-container"),
  input1: document.querySelector(`#input-1`),
  input2: document.querySelector(`#input-2`),
  input3: document.querySelector(`#input-3`),
};

function cardElements() {
  DOMselectors.button.addEventListener("click", function () {
    let input1 = DOMselectors.input1.value;
    let input2 = DOMselectors.input2.value;
    let input3 = DOMselectors.input3.value;
    DOMselectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="card" id="card-box">
    <h2 class="card-header">${input1}</h2>
    <h3 class="card-artist">${input2}</h3>
    <img src="${input3}" alt="your image" class="card-img" />
    <button type="button" id="removecard">Remove</button>
  </div>`
    );
    DOMselectors.input1.value = "";
    DOMselectors.input2.value = "";
    DOMselectors.input3.value = "";
    const remove = document.querySelectorAll(`#removecard`);
    function rmv() {
      remove.forEach((button) => {
        button.addEventListener("click", function (e) {
          e.target.parentElement.remove();
        });
      });
    }
    rmv();
  });
}
cardElements();

// const cat = "meow";
// DOMselectors.box.insertAdjacentHTML("beforeend", `<h1>We are a ${cat}<h1/>`);

// DOMselectors.button.addEventListener("click", function () {
//   let input = DOMselectors.input.value;
//   DOMselectors.box.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
//   DOMselectors.input.value = "";
// });

// function backgroundAndText(background, text) {
//   background.style.backgroundColor = "red";
//   text.textContent = "This is now a bigger big red box";
//   text.style.fontSize = "40px";
// }
// DOMselectors.button.addEventListener("click", function () {
//   backgroundAndText(DOMselectors.box, DOMselectors.text);
// });

// function changeLi() {
//   let pointIndex = 0;
//   DOMselectors.points.forEach((point) => {
//     point.addEventListener("click", function () {
//       point.textContent = `Hello, I am ${pointIndex}.`;
//       pointIndex++;
//     });
//   });
// }
// changeLi();

// function(){
//   //create inseert card
//   //query all the remove buttons
//   //add event listeners
// };
