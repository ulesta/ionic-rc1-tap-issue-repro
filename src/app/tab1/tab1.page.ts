import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  data = [];

  constructor(private navCtrl: NavController) {
    for (let i = 0; i < 100; i++) {
      this.data.push(i);
    }
  }

  handleScrollStart() {
    console.log('💀 scroll started');
  }

  handleScrollEnd() {
    console.log('👻 scroll ended');
  }

  logout() {
    this.data = [];
    this.navCtrl.navigateRoot('/', { animated: false, animationDirection: 'forward' });
  }
}
