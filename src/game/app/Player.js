import swal from "sweetalert";
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
    this.medallas = {
      bronce: 0,
      plata: 0,
      oro: 0,
    };
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
  async final(correctAnswers) {
    switch (correctAnswers) {
      case 6:
        this.medallas.bronce++;
        await swal({
          title: "Final",
          text: `Acertaste ${correctAnswers} preguntas!
          Ganas un medalla de bronce!`,
          icon: "success",
        });
        break;
      case 7:
        this.medallas.plata++;
        await swal({
          title: "Final",
          text: `Acertaste ${correctAnswers} preguntas!
          Ganas un medalla de plata!`,
          icon: "success",
        });
        break;
      case 8:
        this.medallas.oro++;
        await swal({
          title: "Final",
          text: `Acertaste todas las preguntas!
          Ganas un medalla de oro!`,
          icon: "success",
        });
        break;

      default:
        await swal({
          title: "Final",
          text: `Acertaste ${correctAnswers} preguntas!
          Solo ${6 - correctAnswers} mas y tenias medalla!`,
          icon: "info",
        });
        break;
    }

    this.level = 0;
    this.progress = [];
    this.save();
    location = "./";
  }
  async checkQuestion(e) {
    const answer = e.target.getAttribute("correct");

    this.level++;
    if (answer) {
      this.progress.push("pass");
      await swal({
        title: "Correcto!",
        text: `Efectivamente! ${this.currentQuestion.correct_answer} era la correcta!`,
        icon: "success",
      });
    } else {
      this.progress.push("fail");
      await swal({
        title: "Incorrecto!",
        text: `Lamentablemente ${this.currentQuestion.correct_answer} era la correcta!`,
        icon: "error",
      });
    }
    this.currentQuestion = false;
    this.save();
    if (this.level > 7) {
      const corrects = this.progress.reduce((acc, next) => {
        if (next === "pass") {
          return acc + 1;
        }
        return acc;
      }, 0);
      this.final(corrects);
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
      medallas: this.medallas,
    };
    return data;
  }
}
