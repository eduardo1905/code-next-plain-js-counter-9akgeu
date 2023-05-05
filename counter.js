// TODO: Add counter code here.

const countSpan = document.getElementById('count');
const incrementButton = document.querySelector('#increment');
const decrementButton = document.querySelector('#decrement');
console.log(countSpan);
console.log(incrementButton);
console.log(decrementButton);

let count =0;

countSpan.innerText = count;

incrementButton.addEventListener('click', () => {
  count += 1;
  console.log({ count });
  countSpan.innerText = count;
});

decrementButton.addEventListener('click', () => {
  count--;
  console.log({ count });
  countSpan.innerText = count;
});
