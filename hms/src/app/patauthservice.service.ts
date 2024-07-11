import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatauthService {

  constructor() { }

    authenticate(username:string,password:string){
        
      if(username=="nandini"&&password=="raj123"){

        sessionStorage.setItem('username',username);
        return true;
      }else{
        return false;
      }
    }

    isUserLoggedIn(){
  
      console.log("You are logged in as patient")
      let user=sessionStorage.getItem('username');
      console.log(user)
      return !(user==null)

    }

    logout(){

      console.log("logged in as patient")

      sessionStorage.removeItem('username');
    }
}
