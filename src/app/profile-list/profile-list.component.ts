import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Profile } from './profile.model';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  @Input() profileListParam: Profile[];
  @Output() profileClicked: EventEmitter<Profile>;

  constructor() {
    this.profileClicked = new EventEmitter();
  }

  ngOnInit(): void {
    console.log('Estoy en ProfileListComponent y me han pasado esto:::', this.profileListParam);
  }

  miFuncionClick(p: Profile) {
    // Aqui podriamos hacer la accion interna del evento
    console.log('Han clicado en:::', p);

    // Y finalmente propagamos el evento hacia arriba
    this.profileClicked.emit(p);
  }

}
