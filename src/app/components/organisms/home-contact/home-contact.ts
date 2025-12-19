import { Component } from '@angular/core';
import { FormContact } from '../../molecules/form-contact/form-contact';

@Component({
  selector: 'app-home-contact',
  imports: [FormContact],
  templateUrl: './home-contact.html',
  styleUrl: './home-contact.scss',
})
export class HomeContact {}
