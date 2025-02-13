import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://valentinee-1-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(appSettings);
const database = getDatabase(app);
const UsersInDB = ref(database, 'user');

document.addEventListener("DOMContentLoaded", function() {
  // Fetch configuration from config.json
  fetch('config.json')
    .then(response => response.json())
    .then(config => {
      const fpNameStored = config.fpName;
      const spNameStored = config.spName;
      const storageQuote = localStorage.getItem("chosenQuote");
      
      const datas = { firstUser: fpNameStored, secondUser: spNameStored, quote: storageQuote };
      
      push(UsersInDB, datas);
    })
    .catch(error => {
      console.error('Error loading config:', error);
    });
});
