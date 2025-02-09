import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://valentinee-1-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(appSettings);
const database = getDatabase(app);
const UsersInDB = ref(database,  'user');

const fpNameStored = "Vikrant";
const spNameStored = "Deepika";
const storageQuote = localStorage.getItem("chosenQuote");

const datas = { firstUser: fpNameStored, secondUser: spNameStored, quote: storageQuote };

document.addEventListener("DOMContentLoaded", function() {
    push(UsersInDB,datas);
})
