import { Component, OnInit } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core.js';


const random = () => {
  const min = 100;
  const max = 400;

  return Math.random() * (+max - +min) + +min;
}

@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new Typewriter(document.getElementById('typewriter'), { loop: false })
      .typeString('full ')
      .pauseFor(random())
      .typeString('stack')
      .pauseFor(random())
      .typeString(' software')
      .pauseFor(random())
      .typeString(' developer')
      .start();
  }
}
