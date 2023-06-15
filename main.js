// let size = "-";
// let num = 0;

const sizeSelector = { size: "", pointer: 3 };

// document.getElementById("sizeSelect").innerText = size;

// document.getElementById("btn-size-s").addEventListener("click", (e) => {});

// document.getElementById("btn-size-s").addEventListener(
//   "click",
//   (e) => {
//     size = e.target.value;

//     // console.log(e.target);
//     // console.log(e.target.value);
//   },
//   false
// );

// console.log(document.getElementsByClassName("btn-size"));
// console.log(document.querySelector(".btn-size"));
// console.log(document.querySelectorAll(".btn-size").length);
const allsize = document.querySelectorAll(".btn-size");

const sizeAll = ["s", "m", "l", "xl"];

for (let i = 0; i <= sizeAll.length - 1; i++) {
  document.getElementById("sizeList").insertAdjacentHTML(
    "beforeEnd",
    `<button
        type="button"
        class="btn btn-size ${i === sizeSelector.pointer ? "btn-dark" : ""}"
        onclick="changeSize(this, ${i})"
        >
        ${sizeAll[i].toUpperCase()}
    </button>`
  );
}

const changeSize = (e, i) => {
  document
    .querySelectorAll(".btn-size")
    [sizeSelector.pointer].classList.remove("btn-dark");

  sizeSelector.size = e.innerText;
  sizeSelector.pointer = i;

  e.classList.add("btn-dark");
  console.log(sizeSelector);
};
// console.log(allsize);
// for (let i = 0; i <= allsize.length - 1; i++) {
//   allsize[i].addEventListener("click", (e) => {
//     allsize[sizeSelector.pointer].classList.remove("btn-dark");

//     sizeSelector.size = e.target.innerText;
//     sizeSelector.pointer = i;

//     document.getElementById("sizeSelect").innerText = sizeSelector.size;

//     e.target.classList.add("btn-dark");

//     console.log(sizeSelector);
//   });
// }

// console.log(document.querySelector("input[name='login']").target.value);
