import { Component } from '@angular/core';
import json from '../assets/exams.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test psychologiczny';

  constructor() {
   this.title = json.exams.exam[0].name;
  console.log(json);

  }

//for.exams[0]questions[0];
//  else.exams[1]questions[1];

}

//console.log(angular.toJson($scope.exams.json));

// $http.get('assets/exams.json');
