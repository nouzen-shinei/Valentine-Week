const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const kissDayQuotes = [
  `A kiss is a language of love,
That speaks directly to the heart.
Happy Kiss Day, my love!`,
  `Your kisses are my favorite melody,
That plays in my heart endlessly.
Happy Kiss Day, sweetheart!`,
  `A kiss from you is all I need,
To feel loved and freed.
Happy Kiss Day, darling!`,
  `Your kisses are like magic,
That turns my world into a fairy tale.
Happy Kiss Day, my love!`,
  `A kiss from you is my favorite memory,
That I cherish endlessly.
Happy Kiss Day, sweetheart!`,
  `Your kisses are my sweetest addiction,
A feeling beyond any description.
Happy Kiss Day, my love!`,
  `A kiss from you is a moment of pure bliss,
A reminder of love’s sweet kiss.
Happy Kiss Day, darling!`,
  `Your kisses are my daily dose of joy,
A feeling no one can destroy.
Happy Kiss Day, sweetheart!`,
  `A kiss from you is my favorite gift,
A treasure that gives my heart a lift.
Happy Kiss Day, my love!`,
  `Your kisses are my forever home,
Where I’m never alone.
Happy Kiss Day, darling!`,
  `A kiss from you is a silent promise,
That you’ll always be by my side.
Happy Kiss Day, sweetheart!`,
  `Your kisses are my strength and shield,
In your arms, my heart is healed.
Happy Kiss Day, my love!`
];

fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Set names from configuration
    fpName.innerText = config.fpName;
    spName.innerText = config.spName;

    // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;
    
    // Build quote links from kissDayQuotes
    const quotesNr = kissDayQuotes.length;
    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', 'card.html?source=kiss');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = kissDayQuotes[i];
      link.appendChild(para);
      quotesDiv.appendChild(link);
    }

    // Add click listener on each quote to save the chosen quote to localStorage.
    const quoteDivs = document.querySelectorAll(".quote");
    quoteDivs.forEach(quote => {
      quote.addEventListener('click', function (e) {
        const chosenQuote = e.target.innerText;
        localStorage.setItem("chosenQuote", chosenQuote);
      });
    });
  })
  .catch(error => console.error('Error loading config:', error));