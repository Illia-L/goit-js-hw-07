const categoriesCollection = document.getElementById('categories').children;
const categoriesArr = Array.from(categoriesCollection)

console.log('Number of categories:', categoriesCollection.length);

categoriesArr.forEach(item => {
  console.log('Category:', item.querySelector('h2').textContent);
  console.log('Elements:', item.querySelectorAll('li').length);
});
