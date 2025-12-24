import { Component } from '@angular/core';
import { FormContact } from '../../components/molecules/form-contact/form-contact';

@Component({
  selector: 'app-contact',
  imports: [FormContact],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
