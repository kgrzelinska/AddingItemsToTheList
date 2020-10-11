
// Po kliknięciu buttona dodają się do listy <ul> elementy <li> ,
// które są kolejnymi (począwszy od 1) liczbami o 2 większymi od siebie.
// Liczby, które są podzielne przez 3 są na tej liście wyszczególnione - inny kolor i rozmiar fontu.


const btn = document.querySelector("button");

let number = 1;
const ul = document.querySelector("ul");

const addItem = function () {
    const li = document.createElement("li");
    li.textContent = number;
    ul.appendChild(li);

    if (number % 3 == 0) {
        li.classList.add("largerLetters");
    }

    number = number + 2;

}

btn.addEventListener("click", addItem)