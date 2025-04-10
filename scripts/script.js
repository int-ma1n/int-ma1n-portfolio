async function fetchGitHubInfo() {
	const username = "int-ma1n";
	const url = `https://api.github.com/users/${username}`;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			alert("Ошибка при загрузке данных!");
			return;
		}

		const data = await response.json();

		document.getElementById("avatar-display").src = data.avatar_url;
		document.getElementById("name-display").textContent =
			data.name || data.login;
		document.getElementById("bio-display").textContent =
			data.bio || "Биография отсутствует";
		document.getElementById("repo-display").textContent = data.public_repos;
		document.getElementById("follows-display").textContent = data.followers;
		document.getElementById("profile-gh-link").href = data.html_url;
		document.getElementById("profile-gh-link-image").href = data.html_url;
	} catch (error) {
		console.error(error);
		document.getElementById("github-info").innerHTML =
			"Ошибка при подключении к API.";
	}
}
fetchGitHubInfo();

const blob = document.getElementById("blob");

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

async function loadRandomPost() {
	try {
		const response = await fetch("assets/posts.json");
		if (!response.ok) throw new Error("Не удалось загрузить posts.json");

		const posts = await response.json();
		const randomIndex = Math.floor(Math.random() * posts.length);
		const randomPost = posts[randomIndex];

		const postsDiv = document.querySelector(".posts");
		if (postsDiv) {
			postsDiv.innerHTML = `
          <h2>Пост</h2>
          <p>${randomPost}</p>
        `;
		}
	} catch (error) {
		console.error("Ошибка загрузки постов:", error);
	}
}

document.addEventListener("DOMContentLoaded", loadRandomPost);

const langBtn = document.getElementById("language-btn");
const langOptions = document.getElementById("language-options");

langBtn.addEventListener("click", () => {
	langOptions.classList.toggle("active");
});

function setLang(lang) {
	localStorage.setItem("lang", lang);

	if (lang === "ua") {
		window.location.href = "../index.html"; // основной — в корне
	} else {
		window.location.href = `/${lang}/index.html`;
	}
}

const skills = [
	"Случайное чесание уха через капюшон",
	"Умение закрыть 15 вкладок и снова их открыть",
	"Понимание смысла мемов без контекста",
	"Телепатическое ощущение Wi-Fi слабости",
	"Мастерство кликать 'Пропустить рекламу' с первого кадра",
	"Закрытие вкладки за миллисекунду до того, как зашёл учитель",
	"Инстинкт избегания встреч с соседями на лестнице",
	"Невидимый режим в Zoom",
	"Чтение чата во сне",
	"Мастер в открытии и закрытии окна браузера за долю секунды",
	"Инстинкт нахождения нужного файла среди 50 вкладок",
	"Телепатия для угадывания, когда учитель переключит на слайд с вопросами",
	"Неуловимость: исчезание с видео-звонков в последний момент",
	"Гуру игры в шахматы с максимальным количеством ничьих",
	"Генератор мемов: составление мема, который поймут все, включая бабушек",
	"Инстинктивное избегание скользких ситуаций на лестнице",
	"Знаток скрытых кнопок на клавиатуре: научился все горячие клавиши",
	"Магистр применения фильтров в Instagram, который делает тебя идеальным",
	"Сверхчеловеческая способность нажать 'Пропустить рекламу' до того, как она начнется",
	"Читающий мемы быстрее, чем их успевают делать",
	"Мастер по поиску поломанных ссылок и их фиксации",
	"Тот, кто всегда вкуривает новый тренд до того, как он станет популярным",
	"Невидимая рука: закрытие вкладок в браузере за секунду до того, как зайдет босс",
	"Магия обновления страницы в самый нужный момент",
	"Мастер переписывания домашки по памяти в последний момент",
	"Человек, который всегда сидит в 'Не беспокоить' режиме, когда появляется не вовремя сообщение",
	"Гуру возвращения к предыдущей версии документа в 3 клика",
	"Интуитивное понимание пароля, который ты забыл, но все равно угадал",
];

const levels = ["Легендарный", "Мифический", "Редкий"];

document.getElementById("guitar-word").addEventListener("click", () => {
	const randomSkill = skills[Math.floor(Math.random() * skills.length)];
	const randomLevel = levels[Math.floor(Math.random() * levels.length)];
	document.getElementById(
		"skill-text"
	).textContent = `Вы получили скилл: ${randomSkill} 🧠 Уровень: ${randomLevel}`;

	document.getElementById("skill-modal").classList.remove("hidden");
});

document.getElementById("close-modal").addEventListener("click", () => {
	document.getElementById("skill-modal").classList.add("hidden");
});
