import { CanActivateFn, Router } from '@angular/router';

export const studentGuard: CanActivateFn = (route, state) => {
  

  const router = new Router();
  var User = localStorage.getItem('DataUser');
  var DataUser = JSON.parse(DataUser);
  if(DataUser.roles == "Student")
  {
    return true;
  }
  else{
    router.navigate(['/login']);
    return false;
  }
  
};
