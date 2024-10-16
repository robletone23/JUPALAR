const quizData = [
    {
        question: "Juluis G__?",
        a: "Gagagaga",
        b: "Good",
        c: "Gyatt",
        d: "Gay",
        correct: "d",
    },
    {
        question: "Barbie ba c ipoy?",
        a: "shimpre",
        b: "all of the above",
        c: "totoo",
        d: "tama",
        correct: "b",
    },
    {
        question: "What does lgbtq stand for?",
        a: "Ganpaul Gapalar Banpol Tapalar Qanpal",
        b: "lopit gopit boti topi qgeh",
        c: "lading gay bayot tumboy qpal",
        d: "hev abi alam mo ba girl 3:30",
        correct: "a",
    },
    {
        question: "Which one is Johnpaul birthday?",
        a: "02/06/1921",
        b: "06/23/1832",
        c: "04/58/2321",
        d: "02/65/1923",
        correct: "b",
    },
    {
        question: "Johnpaul C____??",
        a: "Cock",
        b: "Cockpalar",
        c: "Cockterpillar",
        d: "none of the above",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const introContainer = document.getElementById('intro');
const jumpscare = document.getElementById('jumpscare');
const jumpscareSound = document.getElementById('jumpscareSound'); // Jumpscare sound element

let currentQuiz = 0;
let score = 0;

// Load quiz after intro ends
setTimeout(() => {
    introContainer.style.display = 'none';
    quiz.style.display = 'block';
}, 3000);  // Intro animation lasts for 3 seconds

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // Show the jumpscare image and play sound
            quiz.innerHTML = '';  // Clear the quiz content
            jumpscare.style.display = 'block';  // Display jumpscare
            jumpscareSound.play();  // Play the jumpscare sound

            // Hide the jumpscare after 2 seconds and show the final score
            setTimeout(() => {
                jumpscare.style.display = 'none';
                quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
                                  <button onclick="location.reload()">Reload</button>`;
            }, 10000);  // Jumpscare lasts for 2 seconds
        }
    }
});
