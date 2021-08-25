import Store from "./../../app/Store.js";
const store = new Store();

export default class Player {
  constructor(obj) {
    this.avatar = obj.avatar;
    this.difficulty = obj.difficulty;
    this.name = obj.name;
    this.questions = obj.questions || false;
    this.currentQuestion = obj.currentQuestion || false;
    this.level = obj.level || 0;
    this.progress = obj.progress || [];
    this.diffSchemes = [
      ["f", "f", "f", "f", "f", "m", "m", "d"],
      ["f", "f", "f", "f", "m", "m", "d", "d"],
      ["f", "f", "f", "m", "m", "d", "d", "d"],
      ["f", "f", "m", "m", "d", "d", "d", "d"],
      ["f", "m", "m", "d", "d", "d", "d", "d"],
      ["m", "m", "d", "d", "d", "d", "d", "d"],
    ];
  }
  save() {
    store.editPlayerData(this.getData());
  }
  getQuestion() {
    if (this.questions) {
      if (!this.currentQuestion) {
        const difficulty = this.diffSchemes[this.difficulty];
        this.currentQuestion = this.questions[difficulty[this.level]].pop();
      }
      const question = {
        category: this.currentQuestion.category,
        question: this.currentQuestion.question,
        correct: this.currentQuestion.correct_answer,
        incorrect_1: this.currentQuestion.incorrect_answers[0],
        incorrect_2: this.currentQuestion.incorrect_answers[1],
        incorrect_3: this.currentQuestion.incorrect_answers[2],
      };
      this.save();
      return question;
    }
    return false;
  }
  checkQuestion(e) {
    const answer = e.target.getAttribute("correct");

    this.level++;
    this.currentQuestion = false;

    if (answer) {
      this.progress.push("pass");
      window.alert("Correcto!");
    } else {
      this.progress.push("fail");
      window.alert("Incorrecto!");
    }
    this.save();
    if (this.level > 7) {
      this.questions = false;
      this.level = 0;
      this.progress= [];
      this.save();
      location = "./";
    } else {
      location = "./game.html";
    }
  }

  setQuestions(questionsToAdd) {
    if (!this.questions) {
      this.questions = questionsToAdd;
    }
  }
  getData() {
    const data = {
      avatar: this.avatar,
      difficulty: this.difficulty,
      name: this.name,
      questions: this.questions,
      currentQuestion: this.currentQuestion,
      level: this.level,
      progress: this.progress,
    };
    return data;
  }
}
