const button = document.getElementById("button");
let input = document.getElementById("item");
let list = document.getElementById("list");

// const shoppingList = [];

button.addEventListener("click", () => {
  renderShoppingList(input.value);
  input.value = "";
});

const renderShoppingList = (item) => {
  // shoppingList.push(item);
  const listItem = document.createElement("li");
  listItem.textContent = item;
  list.appendChild(listItem);
};

// function shopping-list() => {
//   list.push(input.value)
// }

// create the array
// for each element
// show it in my list
