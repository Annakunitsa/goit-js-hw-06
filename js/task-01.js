const items = document.querySelectorAll('.item');
//console.log(items);

const quantity = items.length;
console.log('Number of categories:', quantity);

const category = items.forEach(function (item) {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements:', item.querySelectorAll('li').length);
});

//const category = items.forEach(function (item) {
//   console.log('Category:', item.firstElementChild.textContent);
//   console.log('Elements:', item.querySelectorAll('li').length);
// });

