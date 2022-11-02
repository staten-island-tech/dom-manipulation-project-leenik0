const DOMselectors = {
  button1: document.getElementById("btn-1"),
  button2: document.getElementById("btn-2"),
  button3: document.getElementById("btn-3"),
  box: document.getElementById("box-container"),
  input1: document.querySelector(`#input-1`),
  input2: document.querySelector(`#input-2`),
  input3: document.querySelector(`#input-3`),
};

function cardElements() {
  DOMselectors.button1.addEventListener("click", function () {
    let input1 = DOMselectors.input1.value;
    DOMselectors.box.insertAdjacentHTML("beforeend", `<h1>${input1}</h1>`);
    DOMselectors.input1.value = "";
  });

  DOMselectors.button2.addEventListener("click", function () {
    let input2 = DOMselectors.input2.value;
    DOMselectors.box.insertAdjacentHTML("beforeend", `<h2>${input2}</h2>`);
    DOMselectors.input2.value = "";
  });

  DOMselectors.button3.addEventListener("click", function () {
    let input3 = DOMselectors.input3.value;
    //   DOMselectors.input3.src = `${input3}`;
    DOMselectors.box.insertAdjacentHTML(
      "beforeend",
      `<img src= ${input3} alt="your image">`
    );
    DOMselectors.input3.value = "";
  });
}
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
