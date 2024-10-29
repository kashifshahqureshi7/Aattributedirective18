import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'attributedirective';

  mycountry = 'Pakistan';
  
  employees: any[] = [
    { name: 'Kashif Shah', City: 'Dera Ismail Khan' },
    { name: 'Asif Shah', City: 'Islamabad' },
    { name: 'Saqib Shah', City: 'Peshawar' },
    
  ]
  getcolor(City: any) {
    switch (City) {
      case 'Dera Ismail Khan':
        return 'blue';
      case 'Islamabad':
        return 'red';
      case 'Peshawar':
        return 'pink';
    }
    return null
    
  }
}
