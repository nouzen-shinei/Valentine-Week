const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");


roseDay = [
    `You are the sweetest chocolate in the box of my life,
    Adding flavor to every moment,
    Making everything delightful and nice.
    Happy Chocolate Day, my love!`,
    `Just like chocolate melts in the mouth,
    Your love melts my heart.
    Wishing you a very Happy Chocolate Day!`,
    `Life is like a box of chocolates,
    And you are the sweetest one in it.
    Happy Chocolate Day, sweetheart!`,
    `चॉकलेट की तरह मीठी हो तुम,
    चॉकलेट की तरह प्यारी हो तुम,
    चॉकलेट डे पर यही दुआ है,
    तुम हमेशा खुश रहो और मुस्कुराती रहो!
    हैप्पी चॉकलेट डे!`,
    `You are the chocolate to my milk,
    The sweetness to my life.
    Happy Chocolate Day, darling!`,
    `चॉकलेट की तरह हो तुम्हारा प्यार,
    जो दिल को कर दे मीठा और प्यारा।
    हैप्पी चॉकलेट डे, मेरी जान!`,
    `Just like chocolate makes everything better,
    Your presence makes my life sweeter.
    Happy Chocolate Day, my love!`,
    `तुम्हारी मुस्कान चॉकलेट से भी मीठी है,
    तुम्हारा प्यार चॉकलेट से भी प्यारा है।
    हैप्पी चॉकलेट डे, मेरी जान!`,
    `You are the reason my life is so sweet,
    Just like chocolate, you make everything complete.
    Happy Chocolate Day, sweetheart!`,
    `चॉकलेट की तरह मीठा हो तुम्हारा साथ,
    चॉकलेट की तरह प्यारा हो तुम्हारा हाथ।
    हैप्पी चॉकलेट डे, मेरी जान!`,
    `Just like chocolate, you are irresistible,
    And your love is simply unforgettable.
    Happy Chocolate Day, my love!`,
    `तुम्हारी मोहब्बत चॉकलेट से भी मीठी है,
    तुम्हारी याद चॉकलेट से भी प्यारी है।
    हैप्पी चॉकलेट डे, मेरी जान!`,
    `You are the chocolate in my life,
    Making every moment sweet and rife.
    Happy Chocolate Day, darling!`,
    `चॉकलेट की तरह मीठा हो तुम्हारा प्यार,
    चॉकलेट की तरह प्यारा हो तुम्हारा साथ।
    हैप्पी चॉकलेट डे, मेरी जान!`,
    `Just like chocolate, you are my favorite treat,
    And your love makes my life complete.
    Happy Chocolate Day, sweetheart!`
];


const userFname = "Vikrant";
fpName.innerText = userFname;
const userSname = "Deepika";
spName.innerText = userSname;

const quotesNr = roseDay.length;

for (i = 0; i < quotesNr; i++) {
    const link = document.createElement('a');
    link.setAttribute('href', 'card.html?source=chocolate');
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