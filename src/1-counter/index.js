const plusbtn = document.querySelector('#incriment');
const resetbtn = document.querySelector('#reset');

let count = 0;

plusbtn.addEventListener('click', () => {
    const number = document.querySelector('#number');
    count++;
    number.textContent = count;
});

resetbtn.addEventListener('click', () => {
    const number = document.querySelector('#number');
    if (count > 0) {
        count = 0
    }
    number.textContent = count;
})