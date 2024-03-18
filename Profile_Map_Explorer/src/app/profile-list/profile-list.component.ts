import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent {
  profiles: any;
  profile: any;
  router: any;
  
  constructor(private api:ProfileService){}
  
  ngOnInit(): void {
      this.api.ProfileDetails().subscribe((data)=>{
       this.profile=data;
       console.log(this.profile);
    });
    }

details(){

    this.router.navigateByUrl('DashBorad')
  }
}