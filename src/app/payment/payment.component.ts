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

  
  
  
  studentid: any;
  //student: any;
  //price: number = 0;
  groupID: any;
  group: any;
  
  constructor(
    private route: ActivatedRoute,
    private readonly groupservice: GroupService,
    private readonly studentgroup: StudentGroupService,
    private router: Router,
    private readonly AccountService: AccountService
  ) {}

  ngOnInit(): void {
    const groupID = this.route.snapshot.paramMap.get('id');
    //this.object={}

    // this.AccountService.GetID().subscribe({
    //   next: (data) => {
    //     this.studentid = data;
    //   },
    //   error: (err) => {
    //     this.router.navigate([
    //       '/Error',
    //       { errormessage: err.message as string },
    //     ]);
    //   });

    

    this.groupservice.getGroupByID(groupID).subscribe((data) => {
      this.group = data;

      this.initPayPal();
    });

}
  
// =======
//   this.object.num_Students++ ;
//   this.groupservice.updateGroup(this.groupID, this.object).subscribe(
//     (data) => {
    
//       this.router.navigate(['/choocegrade']);
//       console.log("Updated ");
//     },
//     (error) => {
//       console.log("Error", error);
//     }
//   );
// }
//  addnewStudentGroup(){
//   const newStudentGroup = {
//     student_ID: 1,
//     group_ID: 1,
//     enroll_Date: new Date()
    

//   };
 
//   this.studentgroup.AddNewStudentgroup(newStudentGroup).subscribe(
//     (response) => {
//       console.log('added', response);
//       // this.object.num_Students ++;
//       this.router.navigate(['/courseselected']);

//     },
//     (error) => {
//       console.error('Error ', error);

//     }
//   );
// >>>>>>> 1ca57f66ac9129de7fe1c4878e1484285512129b

//   }
  //   updateUser() {

  //     // const groupid = this.object.groupID;
  // this.object.num_Students ++;

  //     this.groupservice.updateGroup(this.object.groupID, this.object).subscribe(
  //       (data) => {

  //         // this.object.numOfStudents ++;
  //          this.router.navigate(['/choocegrade']);
  //          console.log("update fun ");
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // }

  updateUser() {

    this.group.num_Students++;

    this.groupservice.updateGroup(this.groupID, this.group).subscribe(
      (data) => {
        //this.router.navigate(['/choocegrade']);
        console.log('Updated ');
      },
      (error) => {
        console.log('Error', error);
      }
    );

  }

  addnewStudentGroup() {

    const newStudentGroup = {
      student_ID: this.studentid,
      group_ID: 1,
      enroll_Date: new Date(),
    };
    this.studentgroup.AddNewStudentgroup(newStudentGroup).subscribe(
      (response) => {
        console.log('added', response);
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
