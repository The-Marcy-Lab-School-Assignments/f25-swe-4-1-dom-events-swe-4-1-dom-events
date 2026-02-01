// Feel free to use this array of fortunes or come up with your own!
const fortunes = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes ",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again ",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
]

/* 
TODO:
- [ ] Add an event listener to the ask button that:
  - [ ] hides the eight ball (hint: adjust the style.display property)
  - [ ] generates a random fortune from the fortunes array
  - [ ] shows the fortune in the answer element
*/

const numberEight = document.getElementById('eight');
const askButton = document.getElementById('ask-btn');
const yourFortune = document.getElementById('answer');


askButton.addEventListener('click', () => {
  //Hide number eight
  numberEight.style.display = 'none';

  //Use Math.floor and Math.random to get a random index we can use to get the fortune.
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];

  //Use textContent to display the fortune
  //And style.display = 'block' to get the sentences multiple lines
  yourFortune.textContent = fortune;
  yourFortune.style.display = 'block';
}) 