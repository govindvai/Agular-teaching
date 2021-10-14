import { Component, OnInit } from '@angular/core';
import { CheckDoseService } from '../check-dose.service';
import { DatePipe } from '@angular/common'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-get-alert',
  templateUrl: './get-alert.component.html',
  styleUrls: ['./get-alert.component.css']
})
export class GetAlertComponent implements OnInit {

   mydate: any = {};
   district_id: string = '';
   datal = [];
   centers = [];
   state: any  = [];
   states: any = [];
   dist: any  = [];
   districts: any = [];
   session = [];
   slot = false;
   UserInput = new FormGroup({
    ageGroup: new FormControl(''),
    Dose: new FormControl(''),
    state: new FormControl(''),
    district: new FormControl(''),
  });
  ageGroup : number = 18;
  dose: string = 'Dose1';
  printSlotData: boolean = false;
 
  constructor(private CheckDose: CheckDoseService, public datepipe: DatePipe) { }
  ngOnInit(): void {
    this.CheckDose.getStateId().subscribe(statesData=>(
      this.state = statesData,
      this.states = this.state.states
      
    ));
  }
  onRegiter(){
        this.mydate = new Date();
        this.district_id = this.UserInput.value['district'];
        let latest_date =this.datepipe.transform(this.mydate, 'dd/MM/yyyy')
        this.CheckDose.getDoseData(this.district_id,latest_date ).subscribe(data =>(
          this.centers = data.centers
        ));
      setTimeout(()=>{
        this.printData()
      },1000)
    }

  printData(){
    this.printSlotData = true;
      for(let i = 0; i < this.centers.length; i++){
        const ss = this.centers[i];
        this.datal = ss["sessions"]
        for(let j = 0; j < this.datal.length; j++){
            const dose = this.datal[j];
            const available_capacity = dose["available_capacity"];
            const available_capacity_dose1 = dose["available_capacity_dose1"];
            const available_capacity_dose2 = dose["available_capacity_dose2"];
            const min_age_limit = dose["min_age_limit"]
            if(this.UserInput.value['Dose'] == 'Dose1'){
              if(this.UserInput.value['ageGroup'] == min_age_limit){
                if(available_capacity_dose1>0){
                  this.slot = true
                }
              }
            }
            else{
              if(this.ageGroup == min_age_limit){
                if(available_capacity_dose2>0){
                  this.slot = true
                }
              }
            }
         }
      }
      if(this.slot == true){
        this.alert()
      }
      else{
        console.log('No slot');
        
      }
   
  }
  alert(){
    this.CheckDose.sendMessgae()
     console.log('slot is available')
  }
  selected(){
    const stateId = this.UserInput.value['state'];
    this.CheckDose.getDistId(stateId).subscribe(data =>(
      this.dist = data,
      this.districts = this.dist.districts
     ));
  }
}
