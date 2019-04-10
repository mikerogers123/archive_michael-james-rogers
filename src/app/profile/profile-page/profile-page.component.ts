import { Component, OnInit } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core.js';

@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new Typewriter(document.getElementById('typewriter'), {loop: false})
      .typeString('<strong>Human: </strong>')
      .typeString('Hello how are you?')
      .pauseFor(2500)
      .typeString('<br/>')
      .typeString('<strong>Bot: </strong>')
      .typeString('I am fine thanks, how are you?')
      .pauseFor(2500)
      .typeString('<br/>')
      .typeString('<strong>Human: </strong> ')
      .typeString('I am great!')
      .pauseFor(2500)
      .start();
  }
}
