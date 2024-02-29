class Start {
  constructor() {
    this.playerName = "Kamu";
    this.botName = "Computer";
    this.playerOption;
    this.botOption;
    this.Winner = "";
  }

  get getBotOption() {
    return this.botOption;
  }

  set setBotOption(option) {
    this.botOption = option;
  }

  get getPlayerOption() {
    return this.playerOption;
  }

  set setPlayerOption(option) {
    this.playerOption = option;
  }

  botBrain() {
    const option = ["🖐🏻", "✌🏻", "✊🏻"];
    const bot = option[Math.floor(Math.random() * option.length)];
    return bot;
  }

  winCalculation() {
    if (this.botOption == "🖐🏻" && this.playerOption == "✌🏻") {
      return (this.Winner = this.playerName);
    } else if (this.botOption == "🖐🏻" && this.playerOption == "✊🏻") {
      return (this.Winner = this.botName);
    } else if (this.botOption == "✌🏻" && this.playerOption == "🖐🏻") {
      return (this.Winner = this.botName);
    } else if (this.botOption == "✌🏻" && this.playerOption == "✊🏻") {
      return (this.Winner = this.playerName);
    } else if (this.botOption == "✊🏻" && this.playerOption == "🖐🏻") {
      return (this.Winner = this.playerName);
    } else if (this.botOption == "✊🏻" && this.playerOption == "✌🏻") {
      return (this.Winner = this.botName);
    } else {
      return (this.Winner = "Seri");
    }
  }

  matchResult() {
    if (this.Winner != "Seri") {
      return `${this.Winner} MENANG!`;
    } else {
      return `${this.Winner}, gak ada yang menang😂`;
    }
  }
}

function pilihan(params) {
  const start = new Start();
  start.setPlayerOption = params;
  start.setBotOption = start.botBrain();
  start.winCalculation();

  const inGame = document.getElementById("inGame");
  const result = document.getElementById("result");
  const mulai = document.getElementById("title");

  setTimeout(() => {
    mulai.textContent = "Match Result";
  }, 2000);

  inGame.textContent = "...";
  result.textContent = "...";
  setTimeout(() => {
    inGame.textContent = `Kamu ${start.getPlayerOption} VS ${start.getBotOption} Computer`;
    result.textContent = start.matchResult();
  }, 2000);
}
