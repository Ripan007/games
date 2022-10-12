const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");
let play = false;
let newWords = "";
let randomWords = "";
let sWords = [
  "python",
  "javaScript",
  "c++",
  "php",
  "java",
  "c#",
  "html",
  "css",
  "reactJs",
  "angular",
  "swift",
  "android",
  "sql",
];
const createNewWords = () => {
  let ranNum = Math.floor(Math.random() * sWords.length);
  let newTempWords = sWords[ranNum];
  return newTempWords;
};
const scrambleWords = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    let j = Math.floor(Math.random() * (i + 1));
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};
btn.addEventListener("click", function () {
  if (!play) {
    play = true;
    btn.innerHTML = "guess";
    guess.classList.toggle("hidden");
    newWords = createNewWords();
    randomWords = scrambleWords(newWords.split("")).join(" ");
    msg.innerHTML = `Guess the word: ${randomWords}`;
  } else {
    let tempWord = guess.value;
    if (tempWord === newWords) {
      play = false;
      msg.innerHTML = `Awesome . It,s correct . it is ${newWords}`;
      btn.innerHTML = "Start Again";
      guess.classList.toggle("hidden");
      guess.value = "";
    } else {
      msg.innerHTML = `Sorry Boss . It,s incorrect . plz try again ${randomWords}`;
    }
  }
});
