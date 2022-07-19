let againBtn = document.getElementById("yeni-oyun");
let checkBtn = document.getElementById("yoxla");
let message = document.getElementById("mesaj");
let scoreText = document.getElementById("xal");
let score = 20;
let highscoreText = document.getElementById("yuksek-xal");
let highscore = 0;
let inputNumber;
let guessNumber = document.getElementById("eded");
let randomNumber = Math.trunc(Math.random() * 20 + 1);

checkBtn.addEventListener("click", function(){
    inputNumber = document.getElementById("input").value;
    if (randomNumber == inputNumber) {
        message.innerText = "Tebrikler";
        document.body.style.backgroundColor = "#60b347";
        if (score > highscore) {
            highscore = score;
            highscoreText.innerText = score;
        }
    } else if (randomNumber > inputNumber) {
        message.innerText = "Bir az yuxari qalxin...";
        score--;
        scoreText.innerText = score;
    } else if (randomNumber < inputNumber) {
        message.innerText = "Bir az asagi dusun...";
        score--;
        scoreText.innerText = score;
    }
});

againBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = "#222";
    document.getElementById("input").value = "";
    randomNumber = Math.trunc(Math.random() *20 +1);
    message.innerText = "Aglimdaki ededi tap...";
    scoreText.innerText = 20;
    score = 20;
});