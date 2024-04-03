import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { QuizService } from '../../../../../Service/quiz.service';
import { QuestionService } from '../../../../../Service/question.service';
import { ChoiseService } from '../../../../../Service/choise.service';
import { GroupService } from '../../../../../Service/group.service';
import { GradeService } from '../../../../../Service/grade.service';
import { AccountService } from '../../../../../Service/Account.service';

interface Question {
  question: string;
  options: { option: string; selected: boolean }[];
}

interface Exam {
  name: string;
  questions: Question[];
}

@Component({
  selector: 'app-createexam',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, RouterModule],
  providers: [AccountService],
  templateUrl: './createexam.component.html',
  styleUrl: './createexam.component.css',
})
export class CreateexamComponent {
  //grade: any;
  //groups: any;

  async ngOnInit(): Promise<void> {
    const instructor_id = await this.getAccountID();
    this.instructor_id = instructor_id;

    // this.QuizService.getAllQuizs().subscribe({
    //   next: (data) => {
    //     this.grade = data;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
    this.GroupService.getGroupByID(this.group_ID).subscribe({
      next: (data) => {
        this.group = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // onchange(group_ID: any) {
  //   this.group_ID = group_ID;
  // }

  instructor_id: any;
  group_ID: any;
  group: any;

  examSaved: boolean = false;

  exam: Exam = {
    name: '',
    questions: [
      {
        question: '',
        options: [
          { option: '', selected: false },
          { option: '', selected: false },
          { option: '', selected: false },
          { option: '', selected: false },
        ],
      },
    ],
  };

  private async getAccountID(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.AccountService.GetID().subscribe({
        next: (data) => resolve(data),
        error: (err) => reject(err),
      });
    });
  }

  constructor(
    private readonly QuizService: QuizService,
    private readonly QuestionService: QuestionService,
    private readonly ChoiseService: ChoiseService,
    private readonly GroupService: GroupService,
    private AccountService: AccountService,
    private Actived: ActivatedRoute,
    private router: Router
  ) {
    this.group_ID = this.Actived.snapshot.params['id'];
  }

  addQuestion() {
    const id = this.exam.questions.length + 1;
    this.exam.questions.push({
      question: '',
      options: [
        { option: '', selected: false },
        { option: '', selected: false },
        { option: '', selected: false },
        { option: '', selected: false },
      ],
    });
  }

  add() {}
  deleteQuestion(index: number) {
    this.exam.questions.splice(index, 1);
  }

  // async saveExam(examname: any) {
  //   //console.log('Saving exam:', this.exam);

  //   var examIndex: any;
  //   var questionIndex: any;
  //   var optionIndex: any;

  //   var myExam = {
  //     quiz_Name: this.exam.name,
  //     instructor_ID: this.instructor_id,
  //     group_ID: this.group_ID,
  //   };

  //   await this.QuizService.AddNewQuiz(myExam).subscribe({
  //     next: (data) => {
  //       examIndex = data;
  //     },
  //     error: (err) => {
  //       this.router.navigate([
  //         '/Error',
  //         { errormessage: err.message as string },
  //       ]);
  //     },
  //   });

  //   var questionitem = 0;
  //   this.exam.questions.forEach((question) => {
  //     var myquestion = {
  //       question_Text: question.question,
  //       quiz_ID: examIndex,
  //     };
  //     this.QuestionService.AddNewQuestion(myquestion).subscribe({
  //       next: (data) => {
  //         questionIndex = data;
  //       },
  //       error: (err) => {
  //         this.router.navigate([
  //           '/Error',
  //           { errormessage: err.message as string },
  //         ]);
  //       },
  //     });

  //     this.exam.questions[questionitem].options.forEach((option) => {
  //       var myoption = {
  //         text: option.option,
  //         isCorrect: option.selected,
  //         question_ID: questionIndex,
  //       };
  //       this.QuestionService.AddNewQuestion(myoption).subscribe({
  //         next: (data) => {
  //           optionIndex = data;
  //         },
  //         error: (err) => {
  //           this.router.navigate([
  //             '/Error',
  //             { errormessage: err.message as string },
  //           ]);
  //         },
  //       });
  //     });
  //     questionitem++;
  //   });

  //   this.exam.questions = [];

  //   this.router.navigate(['/Instructordashboard']);
  //   this.examSaved = true;

  //   setTimeout(() => {
  //     this.examSaved = false;
  //   }, 3000);
  // }

  async saveExam(examname: any) {
    try {
      let examIndex: any;
      const myExam = {
        quiz_Name: this.exam.name,
        instructor_ID: this.instructor_id,
        group_ID: this.group_ID,
      };

      examIndex = await this.QuizService.AddNewQuiz(myExam).toPromise();

      for (const question of this.exam.questions) {
        let questionIndex: any;
        const myquestion = {
          question_Text: question.question,
          quiz_ID: examIndex,
        };

        questionIndex = await this.QuestionService.AddNewQuestion(
          myquestion
        ).toPromise();

        for (const option of question.options) {
          const myoption = {
            text: option.option,
            isCorrect: option.selected,
            question_ID: questionIndex,
          };

          await this.ChoiseService.AddNewChoise(myoption).toPromise();
        }
      }

      this.exam.questions = [];
      this.router.navigate(['/Instructordashboard']);
      this.examSaved = true;

      setTimeout(() => {
        this.examSaved = false;
      }, 3000);
    } catch (err) {
      this.router.navigate(['/Error']);
    }
  }

  addOption(questionIndex: number) {
    this.exam.questions[questionIndex].options.push({
      option: '',
      selected: false,
    });
  }

  deleteOption(questionIndex: number, optionIndex: number) {
    this.exam.questions[questionIndex].options.splice(optionIndex, 1);
  }

  CheckOption(questionIndex: number, optionIndex: number) {
    this.exam.questions[questionIndex].options.forEach((option) => {
      option.selected = false;
    });

    this.exam.questions[questionIndex].options[optionIndex].selected = true;
  }

  getTotalQuestions(): number {
    return this.exam.questions.length;
  }

  getTotalOptions(questionIndex: number): number {
    return this.exam.questions[questionIndex].options.length;
  }
}
