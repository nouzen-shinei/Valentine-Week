const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const promiseDayQuotes = [
  `I promise to love you forever,
And stand by you through every endeavor.
Happy Promise Day, my love!`,
  `I promise to be your strength and guide,
And always walk by your side.
Happy Promise Day, sweetheart!`,
  `I promise to cherish you every day,
And love you in every possible way.
Happy Promise Day, darling!`,
  `मैं वादा करता हूँ तुम्हारे साथ रहने का,
हर मुश्किल में तुम्हारा साथ निभाने का।
हैप्पी प्रॉमिस डे, मेरी जान!`,
  `I promise to hold your hand forever,
And leave you never.
Happy Promise Day, my love!`,
  `I promise to love you more with each passing day,
And never let you go away.
Happy Promise Day, sweetheart!`,
  `I promise to be your partner in every dream,
And make life better than it may seem.
Happy Promise Day, darling!`,
  `मैं वादा करता हूँ तुम्हारे प्यार को सजोने का,
हर लम्हा तुम्हारे साथ बिताने का।
हैप्पी प्रॉमिस डे, मेरी जान!`,
  `I promise to be your light in the dark,
And ignite your life with a spark.
Happy Promise Day, my love!`,
  `I promise to be your shoulder to lean on,
And your strength when you feel gone.
Happy Promise Day, sweetheart!`,
  `I promise to love you unconditionally,
And cherish you endlessly.
Happy Promise Day, darling!`,
  `I promise to be your forever and always,
And love you through all our days.
Happy Promise Day, my love!`,
  `मैं वादा करता हूँ तुम्हारे सपनों को सच करने का,
हर खुशी तुम्हारे नाम करने का।
हैप्पी प्रॉमिस डे, मेरी जान!`,
  `I promise to make you smile every day,
And keep your worries at bay.
Happy Promise Day, sweetheart!`,
  `I promise to be your constant and true,
And always stand by you.
Happy Promise Day, darling!`
];

fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Set names from the configuration
    fpName.innerText = config.fpName;
    spName.innerText = config.spName;
    
    // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;
    
    const quotesNr = promiseDayQuotes.length;
    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', 'card.html?source=promise');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = promiseDayQuotes[i];
      link.appendChild(para);
      quotesDiv.appendChild(link);
    }

    const quoteDivs = document.querySelectorAll(".quote");
    quoteDivs.forEach(quote => {
      quote.addEventListener('click', function (e) {
        const chosenQuote = e.target.innerText;
        localStorage.setItem("chosenQuote", chosenQuote);
      });
    });
  })
  .catch(error => console.error('Error loading config:', error));