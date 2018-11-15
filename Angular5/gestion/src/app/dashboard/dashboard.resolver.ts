import {Injectable} from '@angular/core';
import { Resolve } from '@angular/router';

    import { DashboardService } from './dashboard.service';

@Injectable()
export class DashboardResolver implements Resolve<any>{

  constructor(private userService: DashboardService){

  }
  resolve(){
    return this.userService.getAll();
  }
}