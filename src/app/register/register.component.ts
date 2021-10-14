import { Component, OnInit } from '@angular/core';
import { CheckDoseService } from '../check-dose.service';
import { FormControl, FormControlName, FormGroup, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   

   profileForm = new FormGroup({
    state: new FormControl(''),
    number: new FormControl(''),
    opt: new FormControl(''),
    Color1: new FormControl(''),
    Color2: new FormControl(''),
    Color3: new FormControl(''),
    Color4: new FormControl(''),
    Color5: new FormControl(''),
    combination1: new FormControl(''),
    combination2: new FormControl(''),
    combination3: new FormControl(''),
    combination4: new FormControl(''),
    combination5: new FormControl(''),
  });
  constructor(private CheckDose: CheckDoseService, private http: HttpClient) { }
  ngOnInit(): void {
    //console.log('hi ravi');
    this.onRegiter();
    
  }
  // onRegiter(){
  //       console.log(this.profileForm);
  //       this.http.post('https://vacc-alert-default-rtdb.firebaseio.com/userData.json',
  //        this.profileForm.value ).subscribe(data => {
  //          console.log(data)
  //        });
      
  disPro: boolean = false
  // }
  onRegiter(){
    //console.log('hello');
    //this.disPro = true;
    
  }
  optios = ["1","sdsds","sdsdsas","rwerwe","dsdas","dsadsa","SDSADSA"]
  showopt1!: boolean;
  selecOpt(){
    if(this.profileForm.value['state'] === "Option2"){
      this.showopt1 = true;
    } else{
      this.showopt1 = false;
    }

  }


  
}
