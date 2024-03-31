import { Component } from '@angular/core';
import { GroupService } from '../../Service/group.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StudentGroupService } from '../../Service/student-group.service';

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
  imports: [FormsModule,HttpClientModule],
  providers:[GroupService],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
})
export class PaymentComponent {
  userId: any;
  user: any;
  price:number=0
  groupID: any
  object:any
  constructor(private route: ActivatedRoute,private readonly groupservice:GroupService,private readonly studentgroup:StudentGroupService, private router: Router) {}
  ngOnInit(): void {
<<<<<<< HEAD
    const groupID = 1
    //  this.route.snapshot.paramMap.get('id');
=======
    const groupID = this.route.snapshot.paramMap.get('id');
>>>>>>> 3ed754b6642800819259a76f452590bf686ab54f
    this.object={}
    this.groupservice.getGroupByID(groupID).subscribe(
      (data) => {
      
        this.object=data
        // this.object.num_Students ++;
        // const storedNumStudents = localStorage.getItem('num_Students');
        // if (storedNumStudents) {
        //     this.object.num_Students = parseInt(storedNumStudents);
        // }
        this.initPayPal();
      })
  }
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

<<<<<<< HEAD
  this.object.num_Students++;
  // localStorage.setItem('num_Students', this.object.num_Students.toString());
 
  this.groupservice.updateGroup(this.object.group_ID, this.object).subscribe(
=======
  this.object.num_Students++ ;
  this.groupservice.updateGroup(this.groupID, this.object).subscribe(
>>>>>>> 3ed754b6642800819259a76f452590bf686ab54f
    (data) => {
    
      this.router.navigate(['/choocegrade']);
      console.log("Updated ");
    },
    (error) => {
      console.log("Error", error);
    }
  );
}
 addnewStudentGroup(){
  const newStudentGroup = {
    student_ID: 1,
    group_ID: 1,
    enroll_Date: new Date()
    

  };
 
  this.studentgroup.AddNewStudentgroup(newStudentGroup).subscribe(
    (response) => {
      console.log('added', response);
<<<<<<< HEAD
      // this.object.num_Students ++;
      this.router.navigate(['/courseselected']);

=======
      this.object.num_Students++;
      this.router.navigate(['/mycourses']);
>>>>>>> 3ed754b6642800819259a76f452590bf686ab54f
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
                  value:this.object.price
                },
              },
            ],
          });
        },
        
        onApprove: (data, actions) => {
          return actions.order.capture().then((details: any) => {
            console.log( details);
            // this.object.num_Students ++;
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
