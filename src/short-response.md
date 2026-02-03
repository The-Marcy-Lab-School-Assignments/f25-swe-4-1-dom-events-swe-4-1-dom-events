# Short Response Questions

Answer the following questions in 2-4 sentences each. Be specific and use vocabulary from the lessons. Your responses will be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content.

## Question 1: Loading JavaScript

Examine the HTML code below:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Button Clicker</title>
    <link rel="stylesheet" href="style.css" />
    <script src="index.js"></script>
  </head>
  <body>
    <h1>Button Clicker</h1>
    <button id="my-button">Click Me!</button>
  </body>
</html>
```

In the `index.js` file, they have the code:

```js
document.querySelector("#my-button").style.color = "red";
```

But an error is thrown.

1. What is the error (be specific)?
2. Why does this error occur?
3. What can be done to fix it?

**Your Answer:**

1. `Uncaught TypeError: Cannot read properties of null (reading 'style')` This tells us that `document.querySelector("#my-button")` returned `null`.

2. Because when JavaScript runs. The `<script src="index.js"></script>` is placed inside the `<head>`. The browser executes JavaScript top to bottom
   when index.js runs, the browser has not created the `<button>` yet.

3. Move the `<script>` to the bottom of the body.

## Question 2: event.target vs event.currentTarget

Consider this HTML:

```html
<div id="button-container">
  <button>Click Me</button>
</div>
```

And this JavaScript:

```js
const div = document.querySelector("#button-container");
div.addEventListener("click", (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
});
```

When a user clicks the button, both `event.target` and `event.currentTarget` are logged. Explain what each property represents in this scenario and why they might be different.

**Your Answer:**

### `event.target`

Is the element that was actually clicked.

```js
event.target === <button>Click Me</button>;
```

Because the user physically clicked the button, not the div.

### `event.currentTarget`

Is the element that the event listener is attached to.

```js
event.currentTarget === <div id="button-container">
```

Because the listener was added to the div.

`event.target` = where the event started.

`event.currentTarget` = where the event is being handled.

## Question 3: Creating Elements Dynamically

Look at the JavaScript code below that is attempting to create a product card dynamically and add it to the body.

```js
const product = {
  name: "iPhone 17",
  price: 1099.99,
  img: "./images/iphone17.png",
};

/* Desired structure: 
<div>
  <img src="./images/iphone17.png">
  <h3>iPhone 17</h3>
  <p>$1099.99</p>
</div>
*/

const productCard = document.createElement("div");
const productImage = document.createElement("img");
const productName = document.createElement("h3");
const productPrice = document.createElement("p");

productImage.src = product.img;
productName.textContent = product.name;
productPrice.textContent = `$${product.price}`;

document.body.append(productCard);
```

However, when the page loads and the code is executed, the user isn't able to see the image, product name or product price. What is the issue with this code?

**Your Answer:** Creating elements does not put them on the page.
Elements **must be appended** to the DOM, and child elements **must be appended** to their parent. Here we are appending productCard to the body but not appending any child elements to the product card so the product card is empty.

## Question 4: Event Delegation and event.target.closest()

Consider this HTML:

```html
<ul id="todo-list">
  <li id="todo-1">
    <p class="description">Walk the dog</p>
    <p class="is-complete">✅</p>
  </li>
  <li id="todo-2">
    <p class="description">Take out the trash</p>
    <p class="is-complete">❌</p>
  </li>
  <li id="todo-3">
    <p class="description">Wash the dishes</p>
    <p class="is-complete">❌</p>
  </li>
</ul>
```

And this JavaScript:

```js
const todoList = document.querySelector("#todo-list");
todoList.addEventListener("click", (event) => {
  const clickedLi = event.target.closest("li");

  if (!clickedLi) return;

  clickedLi.querySelector(".is-complete").textContent = "✅";
});
```

1. What is the name for this approach to event handling? What is the alternative and why is this approach better?
2. Explain what the `event.target.closest('li')` method does and why it is essential to this approach.

**Your Answer:** The approach used here is **event delegation**

Event delegation means:

- You attach **one** event listener to a parent element.

- You let events “bubble up” from child elements.

- You figure out which child was clicked inside the handler.

The click listener is on #todo-list the `<ul>` but clicks actually happen on `<p>` elements inside `<li>` elements. The parent listens once and handles all of them.

The alternative would be something like Selecting every `<li>` or every `<p>`
adding a separate addEventListener to each one.

Which would require **more** code, breaks if new items are added dynamically
and is harder to maintain.

**Event delegation** is better because it automatically handles dynamically added elements on top of keeping your code **cleaner** and more **efficient**.

### What closest('li') does:

Is starting from the clicked element, walk up the DOM tree until you find the nearest `<li>` ancestor.”

So if you click:

1. On the checkmark `<p>` → it finds the `<li>`

2. On the description `<p>` → it finds the `<li>`

3. On the `<li>` itself → it returns that `<li>`

If it can’t find one, it returns `null`.

### Why this is essential for event delegation it's because event delegation only works if you can:

- Catch the event at the parent.

- Identify which child item should respond.

`closest('li')` solves this problem by:

- Normalizing all clicks to the same element type `<li>`

- Letting your logic work regardless of where inside the `<li>` the user clicked

Without `closest()`:

You’d have to write logic checking tag names or classes;

Your code would break when HTML structure changes.

## Question 5: NodeList

Do some independent learning and reading about the `querySelectorAll()` method. Then, answer these questions:

1. What is the difference between `querySelectorAll()` and `querySelector()`. Give an example of when you would use `querySelectorAll()`.
2. What is the difference between a `NodeList` and an array? Why is it important to know this difference?

**Your Answer:**
`querySelector()` returns only the **first** element that matches a CSS selector.
`querySelectorAll()` returns **all** matching elements as a collection called a `NodeList`.

You would use `querySelectorAll()` when you want to apply the **same behavior** or styles to **multiple elements**, like adding a click event to every button.

A `NodeList` is array-like, but it is not a true array. It supports some methods like forEach, but it does not have all array methods such as map, filter, or reduce.

This difference matters because if you try to use array methods on a `NodeList`, your code can break. When you need full array functionality, you must convert the `NodeList` into an array.
