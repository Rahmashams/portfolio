const questions = [{
        text: "ماذا تفعل إذا استخدمت الهاتف لفترة طويلة وشعرت بتعب في يديك؟",
        sound: "assets/sounds/q1.mp3",
        options: [
            { img: "assets/images/img1.png", score: 1 },
            { img: "assets/images/img2.png", score: 2 },
            { img: "assets/images/img3.png", score: 3 }
        ]
    },
    {
        text: "إذا جلست وقتًا طويلًا على الهاتف، ماذا يحدث؟",
        sound: "assets/sounds/q2.mp3",
        options: [
            { img: "assets/images/img1.png", score: 1 },
            { img: "assets/images/img2.png", score: 2 },
            { img: "assets/images/img3.png", score: 3 }
        ]
    },
    {
        text: "إذا استخدمت الهاتف قبل النوم، ماذا تشعر؟",
        sound: "assets/sounds/q3.mp3",
        options: [
            { img: "assets/images/img1.png", score: 1 },
            { img: "assets/images/img2.png", score: 2 },
            { img: "assets/images/img3.png", score: 3 }
        ]
    }
];

let index = 0;
let total = 0;
let selectedScore = null;
let currentSound = "";

function startQuiz() {
    document.getElementById("startScreen").classList.remove("active");
    document.getElementById("quizScreen").classList.add("active");
    showQuestion();
}

function showQuestion() {
    const q = questions[index];
    document.getElementById("questionText").innerText = q.text;
    currentSound = q.sound;
    selectedScore = null;

    let html = "";
    q.options.forEach(opt => {
        html += `
      <div class="option" onclick="selectOption(this, ${opt.score})">
        <img src="${opt.img}">
      </div>
    `;
    });

    document.getElementById("options").innerHTML = html;
}

function selectOption(el, score) {
    document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
    el.classList.add("selected");
    selectedScore = score;
}

function playSound() {
    const audio = document.getElementById("sound" (ر ص; audio.src = currentSound;

                audio.play();
            }

            function nextQuestion() {
                if (selectedScore === null) {
                    alert("اختاري إجابة أولًا");
                    return;
                }

                total += selectedScore;
                index++;

                if (index < questions.length) {
                    showQuestion();
                } else {
                    alert("انتهى المقياس 🌸\nمجموع الدرجات: " + total);
                }
            }