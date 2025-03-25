/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function (newTitle) {
  document.querySelector("h1").innerText = newTitle;
};

changeTitle("Nuovo Titolo");

/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */

const addClassToTitle = function (newClass) {
  document.querySelector("h1").className = newClass;
};

addClassToTitle("Nome Classe");

/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */

const changePcontent = function (newText) {
  document.querySelectorAll("div > p").forEach((p) => {
    p.textContent = newText;
  });
};

changePcontent("Nuovo Testo.");

/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */

const changeUrls = function () {
  const links = document.querySelectorAll("a:not(footer a");
  links.forEach((link) => {
    link.href = "https://www.google.com";
  });
};

changeUrls();

/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */

const addToTheSecond = function (newElement) {
  const lists = document.querySelectorAll("ul");
  const newElem = document.createElement("li");
  newElem.innerText = newElement;
  lists[1].appendChild(newElem);
};

addToTheSecond("Sono il nuovo elemento della lista.");

/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */

const addParagraph = function (newParagraph) {
  const div = document.querySelectorAll("div");
  const newP = document.createElement("p");
  newP.innerText = newParagraph;
  div[0].appendChild(newP);
};

addParagraph("Sono il nuovo paragrafo.");

/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */

const hideFirstUl = function () {
  const firstList = document.querySelectorAll("ul");
  firstList[0].style.display = "none";
};

hideFirstUl();

/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */

const paintItGreen = function () {
  const lists = document.querySelectorAll("ul");
  for (let i = 0; i < lists.length; i++) {
    lists[i].style.backgroundColor = "green";
  }
};

paintItGreen();

/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */

const makeItClickable = function () {
  const h1 = document.querySelector("h1");
  let text = h1.innerText;
  h1.addEventListener("click", function () {
    if (text.length > 0) {
      h1.innerText = text.slice(0, -1);
    }
  });
};

makeItClickable();

/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */

const revealFooterLink = function () {
  const footer = document.querySelector("footer");
  const content = footer.innerText;
  footer.addEventListener("click", function () {
    alert(content);
  });
};

revealFooterLink();

/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */

const generateTable = function () {
  const tableArea = document.getElementById("tableArea");
  const table = document.createElement("table");
  table.style.width = "100%";
  table.setAttribute("border", "1");
  let header = table.createTHead();
  let headerRow = header.insertRow(0);
  headerRow.innerHTML = "<th>Immagine</th><th>Nome Prodotto</th><th>Quantità</th><th>Prezzo</th>";
  let tbody = table.createTBody();
  tableArea.appendChild(table);
};

generateTable();

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function (img, nome, quantita, prezzo) {
  const table = document.querySelector("table");
  let tBody = document.getElementsByTagName("tbody")[0];

  let row = tBody.insertRow();
  row.insertCell(0).innerHTML = "<img src='' alt='Immagine prodotto'>";
  row.insertCell(1).innerText = nome;
  row.insertCell(2).innerText = quantita;
  row.insertCell(3).innerText = prezzo;
};

addRow("img", "latte", "5 litri", "50 euro");

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {
  const table = document.querySelector("table");
  const images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
};

hideAllImages();

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */

const changeColorWithRandom = function () {
  const h2Element = document.getElementById("changeMyColor");

  h2Element.addEventListener("click", function () {
    const getRandomColor = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    h2Element.style.color = getRandomColor();
  });
};

changeColorWithRandom();
