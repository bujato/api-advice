let btn = document.getElementById('btn');
let res = document.getElementById('res');

fetch('https://api.adviceslip.com/advice')
.then((advice) => advice.json())
.then((id) => {
    res.innerHTML = id.slip.advice;
});

btn.addEventListener('click', () => {
    location.reload();
})