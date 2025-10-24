const btnEL = document.querySelector("button");
// console.log(btnEL);
const inputEl = document.querySelector("input");
const formEl = document.querySelector("form");
const container = document.querySelector(".js-boxContent");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
});
btnEL.addEventListener("click", (e) => {
  let toDoEl = document.createElement("div");
  let fixContentEl = document.createElement("form");
  const p = document.createElement("p");
  const iconAreaEl = document.createElement("div");
  const addIconEl = document.createElement("i");
  addIconEl.classList.add(
    "fa-solid",
    "fa-pen-to-square",
    "w-[1.3em]",
    "py-[0.25rem]",
    "px-[0.25rem]"
  );

  const deleteIconEl = document.createElement("i");
  deleteIconEl.classList.add(
    "fa-solid",
    "fa-trash",
    "w-[1.3em]",
    "py-[0.25rem]",
    "px-[0.25rem]"
  );
  p.textContent = inputEl.value;

  const fixInputEl = document.createElement("input");
  const fixSubmitBtnEl = document.createElement("button");
  fixContentEl.appendChild(fixInputEl);
  fixContentEl.appendChild(fixSubmitBtnEl);
  fixContentEl.classList = formEl.classList;
  fixInputEl.value = inputEl.value;
  fixInputEl.classList = inputEl.classList;
  fixSubmitBtnEl.classList = btnEL.classList;
  fixSubmitBtnEl.textContent = "Add Task";
  fixContentEl.classList.add("!hidden");
  // console.log(fixInputEl.value);
  // console.log(fixContentEl);

  if (inputEl.value) {
    container.appendChild(toDoEl);
    toDoEl.appendChild(p);
    toDoEl.classList.add(
      "ToDo",
      "bg-[#8758FF]",
      "py-[0.75rem]",
      "px-[1rem]",
      "rounded-[5px]",
      "w-full",
      "mb-[1.2rem]",
      "cursor-pointer",
      "text-white",
      "flex",
      "justify-between",
      "text-xl"
    );
    container.appendChild(fixContentEl);
    // formEl.classList.add("!hidden");
  }

  toDoEl.appendChild(iconAreaEl);
  iconAreaEl.appendChild(addIconEl);
  iconAreaEl.appendChild(deleteIconEl);
  iconAreaEl.classList.add("flex", "gap-2", "items-center");
  inputEl.value = "";

  deleteIconEl.addEventListener("click", (e) => {
    e.stopPropagation();
    toDoEl.remove();
  });

  addIconEl.addEventListener("click", (e) => {
    e.stopPropagation();
    fixContentEl.classList.remove("!hidden");
    fixContentEl.classList.add("!block");
    toDoEl.classList.remove("!block");
    toDoEl.classList.add("!hidden");
  });

  fixContentEl.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  const newTextEl = toDoEl.querySelector("p");

  fixSubmitBtnEl.addEventListener("click", (e) => {
    e.stopPropagation();
    fixContentEl.classList.remove("!block");
    fixContentEl.classList.add("!hidden");
    toDoEl.classList.remove("!hidden");
    toDoEl.classList.add("!flex");
    newTextEl.textContent = fixInputEl.value;
  });
  console.log(toDoEl);

  p.addEventListener("click", (e) => {
    p.classList.toggle("line-through"); //Đã hoàn thành task
    p.classList.toggle("text-gray-400"); //Đã hoàn thành task
  });
});
