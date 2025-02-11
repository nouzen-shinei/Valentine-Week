const chosenQuote = document.querySelector("#chosenQuote");

const storageQuote = localStorage.getItem("chosenQuote");

chosenQuote.innerText = storageQuote;

const spNameStored = "Lena";
const spNameWritten = document.querySelector("#spName");

spNameWritten.innerText = spNameStored.toLowerCase();

const fpNameStored = "Shinei";
const fpNameWritten = document.querySelector("#fpName");

fpNameWritten.innerText = fpNameStored.toLocaleLowerCase();
