import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  notifications: any[];

  constructor(
    private navService: NavigationService
  ) {}
  
  ngOnInit() {
  }

  toggelSidebar() {
    const state = this.navService.sidebarState;
    // if(!state.sidenavOpen) {
    //   return state.sidenavOpen = true;
    // }
    if (state.childnavOpen && state.sidenavOpen) {
      return state.childnavOpen = false;
    }
    if (!state.childnavOpen && state.sidenavOpen) {
      return state.sidenavOpen = false;
    }
    if (!state.sidenavOpen && !state.childnavOpen) {
        state.sidenavOpen = true;
        setTimeout(() => {
            state.childnavOpen = true;
        }, 50);
    }
  }

  

}
