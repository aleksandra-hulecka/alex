import { Component } from '@angular/core';
import json from '../assets/exams.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string = '';
  questions = {};

  constructor() {
   this.title = json.exams.exam[0].name;
   this.questions = json.exams.exam[0].questions;
  }

  checkAnswer(idQuestion:number, idAnswer:number): void
  {
    let answers = this.questions[idQuestion].answers;
    for(let i=0; i<answers.length; i++) {
      answers[i].checked = (i == idAnswer) ? true : false;
    }

    console.log(this.questions);
  }

  submitExam(): void
  {
    // This method loop through JSON (this.questions) updated by checked radio buttons.
    // Goal of this method is to sum question points and provide result of person personality

    console.log(this.questions);
  }

}
