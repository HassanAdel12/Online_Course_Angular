import { CanActivateFn, Router } from '@angular/router';

export const studentGuard: CanActivateFn = (route, state) => {
  

  const router = new Router();
  var DataUser :any;
  DataUser = localStorage.getItem('DataUser');
  DataUser = JSON.parse(DataUser);
  console.log(DataUser)
  if(DataUser.roles == "Student")
  {
    return true;
  }
  else{
    router.navigate(['/login']);
    return false;
  }
  
};
