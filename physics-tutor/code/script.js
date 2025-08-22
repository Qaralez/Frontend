// Глобальные переменные
let currentLanguage = 'ru';
let currentDifficulty = 7;
let currentTask = null;
let currentParams = null;
let correctAnswer = null;
let interfaceTranslations = {};

// Загрузка переводов интерфейса
async function loadTranslations(lang) {
    try {
        const response = await fetch(`locales/${lang}.json`);
        interfaceTranslations = await response.json();
        updateUI();
    } catch (error) {
        console.error("Ошибка загрузки переводов:", error);
    }
}

// Обновление всех текстовых элементов на странице
function updateUI() {
    document.getElementById('title').textContent = interfaceTranslations.title;
    document.getElementById('difficulty-label').textContent = interfaceTranslations.selectDifficulty;
    document.getElementById('language-label').textContent = interfaceTranslations.selectLanguage;
    document.getElementById('generate-task-btn').textContent = interfaceTranslations.generateTask;
    document.getElementById('check-answer-btn').textContent = interfaceTranslations.checkAnswer;
    document.getElementById('answer-label').textContent = interfaceTranslations.yourAnswer;
    document.getElementById('new-task-btn').textContent = interfaceTranslations.newTask;
    document.getElementById('task-header').textContent = interfaceTranslations.generateTask; // Можно адаптировать
}

// Генерация новой задачи на основе выбранного класса и языка
function generateNewTask() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = '';
    document.getElementById('user-answer').value = '';

    // Фильтруем задачи по выбранному классу
    const filteredTasks = physicsTasks.filter(task => task.difficulty == currentDifficulty);

    if (filteredTasks.length === 0) {
        resultElement.textContent = 'No tasks available for this difficulty level.';
        resultElement.style.color = 'red';
        return;
    }

    // Выбираем случайную задачу из отфильтрованного списка
    const randomIndex = Math.floor(Math.random() * filteredTasks.length);
    currentTask = filteredTasks[randomIndex];

    // Генерируем параметры для задачи
    currentParams = currentTask.generateParams();
    
    // Получаем условие задачи на выбранном языке
    const problemTemplate = currentTask.problem[currentLanguage];
    
    // Заменяем плейсхолдеры в условии на реальные значения
    let problemText = problemTemplate;
    for (const [key, value] of Object.entries(currentParams)) {
        problemText = problemText.replace(`{${key}}`, value);
    }

    // Рассчитываем правильный ответ
    correctAnswer = currentTask.calculateAnswer(currentParams);
    correctAnswer = currentTask.formatAnswer(correctAnswer);

    // Отображаем условие задачи
    document.getElementById('task-text').textContent = problemText;

    // Обновляем дополнительную информацию о задаче
    document.getElementById('topic-display').textContent = `${interfaceTranslations.taskTopic || 'Topic:'} ${currentTask.topics.join(', ')}`;
    document.getElementById('difficulty-display').textContent = `${interfaceTranslations.difficultyLevel || 'Grade:'} ${currentTask.difficulty}`;
}

// Проверка ответа пользователя
function checkAnswer() {
    const userInput = parseFloat(document.getElementById('user-answer').value);
    const resultElement = document.getElementById('result');

    if (isNaN(userInput)) {
        resultElement.textContent = 'Please enter a number!';
        resultElement.style.color = 'red';
        return;
    }

    if (userInput === correctAnswer) {
        resultElement.textContent = `${interfaceTranslations.correct} ${correctAnswer} ${currentTask.answerUnit[currentLanguage]}`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `${interfaceTranslations.incorrect} ${correctAnswer} ${currentTask.answerUnit[currentLanguage]}. Your answer: ${userInput}`;
        resultElement.style.color = 'red';
    }
}

// Инициализация при загрузке страницы
window.onload = function() {
    // Загружаем переводы по умолчанию
    loadTranslations(currentLanguage);

    // Назначаем обработчики событий
    document.getElementById('difficulty-select').addEventListener('change', function() {
        currentDifficulty = parseInt(this.value);
    });

    document.getElementById('language-select').addEventListener('change', function() {
        currentLanguage = this.value;
        loadTranslations(currentLanguage);
        // Если задача уже была сгенерирована, перегенерируем ее на новом языке
        if (currentTask) {
            generateNewTask();
        }
    });

    document.getElementById('generate-task-btn').addEventListener('click', generateNewTask);
    document.getElementById('check-answer-btn').addEventListener('click', checkAnswer);
    document.getElementById('new-task-btn').addEventListener('click', generateNewTask);

    // Генерируем первую задачу
    generateNewTask();
};