const chosenQuote = document.querySelector("#chosenQuote");

const storageQuote = localStorage.getItem("chosenQuote");

chosenQuote.innerText = storageQuote;

const spNameStored = "Deepika";
const spNameWritten = document.querySelector("#spName");

spNameWritten.innerText = spNameStored.toLowerCase();

const fpNameStored = "Vikrant";
const fpNameWritten = document.querySelector("#fpName");

fpNameWritten.innerText = fpNameStored.toLocaleLowerCase();
