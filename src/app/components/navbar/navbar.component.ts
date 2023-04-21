import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

 

export class NavbarComponent {
  logoUrl:string = '../../assets/logo.png';


  private getNav(): string {
    return localStorage.getItem('nav') || 'true';
  }

  private setNav(val:boolean): void {
    localStorage.setItem('nav', JSON.stringify(val));
  }



  navbarActive:boolean = JSON.parse(this.getNav());

  toggleNav(){
    this.navbarActive = !this.navbarActive;
    this.setNav(this.navbarActive);

    if(this.navbarActive){
      document.getElementById('logo')?.classList.add('animate-open');
    }else{
      document.getElementById('logo')?.classList.add('animate-close');
    }

    
    setTimeout(() => {
      document.getElementById('logo')?.classList.remove('animate-open');
      document.getElementById('logo')?.classList.remove('animate-close');
    }, 500)

    
  }


  
}
