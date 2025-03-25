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

const makeItClickable = function () {};

makeItClickable();

/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */

const revealFooterLink = function () {};

revealFooterLink();

/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */

const generateTable = function () {};

generateTable();

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function () {};

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */

const changeColorWithRandom = function () {};
