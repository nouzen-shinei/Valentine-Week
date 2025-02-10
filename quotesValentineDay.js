
const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");


roseDay = [
    `You are my forever Valentine,
    The one who makes my heart shine.
    Happy Valentine's Day, my love!`,
    `You are the reason I believe in love,
    You are my blessing from above.
    Happy Valentine's Day, sweetheart!`,
    `You are my heart, my soul, my everything,
    With you, my life is forever spring.
    Happy Valentine's Day, darling!`,
    `तुम मेरे दिल की धड़कन हो,
    तुम मेरी ज़िंदगी का सहारा हो।
    हैप्पी वैलेंटाइन डे, मेरी जान!`,
    `You are my today, tomorrow, and forever,
    My love for you will never waver.
    Happy Valentine's Day, sweetheart!`,
    `You are my sunshine on cloudy days,
    My guiding light in every way.
    Happy Valentine's Day, my love!`,
    `You are my dream come true,
    My forever Valentine, only you.
    Happy Valentine's Day, darling!`,
    `तुम मेरे प्यार की पहचान हो,
    तुम मेरी ज़िंदगी का अरमान हो।
    हैप्पी वैलेंटाइन डे, मेरी जान!`,
    `You are the melody in my heart,
    The reason my world feels like art.
    Happy Valentine's Day, sweetheart!`,
    `You are my forever and always,
    My love for you will never fade.
    Happy Valentine's Day, my love!`,
    `You are my happiness, my pride,
    The one who’s always by my side.
    Happy Valentine's Day, darling!`,
    `You are my heart’s greatest treasure,
    A love beyond any measure.
    Happy Valentine's Day, sweetheart!`,
    `तुम मेरे दिल की खुशी हो,
    तुम मेरी ज़िंदगी की मंज़िल हो।
    हैप्पी वैलेंटाइन डे, मेरी जान!`,
    `You are my forever Valentine,
    The one who makes my heart align.
    Happy Valentine's Day, my love!`,
    `You are my everything, my all,
    The one who makes me stand tall.
    Happy Valentine's Day, darling!`
];


const userFname = "Vikrant";
fpName.innerText = userFname;
const userSname = "Deepika";
spName.innerText = userSname;

const quotesNr = roseDay.length;

for (i = 0; i < quotesNr; i++) {
    const link = document.createElement('a');
    link.setAttribute('href', 'card.html?source=valentine');
    const para = document.createElement("p");
    para.classList.add("quote");
    para.innerText = `${roseDay[i]}`;
    link.appendChild(para);
    quotesDiv.appendChild(link);
}
const quoteDiv = document.querySelectorAll(".quote");
// console.log(quoteDiv);

quoteDiv.forEach(quote => {
    addEventListener('click', function (e) {
        console.log(e.target.innerText);
        const chosenQuote = e.target.innerText;
        this.localStorage.setItem("chosenQuote", chosenQuote);
    });
});