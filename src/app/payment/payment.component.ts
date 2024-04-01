import { Component } from '@angular/core';
import { GroupService } from '../../Service/group.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StudentGroupService } from '../../Service/student-group.service';
import { AccountService } from '../../Service/Account.service';

declare var paypal: {
  Buttons: (arg0: {
    createOrder: (data: any, actions: any) => any;
    onApprove: (data: any, actions: any) => any;
    onError: (err: any) => void;
  }) => { (): any; new (): any; render: { (arg0: string): void; new (): any } };
};

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  providers: [GroupService, AccountService, StudentGroupService],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
})
export class PaymentComponent {
  studentId: any;
  groupID: any;
  group: any;

  constructor(
    private route: ActivatedRoute,
    private readonly groupservice: GroupService,
    private readonly studentgroup: StudentGroupService,
    private router: Router,
    private readonly AccountService: AccountService
  ) {}

  async ngOnInit(): Promise<void> {
    const groupID = this.route.snapshot.paramMap.get('id');

    console.log(this.studentId);

    const studentId = await this.getAccountID();
    this.studentId = studentId;

    this.groupservice.getGroupByID(groupID).subscribe((data) => {
      this.group = data;

      this.initPayPal();
    });
  }

  private async getAccountID(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.AccountService.GetID().subscribe({
        next: (data) => resolve(data),
        error: (err) => reject(err),
      });
    });
  }

  updateUser() {
    this.group.num_Students++;

    this.groupservice.updateGroup(this.group.group_ID, this.group).subscribe(
      (data) => {
        console.log('Updated ');
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

  addnewStudentGroup() {
    const newStudentGroup = {
      student_ID: this.studentId,
      group_ID: this.group.group_ID,
      enroll_Date: new Date(),
    };

    this.studentgroup.AddNewStudentgroup(newStudentGroup).subscribe(
      (response) => {
        console.log('added', response);
        this.router.navigate(['/Showsessions/' + this.group.group_ID]);
      },
      (error) => {
        console.error('Error ', error);
      }
    );
  }

  initPayPal(): void {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: this.group.price,
                },
              },
            ],
          });
        },

        onApprove: (data, actions) => {
          return actions.order.capture().then((details: any) => {
            //console.log(details);
            this.updateUser();

            this.addnewStudentGroup();
          });
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render('#paypal-button-container');
  }
}
