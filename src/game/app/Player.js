export default class Player {
  constructor(obj) {
    this.avatar = obj.avatar;
    this.difficulty = obj.difficulty;
    this.name = obj.name;
    this.questions = obj.questions || false;
    this.currentQuestion = obj.currentQuestion || false;
    this.level = obj.level || 0;
    this.diffSchemes = [
      ["f", "f", "f", "f", "f", "m", "m", "d"],
      ["f", "f", "f", "f", "m", "m", "d", "d"],
      ["f", "f", "f", "m", "m", "d", "d", "d"],
      ["f", "f", "m", "m", "d", "d", "d", "d"],
      ["f", "m", "m", "d", "d", "d", "d", "d"],
      ["m", "m", "d", "d", "d", "d", "d", "d"],
    ];
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
      return question;
    }
    return false;
  }
  checkQuestion(e) {
    const answer = e.target.getAttribute("correct");

    if (answer) {
      console.log('Correcto!')
    } else {
      console.log('Incorrecto!')
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
    };
    return data;
  }
}
