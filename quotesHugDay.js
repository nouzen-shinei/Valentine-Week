// First, fetch the configuration data.
fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Use the configuration values
    const fpNameEl = document.querySelector("#fpname");
    const spNameEl = document.querySelector("#spname");

    // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;
    
    fpNameEl.innerText = config.fpName;
    spNameEl.innerText = config.spName;

    // Then generate the quotes for Hug Day
    const quotesDiv = document.querySelector(".quotes");

    const hugDayQuotes = [
      `A hug is a way to say, "I care,"
A hug is a way to show, "I’m there."
Happy Hug Day, my love!`,
      `Your hugs are my safe place,
Where I find peace and grace.
Happy Hug Day, sweetheart!`,
      `A hug from you is all I need,
To feel loved and freed.
Happy Hug Day, darling!`,
      `Your hugs are like a warm blanket,
Wrapping me in love and comfort.
Happy Hug Day, my love!`,
      `A hug from you is my favorite therapy,
It heals my heart and sets me free.
Happy Hug Day, sweetheart!`,
      `Your hugs are my happy place,
Where I find solace and embrace.
Happy Hug Day, my love!`,
      `A hug from you is a silent promise,
That you’ll always be by my side.
Happy Hug Day, darling!`,
      `Your hugs are my strength and shield,
In your arms, my heart is healed.
Happy Hug Day, sweetheart!`,
      `A hug from you is a moment of bliss,
A reminder of love’s sweet kiss.
Happy Hug Day, my love!`,
      `Your hugs are my daily dose of joy,
A feeling no one can destroy.
Happy Hug Day, darling!`,
      `A hug from you is my favorite gift,
A treasure that gives my heart a lift.
Happy Hug Day, sweetheart!`,
      `Your hugs are my forever home,
Where I’m never alone.
Happy Hug Day, my love!`
    ];
    
    const quotesNr = hugDayQuotes.length;

    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', 'card.html?source=hug');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = hugDayQuotes[i];
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
  .catch(error => {
    console.error('Error loading config:', error);
  });