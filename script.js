const h1 = document.querySelector('h1');
const decrement = document.querySelector(".decrementBtn");
const increment = document.querySelector(".incrementBtn");
const increaseBy7 = document.querySelector(".increase_by_7");
const decreaseBy5 = document.querySelector(".decrease_by_5");
const reset = document.querySelector(".reset");


increment.addEventListener('click', ()=>{
    h1.textContent = +h1.textContent +1;
})

decrement.addEventListener("click", () => {
  h1.textContent = +h1.textContent - 1;
});

increaseBy7.addEventListener("click", () => {
  h1.textContent = +h1.textContent + 7;
});

decreaseBy5.addEventListener("click", () => {
  h1.textContent = +h1.textContent - 5;
});

reset.addEventListener("click", () => {
  h1.textContent = 0;
});


