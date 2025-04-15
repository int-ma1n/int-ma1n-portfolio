const symbols = [
	"🍒",
	"🍋",
	"🔔",
	"🍀",
	"💎",
	"7️⃣",
	"🍉",
	"🍇",
	"⭐",
	"🃏",
	"🤑",
	"💰",
	"🎯",
	"👑",
	"🥇",
	"🧨",
	"💵",
	"🏆",
	"⚜️",
	"♠️",
	"♥️",
	"♦️",
	"♣️",
];

const translations = {
	ua: {
		win: "🎉 Ти виграв!",
		tryAgain: "🙁 Спробуй ще раз",
	},
	ru: {
		win: "🎉 Ты выиграл!",
		tryAgain: "🙁 Попробуй ещё раз",
	},
	en: {
		win: "🎉 You won!",
		tryAgain: "🙁 Try again",
	},
};

function getLangFromURL() {
	const path = window.location.pathname;

	if (path.startsWith("/ru")) return "ru";
	if (path.startsWith("/en")) return "en";
	return "ua";
}

document.getElementById("play-btn").addEventListener("click", () => {
	const lang = getLangFromURL();
	const { win, tryAgain } = translations[lang];

	const slot1 = symbols[Math.floor(Math.random() * symbols.length)];
	const slot2 = symbols[Math.floor(Math.random() * symbols.length)];
	const slot3 = symbols[Math.floor(Math.random() * symbols.length)];

	document.getElementById(
		"slots"
	).textContent = `${slot1} | ${slot2} | ${slot3}`;

	const resultText = slot1 === slot2 && slot2 === slot3 ? win : tryAgain;

	document.getElementById("result").textContent = resultText;
});

document.body.onpointermove = (event) => {
	const { clientX, clientY } = event;

	blob.animate(
		{
			left: `${clientX}px`,
			top: `${clientY}px`,
		},
		{ duration: 1000, fill: "forwards" }
	);
};

const langBtn = document.getElementById("language-btn");
const langOptions = document.getElementById("language-options");

langBtn.addEventListener("click", () => {
	langOptions.classList.toggle("active");
});

function setLang(lang) {
	localStorage.setItem("lang", lang);

	if (lang === "ua") {
		window.location.href = "../index.html";
	} else {
		window.location.href = `/${lang}/index.html`;
	}
}
