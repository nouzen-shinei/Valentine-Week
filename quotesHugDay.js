const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");


roseDay = [
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


const userFname = "Vikrant";
fpName.innerText = userFname;
const userSname = "Deepika";
spName.innerText = userSname;

const quotesNr = roseDay.length;

for (i = 0; i < quotesNr; i++) {
    const link = document.createElement('a');
    link.setAttribute('href', 'card.html?source=hug');
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