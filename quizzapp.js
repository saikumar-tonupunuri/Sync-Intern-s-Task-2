const quizData = [
    {
    question: "OS computer abbreviation usually means ?",
    a: "Order of Significance",
    b: "Open Software",
    c: "Operating System",
    d: "Optical Sensor",
    correct: "c",
    },
    {
    question: "Who developed Yahoo?",
    a: "Dennis Ritchie & Ken Thompson",
    b: "David Filo & Jerry Yang",
    c: "Vint Cerf & Robert Kahn",
    d: "Steve Case & Jeff Bezos",
    correct: "b",
    },
    {
    question: "What is the relationship between resistivity r and conductivity s?",
    a: "R = s2",
    b: "R = s",
    c: "R > s",
    d: "R = 1/s",
    correct: "d",
    },
    {
    question: "What do we call a network whose elements may be separated by some distance? It usually involves two or more small networks and dedicated high-speed telephone lines.",
    a: "URL (Universal Resource Locator)",
    b: "LAN (Local Area Network)",
    c: "WAN (Wide Area Network)",
    d: "World Wide Web",
    correct: "c",
    },
    ];
    const quiz = document.getElementById("quiz");
    const answerElements = document.querySelectorAll(".answer");
    const questionElement = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitButton = document.getElementById("submit");
    let currentQuiz = 0;
    let score = 0;
    const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
    };
    const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
    };
    const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    };
    loadQuiz();
    submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
    quiz.innerHTML = `
    <h2>You answered ${score}/${quizData.length} questions correctly</h2>
    <button onclick="history.go(0)">Play Again</button>
    `
    }
    }
    });