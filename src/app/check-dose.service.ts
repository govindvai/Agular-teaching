import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckDoseService {
  data: any;

  constructor(private https:HttpClient) { }
  getDoseData(district_id: string, date: any ): Observable<any>{
   const HttpParam = new HttpParams({
     fromObject: {
      district_id : district_id,
      date : date,
     }
   })
   return this.https.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?", {params: HttpParam}  )

  }
  sendMessgae(){
  //  const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
  //  const authToken = 'your_auth_token';
   
  //  // require the Twilio module and create a REST client
  //  const client = System.import('twilio')(accountSid, authToken);
   
  //  client.messages
  //    .create({
  //      to: '+15558675310',
  //      from: '+15017122661',
  //      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
  //    })
  //    .then(message => console.log(message.sid));
 
  }
  getStateId(){
    return this.https.get('https://cdn-api.co-vin.in/api/v2/admin/location/states');
  }
  getDistId(stateId: string){
    return this.https.get('https://cdn-api.co-vin.in/api/v2/admin/location/districts/' + stateId);
  }

  

}
