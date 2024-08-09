import { Component } from '@angular/core';
import { NavComponent } from 'src/app/modules/pages/components/nav/nav.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {RouterLink,RouterOutlet} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [NavComponent, MatIconModule,MatInputModule,MatFormFieldModule,MatButtonToggleModule,RouterLink,RouterOutlet,MatButtonModule
    ,MatExpansionModule
  ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

}
