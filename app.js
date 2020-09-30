    let userScore = 0;
    let computerScore = 0;
    const userScore_span = document.getElementById("user-score");
    const computerScore_span = document.getElementById("computer-score");
    const scoreBoard_div = document.querySelector(".score-board");
    const result_p = document.querySelector(".result > p");
    const talpa_div = document.getElementById("t");
    const gandac_div = document.getElementById("g");
    const bomba_div = document.getElementById("b");

    function getComputerChoice() {
    const choices = ['t', 'g', 'b'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
    }

    function convertToWord(letter) {
    if (letter === "t") return "talpa";
    if (letter === "g") return "gandac";
    return "bomba atomica"
    }

    function win(userChoice, computerChoice) {
      const smallUserWord = "user".fontsize(3).sub();
      const smallCompWord = "comp".fontsize(3).sub();
      const userChoice_div = document.getElementById(userChoice);
      userScore++;
      userScore_span.innerHTML = userScore;
      computerScore_span.innerHTML = computerScore;
      result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win! 🔥`;
      userChoice_div.classList.add('green-glow');
      setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
    }

    function lose(userChoice, computerChoice) {
      const smallUserWord = "user".fontsize(3).sub();
      const smallCompWord = "comp".fontsize(3).sub();
      const userChoice_div = document.getElementById(userChoice);
      computerScore++;
      userScore_span.innerHTML = userScore;
      computerScore_span.innerHTML = computerScore;
      result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost... 💩`;
      userChoice_div.classList.add('red-glow');
      setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
    }

    function draw(userChoice, computerChoice) {
      const smallUserWord = "user".fontsize(3).sub();
      const smallCompWord = "comp".fontsize(3).sub();
      const userChoice_div = document.getElementById(userChoice);
      result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw.`;
      userChoice_div.classList.add('gray-glow');
      setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
    }

    function game(userChoice) {
    const ComputerChoice = getComputerChoice();
    switch (userChoice + ComputerChoice) {
      case "tb":
      case "gt":
      case "bg":
        win(userChoice, ComputerChoice);
        break;
      case "tg":
      case "gb":
      case "bt":
       lose(userChoice, ComputerChoice);
       break;
      case "tt":
      case "gg":
      case "ss":
       draw(userChoice, ComputerChoice);
       break;
     }
   }

   function main() {
     talpa_div.addEventListener('click', () => game("t"));
     gandac_div.addEventListener('click', () => game("g"));
     bomba_div.addEventListener('click', () => game("b"));
   }

   main();
