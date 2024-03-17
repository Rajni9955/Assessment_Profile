import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent {
  dataById: any;
  profile: any;
  data: any;

  constructor(private commonApiCallService:ProfileService){}

details(){  
this.commonApiCallService.ProfileDetails().subscribe((data)=>{
    this.profile=data;
    console.log(this.profile);
 });
}


  async deleteRecord(id:number){     
    await this.commonApiCallService.deleteApiCall('profile', id).toPromise();}
  }

    // async edit(id: number) { 
    
    // this.dataById = await this.commonApiCallService.editApiCall('profile', id).toPromise();
    // this.dataById = this.dataById
     
    //   