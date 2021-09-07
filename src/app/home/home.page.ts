import { Component } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private animationCtrl: AnimationController,
              private router: Router) { }
  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 3500); 
  }
  ngAfterViewInit() {
    const animation = this.animationCtrl.create()
      .addElement(document.querySelector('#divLogo'))
      .duration(3000)
      .iterations(1)
      .fromTo("opacity", 0, 1);

    animation.play();
  }

}
