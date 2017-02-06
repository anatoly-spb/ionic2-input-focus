import { Component, Input, ViewChild } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data: string;
  @ViewChild('input') input;
  
  constructor(public navCtrl: NavController) {
  }

  ionViewDidEnter() {
    setTimeout(()=>{
      this.input.setFocus();
    }, 500);
  }

  focusInputMember() {
    this.input.setFocus();
  }


  focusInput(element: any) {
    element.setFocus();
  } 


}
