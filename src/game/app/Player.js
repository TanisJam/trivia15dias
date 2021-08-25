export default class Player {
  constructor(obj) {
    let difSchemes = {
      
    };
    this.avatar = obj.avatar;
    this.difficulty = obj.difficulty;
    this.name = obj.name;
    this.questions = obj.questions || false;
    
  }
  getQuestion() {
    if(this.questions){

      const question = {
        category: this.questions.pFacil[0].category,
        question: this.questions.pFacil[0].question,
        correct: this.questions.pFacil[0].correct_answer,
        incorrect_1: this.questions.pFacil[0].incorrect_answers[0],
        incorrect_2: this.questions.pFacil[0].incorrect_answers[1],
        incorrect_3: this.questions.pFacil[0].incorrect_answers[2],
      };
      return question;
    }
    return false;
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
    };
    return data;
  }
}
