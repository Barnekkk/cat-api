const URLc = 'https://api.thedogapi.com/v1/images/search'
const URLg = 'https://api.thecatapi.com/v1/images/search'
const btn = document.querySelector('#recarrega');
const primeiraDiv = document.getElementById("primeira");
const segundaDiv = document.getElementById("segunda");
const btn1 = document.getElementById("botao1");
const btn2 = document.getElementById("botao2");
primeiraDiv.style.display = "flex";
segundaDiv.style.display = "none";

btn1.onclick = function () {
  primeiraDiv.style.display = "block";
  segundaDiv.style.display = "none";
};

btn2.onclick = function () {
  primeiraDiv.style.display = "none";
  segundaDiv.style.display = "block";
};

fetch(URLc)
    .then( res => res.json())
    .then(data =>{
        const img = document.querySelector('#img1')
        img.src = data[0].url
    })
fetch(URLg)
    .then( res => res.json())
    .then(data =>{
        const img = document.querySelector('#img2')
        img.src = data[0].url
    })
btn.addEventListener('click', () => {
    location.reload()
})



