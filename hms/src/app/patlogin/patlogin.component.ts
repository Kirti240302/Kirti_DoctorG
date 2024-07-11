import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatauthService } from '../patauthservice.service';

@Component({
  selector: 'app-patlogin',
  templateUrl: './patlogin.component.html',
  styleUrl: './patlogin.component.css'
})
export class PatloginComponent {

   username:string='';
   password:string='';
   
   inValidLogin=false;

   constructor(private router:Router,private docauth:PatauthService){}

   checkLogin(){
                 
             if(this.docauth.authenticate(this.username,this.password)){
            
                this.router.navigate(['patdash'])
                this.inValidLogin=false

             }
             else{
                     this.inValidLogin=true
                      alert("Wrong Credintials")
                      this.router.navigate(['home'])
                    
             }
   }
}
