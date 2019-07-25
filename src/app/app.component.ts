import { Component } from '@angular/core';
import json from '../assets/pl/exams.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string = '';
  currentQuestion:number = 0;
  answeredQuestion:number = 0;
  questionsCount:number = 0;
  questions = {};

  constructor() {
    let exam = json.exams.exam[0];
    let questions = exam.questions;

    this.title = exam.name;
    this.questions = questions;
    this.questionsCount = questions.length;
  }

  showQuestion(idQuestion:number): void
  {
    this.currentQuestion = idQuestion;
  }

  showPercentCount(questionsCount:number ):number
  {
    return Math.round( (this.answeredQuestion / questionsCount) * 100 );
  }

  checkAnswer(idQuestion:number, idAnswer:number, questions): void
  {
    let answers = questions[idQuestion].answers;
    for(let i=0; i<answers.length; i++) {
      answers[i].checked = (i == idAnswer) ? true : false;
    }

    this.countAnswers(questions);
  }

  private countAnswers(questions) : void
  {
    let answeredQuestion = 0;
    for (let question of questions) {
      for (let answer of question.answers) {
        if (answer.checked == true) {
          answeredQuestion++;
        }
      }
    }

    this.answeredQuestion = answeredQuestion;
  }

  submitExam(questions): boolean
  {
    if (this.answeredQuestion === questions.length) {

      let col1_A = 0;
      let col1_B = 0;

      let col2_A = 0;
      let col2_B = 0;

      let col3_A = 0;
      let col3_B = 0;

      let col4_A = 0;
      let col4_B = 0;

      let col5_A = 0;
      let col5_B = 0;

      let col6_A = 0;
      let col6_B = 0;

      let col7_A = 0;
      let col7_B = 0;

      let idQuestion = 0;
      questions.forEach((question, index) => {
        idQuestion = index + 1;
        question.answers.forEach((answer, idAnswer) => {
          if(answer.checked == true) {

            if (idQuestion == 1  ||
                idQuestion == 8  ||
                idQuestion == 15 ||
                idQuestion == 22 ||
                idQuestion == 29 ||
                idQuestion == 36 ||
                idQuestion == 43 ||
                idQuestion == 50 ||
                idQuestion == 57 ||
                idQuestion == 64 )
            {
              if (idAnswer == 0) { col1_A++; } else { col1_B++; }
            }

            if (idQuestion == 2  ||
                idQuestion == 9  ||
                idQuestion == 16 ||
                idQuestion == 23 ||
                idQuestion == 30 ||
                idQuestion == 37 ||
                idQuestion == 44 ||
                idQuestion == 51 ||
                idQuestion == 58 ||
                idQuestion == 65 )
            {
              if (idAnswer == 0) { col2_A++; } else { col2_B++; }
            }

            if (idQuestion == 3  ||
                idQuestion == 10  ||
                idQuestion == 17 ||
                idQuestion == 24 ||
                idQuestion == 31 ||
                idQuestion == 38 ||
                idQuestion == 45 ||
                idQuestion == 52 ||
                idQuestion == 59 ||
                idQuestion == 66 )
            {
              if (idAnswer == 0) { col3_A++; } else { col3_B++; }
            }

            if (idQuestion == 4  ||
                idQuestion == 11  ||
                idQuestion == 18 ||
                idQuestion == 25 ||
                idQuestion == 32 ||
                idQuestion == 39 ||
                idQuestion == 46 ||
                idQuestion == 53 ||
                idQuestion == 60 ||
                idQuestion == 67 )
            {
              if (idAnswer == 0) { col4_A++; } else { col4_B++; }
            }

            if (idQuestion == 5  ||
                idQuestion == 12  ||
                idQuestion == 19 ||
                idQuestion == 26 ||
                idQuestion == 33 ||
                idQuestion == 40 ||
                idQuestion == 47 ||
                idQuestion == 54 ||
                idQuestion == 61 ||
                idQuestion == 68 )
            {
              if (idAnswer == 0) { col5_A++; } else { col5_B++; }
            }

            if (idQuestion == 6  ||
                idQuestion == 13  ||
                idQuestion == 20 ||
                idQuestion == 27 ||
                idQuestion == 34 ||
                idQuestion == 41 ||
                idQuestion == 48 ||
                idQuestion == 55 ||
                idQuestion == 62 ||
                idQuestion == 69 )
            {
              if (idAnswer == 0) { col6_A++; } else { col6_B++; }
            }

            if (idQuestion == 7  ||
                idQuestion == 14  ||
                idQuestion == 21 ||
                idQuestion == 28 ||
                idQuestion == 35 ||
                idQuestion == 42 ||
                idQuestion == 49 ||
                idQuestion == 56 ||
                idQuestion == 63 ||
                idQuestion == 70 )
            {
              if (idAnswer == 0) { col7_A++; } else { col7_B++; }
            }

          }
        })
      })

      // sum types
      let personalityType = "";

      personalityType += (col1_B > col1_A) ? "I" : "E";

      personalityType += ( (col3_B + col2_B) > (col3_A + col2_A)) ? "N" : "S";

      personalityType += ( (col5_B + col4_B) > (col5_A + col4_A)) ? "F" : "T";

      personalityType += ( (col7_B + col6_B) > (col7_A + col6_A)) ? "P" : "J";

      alert(personalityType);
      console.log(personalityType);
    }

    return false;
  }

}
