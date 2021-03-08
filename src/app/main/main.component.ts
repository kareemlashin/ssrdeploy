import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isAdmin: boolean = true;
  call() {
    if (this.isAdmin) {
      this.isAdmin = false;
    } else {
      this.isAdmin = true;

    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
