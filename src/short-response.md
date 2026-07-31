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
This code will throw a type error since `document.querySelector('#my-button').style` will not be properly defined. This error occurs because the script is linked at the top of the html page and since the code runs from top to bottom the entire `index.js` code will run before the program even recognizes the content inside of the html body which makes everything referencing the html a null value. The code is basically reading `document.null.style` at that point. To fix it all you have to do is put the script tag at the bottom of the body so the program recognizes the html objects before running the `index.js` code.

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

When a user clicks the button, both `event.target` and `event.currentTarget` a re logged. Explain what each property represents in this scenario and why they might be different.

**Your Answer:**
`event.target` is the actual element that got clicked the specific thing the user interacted with. `event.currentTarget` is whatever element the event listener is attached to. In this scenario, since the listener is on the div but the user clicks the button inside it, `event.target` would log the button element while `event.currentTarget` would log the div. They're different here because of event bubbling the click happens on the button first, then bubbles up to the div where the listener actually lives, but target still remembers where the click originated.

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

**Your Answer:**

The **elements** are being created and given their content, but they're never actually attached to `productCard`, `productImage`, `productName`, and `productPrice` are just floating on their own, disconnected from the DOM. The code only appends `productCard` (an empty div) to the body, so nothing inside it ever shows up. To fix it, you'd need to append the child elements to `productCard` before appending `productCard` to the body:

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

**Your Answer:**
This approach is called **event delegation**, where instead of adding a listener to every single <li>, you add one **listener** to the parent <ul> and let clicks bubble up to it. The alternative would be looping through each <li> and attaching a separate listener to each one, which is worse because it doesn't scale well if todos get added dynamically later, those new ones wouldn't have a listener attached unless you remembered to add it every time, whereas the parent listener handles all of them automatically since it's not tied to specific elements. event.`target.closest('li')` finds the nearest <li> ancestor starting from whatever was actually clicked, which matters because someone might click directly on the <p> inside the <li> rather than the <li> itself closest makes sure you're always grabbing the right todo item regardless of which inner element the click landed on.

## Question 5: NodeList

Do some independent learning and reading about the `querySelectorAll()` method. Then, answer these questions:

1. What is the difference between `querySelectorAll()` and `querySelector()`. Give an example of when you would use `querySelectorAll()`.
2. What is the difference between a `NodeList` and an array? Why is it important to know this difference?

**Your Answer:**
`querySelector()` grabs just the first element that matches a given selector, while `querySelectorAll()` grabs every matching element and returns them all together. You'd use `querySelectorAll()` for something like grabbing every `.todo-item` on a page so you can loop through and do something to each one, instead of only getting the first.

A **NodeList** looks like an array since it's ordered and you can access items by index, but it's not actually an array, it's missing most array methods like `.map()`, `.filter()`, or `.reduce()`. It does have `.forEach()` though, so simple looping still works. This matters because if you try to use an array method directly on a NodeList, it'll throw an error, so you either need to stick to the few methods NodeLists actually support or convert it to a real array first with something like `Array.from()`.
